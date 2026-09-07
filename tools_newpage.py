"""Build one reader page from reader-template.html.

Usage: python tools_newpage.py spec.json
Spec keys: slug, title, base, drive, chapters[{title,folder,prefix,pad,ext,from,to,grid?}],
           dims[[w,h]...], characters, themes, ogImage
"""
import io, json, re, sys

spec = json.load(io.open(sys.argv[1], encoding='utf-8'))
tpl = io.open('reader-template.html', encoding='utf-8').read()

a = tpl.index('window.CONFIG')
b = tpl.index('};', tpl.index('dims:', a)) + 2

chs = []
for c in spec['chapters']:
    parts = ['title:"%s"' % c['title'], 'folder:"%s"' % c['folder'], 'prefix:"%s"' % c['prefix'],
             'pad:%d' % c['pad'], 'ext:"%s"' % c['ext'], 'from:%d' % c['from'], 'to:%d' % c['to']]
    if c.get('grid'):
        parts.append('grid:{cols:%d,swap:%s}' % (c['grid']['cols'], 'true' if c['grid'].get('swap') else 'false'))
    chs.append('{ ' + ', '.join(parts) + ' }')

cfg = ('window.CONFIG = { title:"%s", artist:"Snadiya", artistSite:"https://linktr.ee/snadiya", '
       'gallery:"index.html", base:"%s", endText:"The End", ogImage:"%s", driveUrl:"%s",\n chapters:[%s], dims:[%s] };'
       % (spec['title'], spec['base'], spec['ogImage'], spec['drive'],
          ','.join(chs), ','.join('[%d,%d]' % (w, h) for w, h in spec['dims'])))

out = tpl[:a] + cfg + tpl[b:]

host = spec['base'].rstrip('/') if spec['base'].startswith('http') else 'https://snadiya-alpha.github.io'
og = spec['ogImage'] if not spec['base'].startswith('http') else spec['base'] + spec['ogImage']
head = ('<title>%s</title>\n'
        '<meta property="og:type" content="website">\n'
        '<meta property="og:title" content="%s">\n'
        '<meta property="og:image" content="%s">\n'
        '<meta property="og:url" content="%s/%s.html">\n'
        '<meta property="og:site_name" content="Snadiya">\n'
        '<meta name="twitter:card" content="summary_large_image">\n'
        '<meta name="author" content="Snadiya">\n'
        '<meta name="characters" content="%s">\n'
        '<meta name="themes" content="%s">\n'
        '<meta name="source" content="%s">'
        % (spec['title'], spec['title'], og, host, spec['slug'],
           spec.get('characters', ''), spec.get('themes', ''), spec['drive']))

out = re.sub(r'<title>[^<]*</title>', lambda m: head, out, count=1)
io.open(spec['slug'] + '.html', 'w', encoding='utf-8', newline='').write(out)
print("  wrote %s.html  (%d chapters, %d pages)" % (spec['slug'], len(chs), len(spec['dims'])))
