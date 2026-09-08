"""Write the four tag facets from tags_data.py into every page's head."""
import io, os, re, sys
from tags_data import TAGS

FACETS = ('characters', 'themes', 'settings', 'franchise')
BASE = sys.argv[1] if len(sys.argv) > 1 else '.'

done, missing, skipped = 0, [], []
for f, t in sorted(TAGS.items()):
    p = os.path.join(BASE, f)
    if not os.path.exists(p):
        missing.append(f)
        continue
    s = io.open(p, encoding='utf-8', errors='replace').read()
    # drop any existing copies of these four
    s = re.sub(r'\n?<meta name="(?:characters|themes|settings|franchise)" content="[^"]*">', '', s)
    block = "".join('\n<meta name="%s" content="%s">' % (k, ", ".join(t[k]))
                    for k in FACETS if t.get(k))
    if not block:
        skipped.append(f)
        continue
    anchor = re.search(r'<meta name="author"[^>]*>', s)
    if not anchor:
        anchor = re.search(r'<meta name="twitter:card"[^>]*>', s)
    if not anchor:
        anchor = re.search(r'<title>[^<]*</title>', s)
    if not anchor:
        skipped.append(f)
        continue
    if '<meta name="author"' not in s:
        block = '\n<meta name="author" content="Snadiya">' + block
    s = s[:anchor.end()] + block + s[anchor.end():]
    io.open(p, 'w', encoding='utf-8', newline='').write(s)
    done += 1

print("  tagged %d pages" % done)
if missing:
    print("  no such file: " + ", ".join(missing))
if skipped:
    print("  skipped: " + ", ".join(skipped))
