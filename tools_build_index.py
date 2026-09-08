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


def section(name, files):
    return ('    <h2>' + html.escape(name) + '</h2>\n    <div class="grid">\n' +
            "\n".join(card(f) for f in files) + '\n    </div>')


secs = []
for name, files in CATS:
    got = [f for f in files if f in items]
    if got:
        secs.append(section(name, got))

allf = sorted(items, key=lambda f: items[f][0].lower())
secs.append('    <h2>All</h2>\n    <div class="grid">\n' +
            "\n".join(card(f) for f in allf) + '\n    </div>')

# --- the tag bar: every tag that is actually used, grouped by facet
bar = []
for key, lab in FACETS:
    counts = collections.Counter()
    for f in items:
        counts.update(tags.get(f, {}).get(key, []))
    if not counts:
        continue
    ordered = sorted(counts, key=lambda t: (-counts[t], t.lower()))
    bar.append('      <div class="facet"><h3>' + html.escape(lab) + '</h3><div class="chips">' +
               "".join(chip(t, 'chip filt') for t in ordered) + '</div></div>')
TAGBAR = '    <div id="tagbar">\n' + "\n".join(bar) + '\n    </div>'

BODY = ('<!--body-->\n' + TAGBAR + '\n    <div id="sections">\n' + "\n".join(secs) + '\n    </div>\n' +
        '    <div id="results" hidden><div class="grid"></div></div>\n    <!--endbody-->')

CSS = ('/*cards*/'
       '.grid{align-items:start}'
       '.card{display:flex;flex-direction:column;gap:0;padding:0}'
       # overflow lives on the thumb wrapper, never the card -- the card must be
       # free to grow so no tag is ever clipped
       '.thumbwrap{display:block;line-height:0;overflow:hidden;border-radius:11px 11px 0 0}'
       '.thumb{display:block;width:100%;height:230px;object-fit:contain;background:#15121b;'
       'border-bottom:1px solid var(--line)}'
       '.cardtext{display:flex;align-items:center;padding:14px 16px;min-height:74px}'
       '.name{font-weight:700;font-size:17px;line-height:1.3;overflow-wrap:anywhere;'
       'color:var(--text);text-decoration:none}'
       '.name:hover,.name:focus-visible{color:var(--orange);text-decoration:underline}'
       '.card.featured{border-color:var(--orange);box-shadow:0 0 0 2px var(--orange)}'
       '.card.featured .thumb{border-bottom-color:var(--orange)}'
       '.tags{display:flex;flex-wrap:wrap;gap:5px}'
       '.chip{font:inherit;font-size:12px;line-height:1.35;padding:3px 9px;border-radius:999px;'
       'border:1px solid var(--line);background:transparent;color:var(--text-2);cursor:pointer;'
       'white-space:normal;text-align:left}'
       '.chip:hover,.chip:focus-visible{border-color:var(--orange);color:var(--orange);outline:none}'
       '.chip[aria-pressed="true"]{background:var(--orange);border-color:var(--orange);color:#1b1420;font-weight:600}'
       '#tagbar{display:flex;flex-direction:column;gap:14px;margin:0 0 30px}'
       '#tagbar .facet{display:flex;flex-direction:column;gap:7px}'
       '#tagbar h3{margin:0;font-size:13px;letter-spacing:.09em;text-transform:uppercase;color:var(--text-2)}'
       '#tagbar .chips{display:flex;flex-wrap:wrap;gap:6px}'
       '/*endcards*/')

JS = """/*tagjs*/
(function(){
  var bar=document.getElementById("tagbar"),
      secs=document.getElementById("sections"),
      res=document.getElementById("results"),
      grid=res.querySelector(".grid"),
      active=[];
  function cards(){ return Array.prototype.slice.call(secs.querySelectorAll(".card")); }
  var ALL=[], seen={};
  cards().forEach(function(c){
    var k=c.querySelector(".name").getAttribute("href");
    if(seen[k]){ return; } seen[k]=1; ALL.push(c);
  });
  function sync(){
    var on=active.length>0;
    Array.prototype.forEach.call(document.querySelectorAll(".chip"),function(b){
      b.setAttribute("aria-pressed", active.indexOf(b.dataset.tag)>=0 ? "true":"false");
    });
    secs.hidden=on; res.hidden=!on;
    if(!on){ grid.replaceChildren(); history.replaceState(null,"",location.pathname); return; }
    var hit=ALL.filter(function(c){
      var t=(c.dataset.tags||"").split("|");
      return active.every(function(a){ return t.indexOf(a)>=0; });
    });
    grid.replaceChildren.apply(grid, hit.map(function(c){ return c.cloneNode(true); }));
    history.replaceState(null,"","?tag="+active.map(encodeURIComponent).join("+"));
  }
  document.addEventListener("click",function(e){
    var b=e.target.closest?e.target.closest(".chip"):null;
    if(!b){ return; }
    e.preventDefault();
    var t=b.dataset.tag, i=active.indexOf(t);
    if(i>=0){ active.splice(i,1); } else { active.push(t); }
    sync();
    if(active.length){ bar.scrollIntoView({block:"start",behavior:"smooth"}); }
  });
  var q=new URLSearchParams(location.search).get("tag");
  if(q){ active=q.split("+").map(decodeURIComponent).filter(Boolean); sync(); }
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
print("  %d works, %d sections, %d distinct tags -> %s" % (len(items), len(secs), len(used), OUT))
for key, lab in FACETS:
    c = collections.Counter()
    for f in items:
        c.update(tags.get(f, {}).get(key, []))
    print("    %-11s %2d tags" % (lab, len(c)))
untagged = [f for f in items if not all_tags(f)]
if untagged:
    print("    UNTAGGED: " + ", ".join(sorted(untagged)))
