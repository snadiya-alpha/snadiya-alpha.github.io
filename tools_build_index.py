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
    ("Boundborne", ["boundborne.html","jjp.html","pack00.html","pack01.html","gag.html","extra01.html","extra02.html","ff.html"]),
    ("FBFC", ["fbfc-comic.html","corridor.html","fbfc-art.html","fbfc-files.html","pack1.html"]),
    ("Sperm Whale", ["whale.html","renders.html","animation.html"]),
    ("Afflatus", ["afflatus.html"]),
    ("PanTied", ["pantied.html"]),
    ("Silent Whale", ["silentwhale.html"]),
    ("Bound Corp", ["boundcorp.html"]),
]
# lower on the page: works that parody a game, one button per game
GAMES = [
    ("Control", ["corridor.html","fbfc-comic.html","fbfc-art.html","fbfc-files.html","pack1.html"]),
    ("Silent Hill", ["disgust.html","traveler.html"]),
    ("Marathon", ["pantied.html"]),
    ("Fallout", ["silentwhale.html"]),
    ("Fall Guys", ["fallgirls.html"]),
]
FACETS = [('format', 'Format'), ('characters', 'Characters'), ('themes', 'Themes'),
          ('settings', 'Settings'), ('franchise', 'Games')]

DIMS = {}
_dj = os.path.join(THUMBDIR, '_dims.json')
if os.path.exists(_dj):
    DIMS = {k: tuple(v) for k, v in json.load(io.open(_dj, encoding='utf-8')).items()}

items, raws, tags = {}, {}, {}
for f in sorted(glob.glob(os.path.join(BASE, '*.html'))):
    fn = os.path.basename(f)
    # unlisted test copies (-cf = Cloudflare image tests) and the collection pages this script writes
    if fn in SKIP or fn.endswith('-cf.html') or fn.startswith('c-'):
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
    w, h = DIMS.get(slug, (520, 768))
    if os.path.exists(os.path.join(THUMBDIR, slug + '.webp')):
        img = ('        <a class="thumbwrap" href="' + f + '" tabindex="-1" aria-hidden="true">'
               '<img class="thumb" src="thumbs/' + slug + '.webp" width="' + str(w) +
               '" height="' + str(h) + '" loading="lazy" decoding="async" alt=""></a>\n')
    # tags stay in data-tags so filtering still works, but are not drawn on the card.
    # data-w/data-h give justify.js each picture's real shape for the justified rows.
    mine = all_tags(f)
    # Comic / Render Set always shows on the card (Jet 2026-09-30)
    fv = tags.get(f, {}).get('format', [])
    fmt = ('<span class="fmt">' + html.escape(' + '.join(fv)) + '</span>') if fv else ''
    cls = 'card featured' if f in FEATURED else 'card'
    return ('      <div class="' + cls + '" data-w="' + str(w) + '" data-h="' + str(h) + '" data-tags="' +
            html.escape("|".join(mine), True) + '">\n' + img +
            '        <span class="cardtext"><a class="name" href="' + f + '">' + html.escape(t) +
            '</a>' + fmt + '</span>\n      </div>')


USED_COVERS = set()


def coll_slug(name):
    return 'c-' + re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-') + '.html'


def coll_button(name, files, key):
    # each collection gets its own cover: the first of its comics not already used by an earlier collection.
    # A one-work collection opens that comic; a bigger one opens its own collection page.
    f0 = next((f for f in files if f not in USED_COVERS and os.path.exists(os.path.join(THUMBDIR, f[:-5] + '.webp'))), files[0])
    USED_COVERS.add(f0)
    slug = f0[:-5]
    img = ''
    if os.path.exists(os.path.join(THUMBDIR, slug + '.webp')):
        w, h = DIMS.get(slug, (520, 768))
        img = ('<img class="coll-img" src="thumbs/' + slug + '.webp" width="' + str(w) + '" height="' + str(h) +
               '" loading="lazy" decoding="async" alt="">')
    href = files[0] if len(files) == 1 else coll_slug(name)
    return ('      <a class="coll" href="' + href + '">' + img + '<span class="coll-name">' + html.escape(name) +
            '</span></a>')


colls, gcolls = {}, {}
for name, files in GAMES:
    got = [f for f in files if f in items]
    if got:
        gcolls[name] = got
for name, files in CATS:
    got = [f for f in files if f in items]
    if got:
        colls[name] = got

COLLS = ('    <section id="collections">\n    <h2>Curated &amp; Featured</h2>\n    <div class="coll-grid">\n' +
         "\n".join(coll_button(n, fs, 'settings') for n, fs in colls.items()) + '\n    </div>\n    </section>')
GAMESEC = ('    <section id="games">\n    <h2>Video Games</h2>\n    <div class="coll-grid">\n' +
           "\n".join(coll_button(n, fs, 'franchise') for n, fs in gcolls.items()) + '\n    </div>\n    </section>')

allf = sorted(items, key=lambda f: items[f][0].lower())


def card_all(f):
    return card(f).replace(' data-tags="', ' data-id="' + f + '" data-tags="', 1)


# --- the sidebar: booru-style groups, one option per line, fixed order (most used first) so nothing moves on click
GROUPS = [('format', 'Format'), ('settings', 'Universe'), ('franchise', 'Franchise'), ('characters', 'Character'), ('themes', 'Tags')]
side = []
for key, lab in GROUPS:
    counts = collections.Counter()
    for f in items:
        counts.update(tags.get(f, {}).get(key, []))
    if not counts:
        continue
    rows = ''.join('<li><label class="opt"><input type="checkbox" data-k="' + key + '" value="' + html.escape(v, True) +
                   '"><span class="opt-t">' + html.escape(v) + '</span><span class="opt-n">' + str(counts[v]) +
                   '</span></label></li>' for v in sorted(counts, key=lambda v: (-counts[v], v.lower())))
    side.append('        <section class="grp"><h3>' + lab + '</h3><ul>' + rows + '</ul></section>')
SIDE = ('      <aside class="side"><button type="button" class="done-btn">Done</button>\n' + "\n".join(side) +
        '\n      </aside>')
ACTIVE = ('      <div id="active" aria-live="polite"><div class="chips"></div>'
          '<button type="button" class="clear-btn" hidden>Clear all</button></div>')
WORKS = json.dumps([dict(id=f, title=items[f][0], **{k: tags.get(f, {}).get(k, []) for k, _ in GROUPS}) for f in allf],
                   ensure_ascii=False).replace('</', '<\\/')

ALLSEC = ('    <section id="all">\n    <h2>All comics</h2>\n    <div class="browse">\n' + SIDE +
          '\n      <div class="results">\n      <button type="button" class="filters-btn">Filters</button>\n' + ACTIVE +
          '\n    <div class="grid jgrid" id="all-grid">\n' + "\n".join(card_all(f) for f in allf) +
          '\n    </div>\n      </div>\n    </div>\n    </section>')

# Flickr's justified-layout (vendored, MIT) sizes the picture rows; justify.js only places the cards it returns
JUSTIFY_TAGS = ('    <script src="vendor/justified-layout-4.1.0.min.js"></script>\n'
                '    <script src="justify.js"></script>\n')

BODY = ('<!--body-->\n' + COLLS + '\n' + ALLSEC + '\n' + GAMESEC +
        '\n    <script src="vendor/itemsjs-2.4.4.umd.js"></script>\n' + JUSTIFY_TAGS +
        '    <script>var WORKS=' + WORKS + ';</script>\n    <!--endbody-->')

CSS = ('/*cards*/'
       '.wrap{max-width:1280px}'
       '.grid{align-items:start;grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}'
       '.card{display:flex;flex-direction:column;gap:0;padding:0}'
       '.card[hidden]{display:none}'
       '.thumbwrap{display:block;line-height:0;overflow:hidden;border-radius:11px 11px 0 0}'
       '.thumb{display:block;width:100%;height:230px;object-fit:contain;background:#15121b}'
       '.cardtext{display:flex;align-items:center;padding:14px 16px}'
       '.cardtext{flex-direction:column;align-items:flex-start;gap:4px}'
       '.fmt{font-size:15px;font-weight:600;line-height:1.2;color:var(--text)}'
       '.name{font-weight:700;font-size:17px;line-height:1.3;overflow-wrap:anywhere;color:var(--text)}'
       '.card.featured{border-color:var(--orange);box-shadow:0 0 0 2px var(--orange)}'
       '.coll-grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}'
       '.coll{display:flex;flex-direction:column;gap:10px;padding:0;border:0;background:none;color:inherit;font:inherit;'
       'text-align:left;cursor:pointer;text-decoration:none}'
       '.jgrid.ready{display:block;position:relative}'
       '.jgrid.ready > .card{position:absolute;top:0;left:0}'
       '.jgrid.ready .thumb{height:100%;object-fit:cover}'
       '.coll-img{display:block;width:100%;height:220px;object-fit:cover;border-radius:4px}'
       '.coll-name{font-size:20px;line-height:1.25;overflow-wrap:anywhere}'
       '#games{margin-top:48px}'
       '.browse{display:grid;grid-template-columns:300px 1fr;gap:40px;align-items:start}'
       '.side{position:sticky;top:16px;max-height:calc(100vh - 32px);overflow-y:auto;padding:4px 12px 24px 2px}'
       '.grp{margin:0 0 28px}'
       '.grp h3{font-family:var(--snz-sans);font-weight:700;font-size:15px;line-height:1.2;text-transform:uppercase;margin:0 0 10px}'
       '.grp ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:2px}'
       '.opt{display:flex;align-items:center;gap:10px;padding:6px 8px;border-radius:6px;cursor:pointer;font-size:18px;line-height:1.3}'
       '.opt:hover{background:rgba(60,24,21,.08)}'
       '.opt input{width:20px;height:20px;margin:0;flex:none;accent-color:var(--snz-deep-crimson)}'
       '.opt-t{flex:1;overflow-wrap:anywhere}'
       '.opt-n{font-variant-numeric:tabular-nums;font-weight:600}'
       '.opt.zero{cursor:not-allowed}.opt.zero:hover{background:none}'
       '#active{display:flex;flex-wrap:wrap;align-items:center;gap:8px;min-height:52px;margin:0 0 16px}'
       '#active .chips{display:flex;flex-wrap:wrap;gap:6px}'
       '.chip{font:inherit;cursor:pointer;display:inline-flex;align-items:baseline;gap:.45em;white-space:normal;text-align:left}'
       '.clear-btn{font:inherit;cursor:pointer}'
       '.filters-btn,.done-btn{display:none}'
       '@media (max-width:800px){'
       '.browse{grid-template-columns:1fr}'
       '.filters-btn{display:inline-block;font:600 18px var(--snz-sans);padding:.6em 1.2em;border-radius:100px;'
       'border:2px solid var(--snz-deep-crimson);background:var(--snz-ivory);color:var(--snz-deep-crimson);margin:0 0 12px;cursor:pointer}'
       '.side{position:fixed;inset:0 0 0 auto;width:min(360px,88vw);max-height:none;height:100vh;z-index:30;'
       'background:var(--snz-ivory);border-left:2px solid var(--snz-deep-crimson);padding:20px 16px;transform:translateX(105%);'
       'transition:transform .2s}'
       '.side.open{transform:none}'
       '.done-btn{display:block;margin:0 0 20px auto;font:600 18px var(--snz-sans);padding:.6em 1.2em;border-radius:100px;'
       'border:2px solid var(--snz-deep-crimson);background:var(--snz-deep-crimson);color:var(--snz-ivory);cursor:pointer}'
       '}'
       '/*endcards*/')

JS = r"""/*tagjs*/
(function(){
  // ItemsJS (vendor/itemsjs-2.4.4.umd.js, Apache-2.0) decides what matches and every count; this only draws them
  var KEYS=['format','settings','franchise','characters','themes'], aggs={};
  KEYS.forEach(function(k){ aggs[k]={size:1000, conjunction:true, chosen_filters_on_top:false}; });
  var engine=itemsjs(WORKS,{aggregations:aggs, native_search_enabled:false});
  var cards={}; [].forEach.call(document.querySelectorAll('#all-grid .card'),function(c){ cards[c.dataset.id]=c; });
  var boxes=[].slice.call(document.querySelectorAll('.opt input')),
      act=document.querySelector('#active .chips'), clear=document.querySelector('#active .clear-btn'),
      side=document.querySelector('.side'), fbtn=document.querySelector('.filters-btn');
  function box(k,v){ return boxes.filter(function(b){ return (!k||b.dataset.k===k)&&b.value===v; })[0]; }
  function sel(){ return boxes.filter(function(b){ return b.checked; }); }
  function chosen(){ var f={}; sel().forEach(function(b){ (f[b.dataset.k]=f[b.dataset.k]||[]).push(b.value); }); return f; }
  function sync(){
    var r=engine.search({per_page:1000, filters:chosen()}).data, shown={}, n={};
    r.items.forEach(function(it){ shown[it.id]=1; });
    Object.keys(cards).forEach(function(id){ cards[id].hidden=!shown[id]; });
    KEYS.forEach(function(k){ n[k]={}; r.aggregations[k].buckets.forEach(function(b){ n[k][b.key]=b.doc_count; }); });
    boxes.forEach(function(b){
      var c=n[b.dataset.k][b.value]||0; b.parentNode.querySelector('.opt-n').textContent=c;
      var z=!b.checked&&c===0; b.disabled=z; b.parentNode.classList.toggle('zero',z);
    });
    if(window.justify) justify(document.getElementById('all-grid'));
    act.replaceChildren();
    sel().forEach(function(b){
      var x=document.createElement('button'); x.type='button'; x.className='chip on';
      x.innerHTML='<span class="chip-t"></span><span class="chip-x" aria-hidden="true">×</span>';
      x.querySelector('.chip-t').textContent=b.value; x.setAttribute('aria-label','Remove '+b.value);
      x.onclick=function(){ b.checked=false; sync(); }; act.appendChild(x);
    });
    clear.hidden=!sel().length;
    var q=sel().map(function(b){ return encodeURIComponent(b.dataset.k+':'+b.value); });
    history.replaceState(null,'',q.length?'?f='+q.join(','):location.pathname);
  }
  boxes.forEach(function(b){ b.addEventListener('change',sync); });
  clear.onclick=function(){ boxes.forEach(function(b){ b.checked=false; }); sync(); };
  fbtn.onclick=function(){ side.classList.toggle('open'); };
  side.querySelector('.done-btn').onclick=function(){ side.classList.remove('open'); };
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') side.classList.remove('open'); });
  // links: ?f=settings:Boundborne,characters:Jane ; older ?c= and ?tag= links still work
  var p=new URLSearchParams(location.search);
  (p.get('f')||'').split(',').filter(Boolean).forEach(function(s){
    var i=s.indexOf(':'), b=box(s.slice(0,i),s.slice(i+1)); if(b) b.checked=true; });
  if(p.get('c')){ var b=box(null,p.get('c')); if(b) b.checked=true; }
  (p.get('tag')||'').split('+').filter(Boolean).forEach(function(t){ var b=box(null,t); if(b) b.checked=true; });
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

# --- one page per collection with more than one work: its name, then its pictures in justified rows
HEAD = new[:new.index('</head>')]
made = []
for name, files in list(colls.items()) + list(gcolls.items()):
    if len(files) < 2:
        continue
    page = (HEAD.replace('<title>Comics</title>', '<title>' + html.escape(name) + '</title>', 1) + '</head>\n<body>\n'
            '<div class="wrap">\n<h1>' + html.escape(name) + '</h1>\n'
            '<p class="crumb"><a class="plain" href="index.html">All comics</a></p>\n'
            '<div class="grid jgrid">\n' + "\n".join(card(f) for f in files) + '\n</div>\n</div>\n' +
            JUSTIFY_TAGS + '</body>\n</html>\n')
    io.open(os.path.join(BASE, coll_slug(name)), 'w', encoding='utf-8', newline='\n').write(page)
    made.append(coll_slug(name))
print("  collection pages: " + ", ".join(made))

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
