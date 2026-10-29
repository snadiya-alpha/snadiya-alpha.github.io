/* Snade set viewer. Put it on any page:
     <link rel="stylesheet" href="snadeview-fonts.css"> (pages outside the Snadiya site) <link rel="stylesheet" href="snadeview.css">
     <script src="panzoom.min.js"></script> <script src="snadeview.js"></script>
     <div data-snadeview="sets/phantom-02/" style="height:90vh"></div>        (add data-keys="page" to take the whole page's keys)
   The folder holds set.json + full/ thumb/ tile/ from make_set.py; data-full="<url>/" takes the big pictures from elsewhere.
   Pages that add viewers later call snadeview.mount(div). The viewer fills its box:
   tall boxes (phones): picture docked at the top, the group switcher + one swipeable row under it (over the picture's bottom
   only when the box is too short); wide boxes (laptops): picture centred at full height, every group at once in a card beside it.
   Swipes on the picture: sideways = camera, up/down = the open group (the gag when the camera is open).
   data-drive="<url>" adds a link to Snade's Drive folder (in the card on wide boxes, in Info on phones).
   Zoom/pan: Panzoom 4.6.2 (MIT). Saving: right-click or long-press the picture (the real file, its own name). */
(function () {
  const ICON = {
    undo: 'M9.56 1.44a1.5 1.5 0 0 1 0 2.12L6.12 7H16a7 7 0 1 1 0 14h-4a1.5 1.5 0 0 1 0-3h4a4 4 0 1 0 0-8H6.12l3.44 3.44a1.5 1.5 0 0 1-2.12 2.12l-6-6a1.5 1.5 0 0 1 0-2.12l6-6a1.5 1.5 0 0 1 2.12 0',
    shuffle: ['0 0 20 20', 'm18.744 4.188-2.25-2.25c-.293-.293-.767-.293-1.06 0s-.293.767 0 1.06L16.436 4h-2.224c-2.108 0-4.001 1.299-4.797 3.252l-2.47 4.873C6.356 13.567 5.01 14.5 3.512 14.5H1.714c-.414 0-.75.336-.75.75s.336.75.75.75h1.798c2.11 0 4.003-1.299 4.797-3.252l2.47-4.873c.59-1.442 1.937-2.375 3.433-2.375h2.16l-.938.937c-.293.293-.293.768 0 1.061.146.147.337.22.53.22s.384-.073.53-.22l2.25-2.25c.293-.293.293-.768 0-1.06M7.103 7.389c-.235 0-.465-.11-.612-.314C5.787 6.09 4.673 5.5 3.511 5.5H1.715c-.414 0-.75-.336-.75-.75S1.3 4 1.714 4h1.798c1.644 0 3.215.823 4.2 2.202.24.338.163.806-.174 1.047-.133.095-.285.14-.435.14M18.744 14.736l-2.25-2.25c-.293-.293-.767-.293-1.06 0s-.293.768 0 1.06l.953.954h-2.174c-1.155 0-2.266-.584-2.97-1.562-.242-.334-.71-.413-1.048-.17-.336.242-.412.71-.17 1.046.986 1.369 2.551 2.186 4.188 2.186h2.207l-.986.986c-.293.293-.293.768 0 1.06.146.147.337.22.53.22s.384-.073.53-.22l2.25-2.25c.293-.292.293-.767 0-1.06'],
    info: 'M12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 7.5a1.5 1.5 0 1 1-3 0v-5a1.5 1.5 0 1 1 3 0zM12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24',
    close: 'm15.18 12 7.16-7.16a2.25 2.25 0 1 0-3.18-3.18L12 8.82 4.84 1.66a2.25 2.25 0 1 0-3.18 3.18L8.82 12l-7.16 7.16a2.25 2.25 0 1 0 3.18 3.18L12 15.18l7.16 7.16a2.24 2.24 0 0 0 3.18 0c.88-.88.88-2.3 0-3.18z',
    visit: 'M20.97 12a2 2 0 0 1-1.99-2V7.81l-7.07 7.1a2 2 0 1 1-2.83-2.83L16.16 5h-2.17a2 2 0 0 1 0-4H23l-.03 9a2 2 0 0 1-2 2M6.75 4a1.25 1.25 0 0 1 0 2.5H3.5v14h14v-3.26a1.25 1.25 0 1 1 2.5 0v4.51c0 .7-.56 1.25-1.25 1.25H2.25C1.56 23 1 22.44 1 21.75V5.25C1 4.56 1.56 4 2.25 4z'
  }; // Gestalt icons undo, info-circle, cancel, visit (gestalt 177.0.12, Apache-2.0), the Snadiya site's icon set.
  // Gestalt's "shuffles" is Pinterest's Shuffles app logo, so shuffle stays Spectrum 2's Shuffle (@react-spectrum/s2 1.7.1, Apache-2.0)
  const svg = (d, z = 20) => { const [vb, path] = Array.isArray(d) ? d : ['0 0 24 24', d]; return `<svg viewBox="${vb}" width="${z}" height="${z}" fill="currentColor" aria-hidden="true"><path d="${path}"/></svg>`; };
  const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; };

  function mount(el) {
    if (el.dataset.svMounted) return; el.dataset.svMounted = '1';
    const base = el.dataset.snadeview.replace(/\/?$/, '/');
    fetch(base + 'set.json').then(r => r.json()).then(S => build(el, S, base));
  }

  function build(el, S, base) {
    const A = S.axes, N = A.length, R = S.ratio[0] / S.ratio[1];
    const seq = Math.max(0, A.findIndex(a => a.seq)), outfitAx = A.findIndex(a => a.name === 'Outfit');
    const url = f => base + f.split('/').map(encodeURIComponent).join('/');
    // data-full = where the big pictures live (the site's own copies, same names); else the set's full/ folder
    const full = el.dataset.full ? el.dataset.full.replace(/\/?$/, '/') : null;
    // el.bigUrl (set by the host page) wins: the site knows each picture's own folder (10-27: Izumi's Pink and Red live apart)
    const bigUrl = f => el.bigUrl ? el.bigUrl(f) : full ? full + encodeURIComponent(f).replace(/%28/g, '(').replace(/%29/g, ')') : url('full/' + f);
    let s = new Array(N).fill(0), hist = [], tab = N - 1 === seq && N > 1 ? 0 : 0;
    // data-start "1.0.0" = the look to open on (10-27: the Nude Version page of a Suit + Nude builder opens on Nude)
    if (el.dataset.start && S.pics[el.dataset.start]) s = el.dataset.start.split('.').map(Number);
    if (!S.pics[s.join('.') || '0']) s = (Object.keys(S.pics)[0] || '0').split('.').map(Number);

    el.classList.add('sv'); el.tabIndex = 0; el.innerHTML = '';
    const pic = h('div', 'sv-pic'), zoom = h('div', 'sv-zoom'), count = h('span', 'sv-count');
    let front = h('img'), back = h('img', 'sv-back');
    zoom.append(back, front); pic.append(zoom);
    const panel = h('div', 'sv-panel'), acts = h('div', 'sv-acts'), bar = h('div', 'sv-bar'), groups = h('div');
    const undoB = h('button', 'sv-ib', svg(ICON.undo)), rndB = h('button', 'sv-ib', svg(ICON.shuffle));
    undoB.setAttribute('aria-label', 'Undo'); undoB.title = 'Undo (Ctrl+Z)'; rndB.setAttribute('aria-label', 'Randomize'); rndB.title = 'Randomize (R)';
    const infoB = h('button', 'sv-ib', svg(ICON.info)); infoB.setAttribute('aria-label', 'Info'); infoB.title = 'Info'; infoB.setAttribute('aria-haspopup', 'dialog'); infoB.setAttribute('aria-expanded', 'false');
    const drive = el.dataset.drive || '';
    // Jet 10-27: the Google Drive icon + "Drive" (not "Snadiya's Google Drive")
    const driveLink = () => { const a = h('a', 'sv-drive', '<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z"/></svg>' + '<span>Drive</span>'); a.href = drive; a.target = '_blank'; a.rel = 'noopener'; return a; };
    panel.append(acts, bar, groups); el.append(pic, panel);
    // Jet 10-27 "customizers can still have text & lore on 'em": the set's title + Snade's words (data-desc) sit left of the
    // picture when the box has room there; otherwise they open at the top of Info
    const desc = el.dataset.desc || '';
    const side = h('div', 'sv-text'); let sideOn = false;
    if (desc) { const t = h('h2'), p = h('p'); t.textContent = S.title; p.textContent = desc; side.append(t, p); side.hidden = true; el.append(side); }

    // the count is the camera's place, like "1 / 115" in the site's reader bar; it keeps the width of its longest value
    if (A[seq] && A[seq].seq) { const n = A[seq].options.length; count.dataset.max = `${n} / ${n}`; }
    const key = st => st.join('.') || '0';
    const nameOf = (a, i, st) => (A[a].names && A[a].names[st[outfitAx]] || A[a].options)[i] || A[a].options[i];
    // the picture for a set of picks; if Snade never drew it, the nearest one that keeps the axis just picked
    function nearest(st, keep) {
      if (S.pics[key(st)]) return st;
      let best = null, bd = 1e9;
      for (const k of Object.keys(S.pics)) {
        const c = k.split('.').map(Number); if (keep != null && c[keep] !== st[keep]) continue;
        const d = c.reduce((t, v, i) => t + (v !== st[i] ? (i === seq ? 1 : 3) : 0), 0);
        if (d < bd) { bd = d; best = c; }
      }
      return best || st;
    }
    const fileOf = st => S.pics[key(st)];

    function show() {
      const f = fileOf(s), src = bigUrl(f);
      if (front.getAttribute('src') !== src) {
        const im = new Image(); im.src = src;
        im.decode().catch(() => {}).then(() => {
          back.src = src; back.alt = S.title + ', ' + A.map((a, i) => nameOf(i, s[i], s)).join(', ');
          back.classList.remove('sv-back'); front.classList.add('sv-back'); back.style.opacity = 1; front.style.opacity = 0;
          [front, back] = [back, front]; place();
        });
      }
      count.hidden = seq < 0 || !A[seq] || !A[seq].seq; count.innerHTML = A[seq] ? `<span>${s[seq] + 1} / ${A[seq].options.length}</span>` : '';
      undoB.disabled = !hist.length; draw();
    }
    function set(next, keep) { next = nearest(next, keep); if (key(next) === key(s)) return; hist.push(s); s = next; show(); }
    const step = (a, d) => { const n = A[a].options.length, t = s.slice(); t[a] = (s[a] + d + n) % n; set(t, a); };
    // up/down (swipe or arrow keys) steps the open group; the camera already has left/right, so then it steps the gag
    const vAx = () => { if (tab !== seq) return tab; const g = A.findIndex(x => x.name === 'Gag'); return g >= 0 && g !== seq ? g : A.findIndex((x, i) => i !== seq); };
    const vstep = d => { const a = vAx(); if (a >= 0) { pz.reset({animate: false}); step(a, d); } };
    const undo = () => { if (hist.length) { s = hist.pop(); show(); } };
    const rnd = () => { const ks = Object.keys(S.pics); set(ks[Math.floor(Math.random() * ks.length)].split('.').map(Number)); };

    // tiles: what a click lands on. Gag tiles use the set's close-up crops when it has them.
    function tileSrc(a, i) {
      const t = s.slice(); t[a] = i; const st = nearest(t, a), gi = A.findIndex(x => x.name === 'Gag');
      if (a === gi && S.tiles && S.tiles[[st[outfitAx], st[gi]].filter(v => v != null).join('.')]) return url('tile/' + S.tiles[[st[outfitAx], st[gi]].filter(v => v != null).join('.')]);
      return url('thumb/' + fileOf(st));
    }
    function row(a) {
      const r = h('div', 'sv-row');
      A[a].options.forEach((_, i) => {
        const t = s.slice(); t[a] = i;
        const b = h('button', 'sv-it' + (s[a] === i ? ' on' : '') + (S.pics[key(t)] ? '' : ' swap'), `<img src="${tileSrc(a, i)}" alt="" loading="lazy">`);
        b.setAttribute('aria-label', nameOf(a, i, s)); b.setAttribute('aria-pressed', s[a] === i); b.title = nameOf(a, i, s);
        b.onclick = () => { if (wide && a !== seq) tab = a; const t2 = s.slice(); t2[a] = i; set(t2, a); };
        r.append(b);
      });
      return r;
    }
    function draw() {
      const fa = document.activeElement, focusI = fa && groups.contains(fa) ? [...groups.querySelectorAll('.sv-it')].indexOf(fa) : -1;
      const segI = fa && bar.contains(fa) && fa.parentElement.classList.contains('sv-seg') ? [...fa.parentElement.children].indexOf(fa) : -1;
      acts.innerHTML = ''; bar.innerHTML = ''; groups.innerHTML = '';
      if (wide) {
        // undo, shuffle and info share the first heading's line; the Drive link closes the card
        A.forEach((ax, a) => { const g = h('div', 'sv-group'), hd = h('div', 'sv-head'); hd.append(h('h3', '', ax.name)); if (!a) hd.append(h('span', 'sv-sp'), undoB, rndB, infoB); if (a === seq && ax.seq) hd.append(h('span', 'sv-sp'), count); g.append(hd, row(a)); groups.append(g); });
        if (drive) { const d = h('div', 'sv-group'); d.append(driveLink()); groups.append(d); }
      } else {
        // phones: a row of actions under the picture (count left, buttons right), then the switcher, then the tiles
        acts.append(count, h('span', 'sv-sp'), undoB, rndB, infoB);
        if (N > 1) {
          const sw = h('div', 'sv-seg'); sw.setAttribute('role', 'tablist');
          A.forEach((ax, a) => { const b = h('button', '', ax.name); b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', a === tab); b.onclick = () => { tab = a; draw(); }; sw.append(b); });
          bar.append(sw);
        }
        if (N) { const r = row(tab); r.classList.toggle('sv-two', two && A[tab].options.length > 5); groups.append(r); }
      }
      const its = groups.querySelectorAll('.sv-it'); if (focusI >= 0 && its[focusI]) its[focusI].focus();
      if (segI >= 0) bar.querySelector('.sv-seg').children[segI].focus();
      const on = groups.querySelector('.sv-row .on'); if (on && !wide) on.scrollIntoView({block: 'nearest', inline: 'nearest'});
    }

    // layout from the box's own size: tall = picture docked at the top, wide = picture left at full height
    let wide = false, two = false;
    function layout() {
      const W = el.clientWidth, H = el.clientHeight;
      // Jet 10-27 ("that sucks shit's cut off"): the panel never covers the picture. Side card or tiles under it,
      // whichever shows the picture bigger.
      const tileT = (W - 16 - 30) / 5.5, needT = 40 + 8 + (N > 1 ? 40 + 8 : 0) + tileT + 16;
      const fitW = (aw, ah) => Math.max(0, Math.min(aw, ah * R));
      const nowWide = W >= 700 && fitW(W - 300 - 48, H - 32) > fitW(W, H - needT);
      if (nowWide !== wide) { closeInfo(false); wide = nowWide; el.classList.toggle('wide', wide); draw(); }
      el.classList.toggle('narrow', W < 380);
      if (wide) {
        // the picture sits in the middle of the box; the card goes beside it, or the two are centred together when there is no room
        // Jet 10-29 "I want the image BIG": the picture uses the box's full height (no gap above or below)
        const G = 16, ph = H; let pw = Math.min(ph * R, W - 300 - 3 * G), px = (W - pw) / 2, P = Math.min(420, W - px - pw - 2 * G);
        if (P < 300) { P = 300; pw = Math.min(pw, W - P - 3 * G); px = (W - pw - P - G) / 2; }
        Object.assign(pic.style, {left: px + 'px', top: '0', width: pw + 'px', height: ph + 'px'});
        Object.assign(panel.style, {left: px + pw + G + 'px', top: '0', width: P + 'px', height: '', maxHeight: ph + 'px', bottom: ''});
        // every tile must show: when the card is taller than its space, the tiles get smaller until it fits (72px down to 48px)
        let t = 72; panel.style.setProperty('--sv-tile', t + 'px');
        while (panel.scrollHeight > panel.clientHeight + 1 && t > 48) { t -= 4; panel.style.setProperty('--sv-tile', t + 'px'); }
        sideOn = !!desc && px - 2 * G >= 240;
        if (sideOn) { const sw = Math.min(400, px - 2 * G); Object.assign(side.style, {left: px - G - sw + 'px', top: '0', width: sw + 'px', maxHeight: ph + 'px'}); }
      } else {
        sideOn = false;
        panel.style.maxHeight = '';
        const tile = (W - 16 - 30) / 5.5, need = 40 + 8 + (N > 1 ? 40 + 8 : 0) + tile + 16;
        // inside a page (not the whole screen), a tall box shrinks to the picture plus one tile row instead of leaving empty space
        if (el.dataset.keys !== 'page' && Math.abs(H - (W / R + need)) > 1 && H > W / R + need && el.style.height !== W / R + need + 'px') { el.style.height = W / R + need + 'px'; return; } // (a page's min-height can keep the box taller: lay out anyway)
        const ph = Math.max(80, Math.min(W / R, H - need));
        Object.assign(pic.style, {left: '0', top: '0', width: W + 'px', height: ph + 'px'});
        const top = ph; // always under the picture
        const nowTwo = H - top >= need + tile + 6; if (nowTwo !== two) { two = nowTwo; draw(); } // room for a second row
        Object.assign(panel.style, {left: '0', top: top + 'px', width: W + 'px', height: (H - top) + 'px'});
      }
      if (desc && side.hidden === sideOn) { side.hidden = !sideOn; el.classList.toggle('sv-texted', sideOn); if (pop) closeInfo(false); }
      place();
    }
    // the picture fits its area without cropping; the set's trim cuts the frame Snade bakes into some renders
    function place() {
      const f = fileOf(s), d = (S.dims && S.dims[f]) || S.ratio, r = d[0] / d[1], t = 0; // Jet 10-29: never crop a customizer picture (the set's trim cut real picture on 31 of 33 sets)
      const PW = pic.clientWidth, PH = pic.clientHeight; let w = PW, hh = PW / r; if (hh > PH) { hh = PH; w = PH * r; }
      const W2 = w / (1 - 2 * t), H2 = hh / (1 - 2 * t); // the frame is clipped off, so the kept part fills the fitted box
      for (const im of [front, back]) Object.assign(im.style, {width: W2 + 'px', height: H2 + 'px', left: (PW - W2) / 2 + 'px',
        top: (wide ? (PH - hh) / 2 : 0) - (H2 - hh) / 2 + 'px', clipPath: t ? `inset(${t * 100}%)` : ''});
    }

    // zoom like a photo: pinch, wheel, double-tap/double-click; drag to move while zoomed; swipe sideways = camera
    const pz = Panzoom(zoom, {minScale: 1, maxScale: 4, contain: 'outside', panOnlyWhenZoomed: true, cursor: 'default'});
    pic.addEventListener('wheel', e => pz.zoomWithWheel(e), {passive: false});
    const zoomed = () => pz.getScale() > 1.01;
    const flip = (x, y) => { const r = pic.getBoundingClientRect(); zoomed() ? pz.reset() : pz.zoom(2.5, {animate: true, focal: {x: x - r.left, y: y - r.top}}); };
    let p = null, fingers = 0, lastTap = 0;
    pic.addEventListener('pointerdown', e => { fingers++; p = fingers === 1 && e.button === 0 ? {x: e.clientX, y: e.clientY, z: zoomed()} : null; }, true);
    pic.addEventListener('pointerup', e => {
      fingers = Math.max(0, fingers - 1); if (!p) return; const dx = e.clientX - p.x, dy = e.clientY - p.y;
      if (Math.hypot(dx, dy) < 10 && e.pointerType !== 'mouse') { const now = Date.now(); if (now - lastTap < 300) { flip(e.clientX, e.clientY); lastTap = 0; } else lastTap = now; }
      else if (!p.z && !zoomed() && Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) && A[seq]) turn(dx < 0 ? 1 : -1);
      else if (!p.z && !zoomed() && Math.abs(dy) > 40 && Math.abs(dy) > Math.abs(dx)) vstep(dy < 0 ? 1 : -1);
      p = null;
    }, true);
    pic.addEventListener('pointercancel', () => { fingers = 0; p = null; }, true);
    pic.addEventListener('dblclick', e => flip(e.clientX, e.clientY));
    function turn(d) { pz.reset({animate: false}); step(seq, d); }

    undoB.onclick = undo; rndB.onclick = rnd;

    // Info: Snade's Drive folder, the controls, the credit. A popover under the button on wide boxes,
    // a sheet from the bottom of the screen on phones (Gestalt Popover / SheetMobile); neither moves anything.
    let pop = null;
    function infoBody() {
      const b = h('div', 'sv-info'), fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
      const v = vAx(), vn = v >= 0 ? A[v].name.toLowerCase() : '', cam = A[seq] && A[seq].seq;
      const rows = fine
        ? [cam ? ['← →', 'Turn the camera'] : null, v >= 0 ? ['↑ ↓', 'Change the ' + vn] : null, ['Wheel, double-click', 'Zoom'], ['Ctrl+Z', 'Undo'], ['R', 'Shuffle']]
        : [cam ? ['Swipe sideways', 'Turn the camera'] : null, v >= 0 ? ['Swipe up or down', 'Change the ' + vn] : null, ['Pinch, double-tap', 'Zoom']];
      if (desc && !sideOn) { const p = h('p', 'sv-info-desc'); p.textContent = desc; b.append(p); }
      if (drive) b.append(driveLink());
      b.append(h('h3', '', 'Controls'));
      const dl = h('dl'); rows.filter(Boolean).forEach(([k, d]) => dl.append(h('dt', '', k), h('dd', '', d))); b.append(dl);
      b.append(h('p', 'sv-credit', 'Viewer by Phantom'));
      return b;
    }
    function closeInfo(back) {
      if (!pop) return; pop.remove(); pop = null; infoB.setAttribute('aria-expanded', 'false');
      document.removeEventListener('pointerdown', outside, true); if (back) infoB.focus();
    }
    const outside = e => { if (pop && !pop.contains(e.target) && !infoB.contains(e.target)) closeInfo(false); };
    function openInfo() {
      const head = h('div', 'sv-info-head'), x = h('button', 'sv-ib', svg(ICON.close, 16));
      x.setAttribute('aria-label', 'Close'); x.onclick = () => closeInfo(true);
      head.append(h('h2', '', S.title), x);
      if (wide) {
        pop = h('div', 'sv-pop sv-layer'); pop.append(head, infoBody()); el.append(pop);
        const r = infoB.getBoundingClientRect(), o = el.getBoundingClientRect(), w = Math.min(340, el.clientWidth - 32);
        Object.assign(pop.style, {width: w + 'px', top: r.bottom - o.top + 8 + 'px', left: Math.max(16, Math.min(r.right - o.left - w, el.clientWidth - w - 16)) + 'px', maxHeight: o.bottom - r.bottom - 24 + 'px'});
      } else {
        pop = h('div', 'sv-sheet-wrap sv-layer'); const sh = h('div', 'sv-sheet'), bg = h('div', 'sv-sheet-bg');
        bg.onclick = () => closeInfo(true); sh.append(head, infoBody()); pop.append(bg, sh); document.body.append(pop);
      }
      pop.setAttribute('role', 'dialog'); pop.setAttribute('aria-label', S.title + ' info'); if (!wide) pop.setAttribute('aria-modal', 'true');
      pop.addEventListener('keydown', e => { if (e.key === 'Escape') { e.stopPropagation(); closeInfo(true); } });
      infoB.setAttribute('aria-expanded', 'true'); x.focus();
      document.addEventListener('pointerdown', outside, true);
    }
    infoB.onclick = () => pop ? closeInfo(true) : openInfo();
    groups.addEventListener('wheel', e => { const r = e.target.closest('.sv-row'); if (r && !wide && Math.abs(e.deltaY) > Math.abs(e.deltaX)) { r.scrollLeft += e.deltaY; e.preventDefault(); } }, {passive: false});
    // keys: left/right camera, up/down the open group (gag when the camera is open), number keys = groups, Ctrl+Z undo, R randomize, +/- zoom, 0/Esc zoom out
    (el.dataset.keys === 'page' ? window : el).addEventListener('keydown', e => {
      if (e.altKey) return; const k = e.key;
      if ((e.ctrlKey || e.metaKey) && k.toLowerCase() === 'z') { e.preventDefault(); undo(); return; }
      if (e.ctrlKey || e.metaKey) return;
      if (k === 'ArrowRight' && A[seq]) { e.preventDefault(); turn(1); }
      else if (k === 'ArrowLeft' && A[seq]) { e.preventDefault(); turn(-1); }
      else if (k === 'ArrowUp' || k === 'ArrowDown') { e.preventDefault(); vstep(k === 'ArrowDown' ? 1 : -1); }
      else if (/^[1-9]$/.test(k) && +k <= N) { tab = +k - 1; draw(); }
      else if (k === 'r' || k === 'R') rnd();
      else if (k === '+' || k === '=') pz.zoomIn(); else if (k === '-') pz.zoomOut(); else if (k === 'Escape' && pop) closeInfo(true); else if (k === '0' || k === 'Escape') pz.reset();
    });
    new ResizeObserver(layout).observe(el);
    front.style.opacity = 1; back.style.opacity = 0; front.src = bigUrl(fileOf(s)); front.alt = S.title;
    layout(); show();
  }

  window.snadeview = {mount};
  const go = () => document.querySelectorAll('[data-snadeview]').forEach(mount);
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', go) : go();
})();
