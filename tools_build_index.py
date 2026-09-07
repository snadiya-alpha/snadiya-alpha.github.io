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
    ("Federal Bureau of Fetish Control", ["corridor.html","fbfc-comic.html","fbfc-art.html"]),
    ("Video Game Inspired", ["boundborne.html","corridor.html","disgust.html","fallgirls.html"]),
    ("DC", ["dc1.html","dc2.html","harleyraven.html"]),
    ("Peril", ["bulletgirl.html","perilvore.html","jjp.html"]),
]

DIMS = {}
_dj = os.path.join(THUMBDIR, '_dims.json')
if os.path.exists(_dj):
    DIMS = {k: tuple(v) for k, v in json.load(io.open(_dj, encoding='utf-8')).items()}

items = {}
raws = {}
for f in sorted(glob.glob(os.path.join(BASE, '*.html'))):
    fn = os.path.basename(f)
    if fn in SKIP:
        continue
    s = io.open(f, encoding='utf-8', errors='replace').read()
    raws[fn] = s
    if fn in MANUAL:
        items[fn] = MANUAL[fn]
        continue
    m = re.search(r'window\.CONFIG\s*=\s*\{', s)
    if not m:
        continue
    t = re.search(r'"?title"?\s*:\s*"([^"]*)"', s[m.start():m.start()+1200])
    ch = re.findall(r'"?folder"?\s*:\s*"[^"]*"[^}]*?"?from"?\s*:\s*(\d+)\s*,\s*"?to"?\s*:\s*(\d+)', s)
    if not t or not ch:
        continue
    items[fn] = (t.group(1), len(ch), sum(int(b) - int(a) + 1 for a, b in ch))


def meta(c, p):
    return str(p) + " Images" if p else ""


def card(f):
    t, c, p = items[f]
    slug = f[:-5]
    img = ''
    if os.path.exists(os.path.join(THUMBDIR, slug + '.webp')):
        w, h = DIMS.get(slug, (520, 768))
        img = ('        <img class="thumb" src="thumbs/' + slug + '.webp" width="' + str(w) +
               '" height="' + str(h) + '" loading="lazy" decoding="async" alt="">\n')
    cls = 'card featured' if f in FEATURED else 'card'
    return ('      <a class="' + cls + '" href="' + f + '">\n' + img +
            '        <span class="cardtext"><span class="name">' + html.escape(t) +
            '</span><span class="meta">' + meta(c, p) + '</span></span>\n      </a>')


def section(name, files):
    return ('    <h2>' + html.escape(name) + '</h2>\n    <div class="grid">\n' +
            "\n".join(card(f) for f in files) + '\n    </div>')


charmap = collections.defaultdict(list)
for f in items:
    for attr in ('characters', 'themes'):
        m = re.search(r'name="' + attr + r'" content="([^"]*)"', raws.get(f, ''))
        if not m:
            continue
        if attr == 'themes':
            continue
        for c in [x.strip() for x in m.group(1).split(',') if x.strip()]:
            charmap[c].append(f)
AUTO = [(c, fs) for c, fs in sorted(charmap.items(), key=lambda kv: (-len(kv[1]), kv[0])) if len(fs) > 1]

secs = []
for name, files in CATS:
    got = [f for f in files if f in items]
    if got:
        secs.append(section(name, got))
for name, files in AUTO:
    secs.append(section(name, files))

allf = sorted(items, key=lambda f: items[f][0].lower())
aisl = ('      <a class="card" href="aislinne.html">\n'
        '        <span class="cardtext"><span class="name">Aislinne</span>'
        '<span class="meta">script</span></span>\n      </a>')
secs.append('    <h2>All</h2>\n    <div class="grid">\n' + aisl + "\n" +
            "\n".join(card(f) for f in allf) + '\n    </div>')

CARDCSS = ('/*cards*/'
           '.card{display:flex;flex-direction:column;gap:0;padding:0;overflow:hidden}'
           '.thumb{display:block;width:100%;height:230px;object-fit:contain;background:#15121b;'
           'border-bottom:1px solid var(--line)}'
           '.cardtext{display:flex;flex-direction:column;gap:6px;padding:14px 16px}'
           '.card.featured{border-color:var(--orange);box-shadow:0 0 0 2px var(--orange)}'
           '.card.featured .thumb{border-bottom-color:var(--orange)}'
           '/*endcards*/')

tpl = io.open(OUT, encoding='utf-8').read()
new = re.sub(r'(<div class="wrap">\s*<h1>Comics</h1>).*?(\s*</div>\s*</body>)',
             lambda m: m.group(1) + "\n" + "\n".join(secs) + m.group(2), tpl, flags=re.S)
if '/*cards*/' in new:
    new = re.sub(r'/\*cards\*/.*?/\*endcards\*/', lambda m: CARDCSS, new, flags=re.S)
else:
    # first run, or upgrading from the pre-marker build: drop any stray card rules
    new = re.sub(r'\.card\{display:flex;flex-direction:column;gap:0.*?\.card\.featured \.thumb\{[^}]*\}', '', new, flags=re.S)
    new = re.sub(r'\.card\{display:flex;flex-direction:column;gap:0.*?\.cardtext\{[^}]*\}', '', new, flags=re.S)
    new = new.replace('</style>', '  ' + CARDCSS + '\n</style>', 1)
io.open(OUT, 'w', encoding='utf-8', newline='\n').write(new)
print("  " + str(len(items) + 1) + " works, " + str(len(secs)) + " sections -> " + OUT)
for n, fs in CATS:
    got = [f for f in fs if f in items]
    if got:
        print("    " + n + ": " + str(len(got)))
for n, fs in AUTO:
    print("    auto " + n + ": " + str(len(fs)))
