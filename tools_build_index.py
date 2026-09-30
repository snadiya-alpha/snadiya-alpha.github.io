import re, io, glob, html, collections, os, sys, json

OUT = sys.argv[1] if len(sys.argv) > 1 else '_repo/index.html'
BASE = os.path.dirname(OUT) or '.'
THUMBDIR = os.path.join(BASE, 'thumbs')

SKIP = {'index.html','reader-template.html','gallery-template.html','measure-dims.html','collator.html',
        'comics.html','reader-ui-recreations.html','strip-reader-prototype.html','vault-7f3a91.html',
        'boundborne-full.html','boundborne-sample.html','downloads.html','corp-generator.html',
        'sitemap.html','not_found.html','spermwhale.html','aislinne.html','peril.html'}
FEATURED = {'silentwhale.html'}
MANUAL = {'jjp.html': ("Jessica & Judy's Peril", 0, 0), 'animation.html': ("Sperm Whale: Animation", 0, 16)}
CATS = [
    ("Boundborne", ["boundborne.html","pack01.html","pack00.html","gag.html","jjp.html"]),
    ("Federal Bureau of Fetish Control", ["corridor.html","fbfc-comic.html","fbfc-art.html","fbfc-files.html"]),
    ("Video Game Inspired", ["boundborne.html","corridor.html","disgust.html","fallgirls.html"]),
    ("DC", ["dc1.html","dc2.html","harleyraven.html"]),
    ("Peril", ["bulletgirl.html","perilvore.html","jjp.html"]),
    ("Gag Packs", ["gag.html","bunny.html"]),
]
FACETS = [('characters', 'Characters'), ('themes', 'Themes'),
          ('settings', 'Settings'), ('franchise', 'Games')]

DIMS = {}
_dj = os.path.join(THUMBDIR, '_dims.json')
if os.path.exists(_dj):
    DIMS = {k: tuple(v) for k, v in json.load(io.open(_dj, encoding='utf-8')).items()}

items, raws, tags = {}, {}, {}
for f in sorted(glob.glob(os.path.join(BASE, '*.html'))):
    fn = os.path.basename(f)
    if fn in SKIP:
        continue
    s = io.open(f, encoding='utf-8', errors='replace').read()
    raws[fn] = s
    if fn in MANUAL:
        items[fn] = MANUAL[fn]
    else:
        m = re.search(r'window\.CONFIG\s*=\s*\{', s)
        if not m:
            continue
        t = re.search(r'"?title"?\s*:\s*"([^"]*)"', s[m.start():m.start()+1200])
        ch = re.findall(r'"?folder"?\s*:\s*"[^"]*"[^}]*?"?from"?\s*:\s*(\d+)\s*,\s*"?to"?\s*:\s*(\d+)', s)
        if not t or not ch:
            continue
        items[fn] = (t.group(1), len(ch), sum(int(b) - int(a) + 1 for a, b in ch))
    got = {}
    for key, _lab in FACETS:
        mm = re.search(r'name="' + key + r'" content="([^"]*)"', s)
        got[key] = [x.strip() for x in mm.group(1).split(',')] if mm else []
        got[key] = [x for x in got[key] if x]
    tags[fn] = got


def all_tags(f):
    out = []
    for key, _lab in FACETS:
        out += tags.get(f, {}).get(key, [])
    return out


def chip(t, cls='chip'):
    return ('<button type="button" class="' + cls + '" data-tag="' + html.escape(t, True) + '">' +
            html.escape(t) + '</button>')


def card(f):
    t = items[f][0]
    slug = f[:-5]
    img = ''
    if os.path.exists(os.path.join(THUMBDIR, slug + '.webp')):
        w, h = DIMS.get(slug, (520, 768))
        img = ('        <a class="thumbwrap" href="' + f + '" tabindex="-1" aria-hidden="true">'
               '<img class="thumb" src="thumbs/' + slug + '.webp" width="' + str(w) +
               '" height="' + str(h) + '" loading="lazy" decoding="async" alt=""></a>\n')
    # tags stay in data-tags so filtering still works, but are not drawn on the
    # card -- a variable-length chip block made every card a different height
    mine = all_tags(f)
    cls = 'card featured' if f in FEATURED else 'card'
    return ('      <div class="' + cls + '" data-tags="' + html.escape("|".join(mine), True) + '">\n' + img +
            '        <span class="cardtext"><a class="name" href="' + f + '">' + html.escape(t) +
            '</a></span>\n      </div>')


MIN_SHOWN = 3   # tags that match fewer comics than this go into the "More tags" panel


USED_COVERS = set()


def coll_button(name, files):
    # each collection gets its own cover: the first of its comics not already used by an earlier collection
    f0 = next((f for f in files if f not in USED_COVERS and os.path.exists(os.path.join(THUMBDIR, f[:-5] + '.webp'))), files[0])
    USED_COVERS.add(f0)
    slug = f0[:-5]
    img = ''
    if os.path.exists(os.path.join(THUMBDIR, slug + '.webp')):
        w, h = DIMS.get(slug, (520, 768))
        img = ('<img class="coll-img" src="thumbs/' + slug + '.webp" width="' + str(w) + '" height="' + str(h) +
               '" loading="lazy" decoding="async" alt="">')
    return ('      <button type="button" class="coll" data-coll="' + html.escape(name, True) + '" aria-pressed="false">' +
            img + '<span class="coll-name">' + html.escape(name) + '</span></button>')


colls = {}
for name, files in CATS:
    got = [f for f in files if f in items]
    if got:
        colls[name] = got
in_coll = collections.defaultdict(list)
for name, files in colls.items():
    for f in files:
        in_coll[f].append(name)

COLLS = ('    <section id="collections">\n    <h2>Collections</h2>\n    <div class="coll-grid">\n' +
         "\n".join(coll_button(n, fs) for n, fs in colls.items()) + '\n    </div>\n    </section>')


def card_all(f):
    c = card(f)
    return c.replace('<div class="', '<div data-colls="' + html.escape("|".join(in_coll.get(f, [])), True) + '" class="', 1)


allf = sorted(items, key=lambda f: items[f][0].lower())


# --- the tag bar: tags matching MIN_SHOWN+ comics up front, the rest in a panel; every chip shows its count
def tchip(t, n):
    return ('<button type="button" class="chip filt" data-tag="' + html.escape(t, True) + '" aria-pressed="false">' +
            '<span class="chip-t">' + html.escape(t) + '</span><span class="chip-n">' + str(n) + '</span></button>')


shown, more = [], []
for key, lab in FACETS:
    counts = collections.Counter()
    for f in items:
        counts.update(tags.get(f, {}).get(key, []))
    if not counts:
        continue
    ordered = sorted(counts, key=lambda t: (-counts[t], t.lower()))
    big = [t for t in ordered if counts[t] >= MIN_SHOWN]
    small = [t for t in ordered if counts[t] < MIN_SHOWN]
    if big:
        shown.append('        <div class="facet"><h3>' + html.escape(lab) + '</h3><div class="chips">' +
                     "".join(tchip(t, counts[t]) for t in big) + '</div></div>')
    if small:
        more.append('          <div class="facet"><h3>' + html.escape(lab) + '</h3><div class="chips">' +
                    "".join(tchip(t, counts[t]) for t in small) + '</div></div>')
TAGBAR = ('      <div id="tagbar">\n' + "\n".join(shown) + '\n' +
          '        <div class="more-wrap"><button type="button" class="more-btn" aria-expanded="false" aria-controls="more-panel">'
          'More tags</button>\n        <div id="more-panel" class="more-panel" hidden>\n' + "\n".join(more) +
          '\n        </div></div>\n      </div>')
ACTIVE = ('      <div id="active" aria-live="polite"><div class="chips"></div>'
          '<button type="button" class="clear-btn" hidden>Clear all</button></div>')

ALLSEC = ('    <section id="all">\n    <h2>All comics</h2>\n' + TAGBAR + '\n' + ACTIVE +
          '\n    <div class="grid" id="all-grid">\n' + "\n".join(card_all(f) for f in allf) + '\n    </div>\n    </section>')

BODY = '<!--body-->\n' + COLLS + '\n' + ALLSEC + '\n    <!--endbody-->'

CSS = ('/*cards*/'
       '.grid{align-items:start}'
       '.card{display:flex;flex-direction:column;gap:0;padding:0}'
       '.card[hidden]{display:none}'
       '.thumbwrap{display:block;line-height:0;overflow:hidden;border-radius:11px 11px 0 0}'
       '.thumb{display:block;width:100%;height:230px;object-fit:contain;background:#15121b}'
       '.cardtext{display:flex;align-items:center;padding:14px 16px}'
       '.name{font-weight:700;font-size:17px;line-height:1.3;overflow-wrap:anywhere;color:var(--text)}'
       '.card.featured{border-color:var(--orange);box-shadow:0 0 0 2px var(--orange)}'
       '.coll-grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}'
       '.coll{display:flex;flex-direction:column;gap:10px;padding:0;border:0;background:none;color:inherit;font:inherit;'
       'text-align:left;cursor:pointer}'
       '.coll-img{display:block;width:100%;height:220px;object-fit:cover;border-radius:4px}'
       '.coll-name{font-size:20px;line-height:1.25;overflow-wrap:anywhere}'
       '.chip{font:inherit;cursor:pointer;display:inline-flex;align-items:baseline;gap:.45em;white-space:normal;text-align:left}'
       '.chip-n{font-variant-numeric:tabular-nums}'
       '#tagbar{display:flex;flex-direction:column;gap:14px;margin:0 0 18px}'
       '#tagbar .facet{display:flex;flex-direction:column;gap:7px}'
       '#tagbar h3{margin:0}'
       '#tagbar .chips,#active .chips{display:flex;flex-wrap:wrap;gap:6px}'
       '.more-wrap{position:relative}'
       '.more-btn{font:inherit;cursor:pointer}'
       '.more-panel{position:absolute;left:0;top:calc(100% + 10px);z-index:20;width:min(760px,calc(100vw - 32px));'
       'max-height:min(70vh,560px);overflow-y:auto;display:flex;flex-direction:column;gap:14px;padding:20px}'
       '.more-panel[hidden]{display:none}'
       '#active{display:flex;flex-wrap:wrap;align-items:center;gap:8px;min-height:52px;margin:0 0 20px}'
       '.clear-btn{font:inherit;cursor:pointer}'
       '/*endcards*/')

JS = r"""/*tagjs*/
(function(){
  var grid=document.getElementById("all-grid"), bar=document.getElementById("tagbar"),
      act=document.getElementById("active"), actChips=act.querySelector(".chips"), clear=act.querySelector(".clear-btn"),
      moreBtn=bar.querySelector(".more-btn"), panel=document.getElementById("more-panel"),
      cards=[].slice.call(grid.querySelectorAll(".card")), tags=[], coll=null;
  function list(c,a){ return (c.getAttribute(a)||"").split("|").filter(Boolean); }
  function match(c,extraTag){
    var t=list(c,"data-tags"), k=list(c,"data-colls"), want=tags.concat(extraTag?[extraTag]:[]);
    if(coll&&k.indexOf(coll)<0) return false;
    return want.every(function(x){ return t.indexOf(x)>=0; });
  }
  function mini(label,kind,val){
    var b=document.createElement("button"); b.type="button"; b.className="chip on";
    b.dataset.kind=kind; b.dataset.val=val; b.setAttribute("aria-label","Remove "+label);
    var s=document.createElement("span"); s.className="chip-t"; s.textContent=label;
    var x=document.createElement("span"); x.className="chip-x"; x.setAttribute("aria-hidden","true"); x.textContent="×";
    b.appendChild(s); b.appendChild(x); return b;
  }
  function sync(){
    cards.forEach(function(c){ c.hidden=!match(c); });
    [].forEach.call(document.querySelectorAll(".chip.filt"),function(b){
      var t=b.dataset.tag, on=tags.indexOf(t)>=0;
      b.setAttribute("aria-pressed",on?"true":"false");
      var n=cards.filter(function(c){ return match(c,on?null:t); }).length;
      b.querySelector(".chip-n").textContent=n;
      if(!on&&n===0) b.setAttribute("aria-disabled","true"); else b.removeAttribute("aria-disabled");
    });
    [].forEach.call(document.querySelectorAll(".coll"),function(b){ b.setAttribute("aria-pressed",b.dataset.coll===coll?"true":"false"); });
    actChips.replaceChildren();
    if(coll) actChips.appendChild(mini(coll,"coll",coll));
    tags.forEach(function(t){ actChips.appendChild(mini(t,"tag",t)); });
    clear.hidden=!(coll||tags.length);
    var q=[]; if(coll) q.push("c="+encodeURIComponent(coll)); if(tags.length) q.push("tag="+tags.map(encodeURIComponent).join("+"));
    history.replaceState(null,"",q.length?"?"+q.join("&"):location.pathname);
  }
  function openPanel(o){ panel.hidden=!o; moreBtn.setAttribute("aria-expanded",o?"true":"false"); }
  document.addEventListener("click",function(e){
    var el=e.target; if(!el||!el.closest) return;
    var f=el.closest(".chip.filt"), c=el.closest(".coll"), m=el.closest("#active .chip.on");
    if(f){ e.preventDefault(); if(f.getAttribute("aria-disabled")==="true") return;
      var t=f.dataset.tag, i=tags.indexOf(t); if(i>=0) tags.splice(i,1); else tags.push(t); sync(); return; }
    if(c){ coll=(coll===c.dataset.coll)?null:c.dataset.coll; sync();
      document.getElementById("all").scrollIntoView({block:"start",behavior:"smooth"}); return; }
    if(m){ if(m.dataset.kind==="coll") coll=null; else tags.splice(tags.indexOf(m.dataset.val),1); sync(); return; }
    if(el.closest(".clear-btn")){ tags=[]; coll=null; sync(); return; }
    if(el.closest(".more-btn")){ openPanel(panel.hidden); return; }
    if(!panel.hidden&&!el.closest("#more-panel")) openPanel(false);
  });
  document.addEventListener("keydown",function(e){ if(e.key==="Escape"&&!panel.hidden){ openPanel(false); moreBtn.focus(); } });
  var p=new URLSearchParams(location.search);
  if(p.get("tag")) tags=p.get("tag").split("+").map(decodeURIComponent).filter(Boolean);
  if(p.get("c")) coll=p.get("c");
  sync();
})();
/*endtagjs*/"""


tpl = io.open(OUT, encoding='utf-8').read()
if '<!--body-->' in tpl:
    new, n = re.subn(r'<!--body-->.*?<!--endbody-->', lambda m: BODY, tpl, flags=re.S)
else:
    new, n = re.subn(r'(<div class="wrap">\s*<h1>Comics</h1>).*?(\s*</div>\s*</body>)',
                     lambda m: m.group(1) + "\n" + BODY + m.group(2), tpl, flags=re.S)
if n != 1:
    raise SystemExit("body not replaced (matched %d times) -- refusing to write a stale index" % n)
if '/*cards*/' in new:
    new = re.sub(r'/\*cards\*/.*?/\*endcards\*/', lambda m: CSS, new, flags=re.S)
else:
    new = re.sub(r'\.card\{display:flex;flex-direction:column;gap:0.*?\.cardtext\{[^}]*\}', '', new, flags=re.S)
    new = new.replace('</style>', '  ' + CSS + '\n</style>', 1)
if '/*tagjs*/' in new:
    new = re.sub(r'/\*tagjs\*/.*?/\*endtagjs\*/', lambda m: JS, new, flags=re.S)
else:
    new = new.replace('</body>', '<script>\n' + JS + '\n</script>\n</body>', 1)
io.open(OUT, 'w', encoding='utf-8', newline='\n').write(new)

used = collections.Counter()
for f in items:
    used.update(all_tags(f))
print("  %d works, %d sections, %d distinct tags -> %s" % (len(items), len(colls), len(used), OUT))
for key, lab in FACETS:
    c = collections.Counter()
    for f in items:
        c.update(tags.get(f, {}).get(key, []))
    print("    %-11s %2d tags" % (lab, len(c)))
untagged = [f for f in items if not all_tags(f)]
if untagged:
    print("    UNTAGGED: " + ", ".join(sorted(untagged)))
