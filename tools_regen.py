import io,re,glob,sys
tpl=io.open('reader-template.html',encoding='utf-8').read()
ta=tpl.index('window.CONFIG'); tb=tpl.index('};', tpl.index('dims:',ta))+2
HEAD_KEEP=re.compile(r'<meta (?:property="og:|name="(?:twitter:|author|characters|themes|settings|franchise|source|format)")[^>]*>')
done=[];skip=[]
for f in sorted(glob.glob('*.html')):
    if f in ('reader-template.html','index.html'): continue
    s=io.open(f,encoding='utf-8',errors='replace').read()
    if 'window.CONFIG' not in s or 'scrubZone' not in s: skip.append(f); continue
    a=s.index('window.CONFIG')
    try:
        di=s.index('dims:',a) if 'dims:' in s[a:a+9000] else s.index('"dims"',a)
        b=s.index('};', di)+2
    except ValueError: skip.append(f); continue
    cfg=s[a:b]
    title=re.search(r'"?title"?\s*:\s*"([^"]*)"',cfg)
    title=title.group(1) if title else f[:-5]
    og="\n".join(HEAD_KEEP.findall(s))
    out=tpl[:ta]+cfg+tpl[tb:]
    out=re.sub(r'<title>.*?</title>', f'<title>{title}</title>', out, count=1, flags=re.S)
    if og: out=out.replace(f'<title>{title}</title>', f'<title>{title}</title>\n{og}',1)
    io.open(f,'w',encoding='utf-8',newline='').write(out)
    done.append(f)
print(f"  regenerated {len(done)}")
print(f"  skipped {len(skip)}: {', '.join(skip)}")
