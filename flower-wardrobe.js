/* Flower wardrobe: dress up the signature flower.
   The look is saved on this device (localStorage) and redrawn in the navigation
   on every visit, so it is still there after coming back from a case study.

   Everything is drawn in the original flower's coordinate space
   (viewBox 0 0 106.146 119.423). Accessories may spill outside it; the nav SVG
   has overflow: visible. To add an option, add one entry to a list in PARTS. */
(() => {
  const KEY = 'laura-flower-look';
  const tr = (text, values) => (window.t ? window.t(text, values) : text);
  const INK = '#27232C';
  const S = `stroke="${INK}" stroke-width="1.63" stroke-linecap="round" stroke-linejoin="round"`;

  const PETALS = 'M42.7254 50.3625C38.2216 29.6458 33.2674 2.17367 44.9773 0.82258C57.1376 0.372216 54.8857 30.0962 54.4353 48.5611C68.8475 25.1422 79.2063 9.37948 85.0613 15.6846C93.1681 23.7911 76.504 41.8056 63.4429 54.8661C84.1605 45.4085 105.328 42.7063 105.328 51.7136C104.428 62.5223 82.359 62.9727 65.2445 65.2245C77.4048 78.7354 97.2216 103.956 86.8628 109.36C76.9544 114.764 61.6414 89.9945 53.0842 77.3843C58.4887 100.353 58.9391 121.07 47.6796 118.367C35.9696 115.665 40.9238 92.2463 40.0231 77.8347C27.8628 91.7959 11.1987 103.956 4.44293 92.6966C-2.3128 81.8879 25.1605 69.7281 34.1681 67.0259C12.0994 64.3238 -4.11432 48.1107 2.19102 39.1034C9.84751 30.0962 31.9162 44.9582 42.7254 50.3625Z';

  const sparkle = (x, y, r) => `M${x} ${y - r}Q${x} ${y} ${x + r} ${y}Q${x} ${y} ${x} ${y + r}Q${x} ${y} ${x - r} ${y}Q${x} ${y} ${x} ${y - r}Z`;
  const heart = (x, y, s) => `M${x} ${y + s * .9}C${x - s * 1.7} ${y - s * .1} ${x - s * .8} ${y - s * 1.4} ${x} ${y - s * .45}C${x + s * .8} ${y - s * 1.4} ${x + s * 1.7} ${y - s * .1} ${x} ${y + s * .9}Z`;

  // Shared face pieces from the original drawing
  const NOSE = `<path d="M50.38 62.52L49.03 66.58C49.63 67.48 50.68 67.48 52.18 66.58" fill="none" ${S}/>`;
  const SMILE = `<path d="M45.88 71.08C49.78 73.78 53.53 73.48 57.14 70.18" fill="none" ${S}/>`;
  const BROWS = `<path d="M39.12 57.12C41.82 56.22 44.53 56.22 47.23 57.12M53.08 56.67C56.09 55.77 58.94 55.92 61.64 57.12" fill="none" ${S}/>`;
  const EYE_L = `<path d="M38.67 60.72C40.02 58.02 46.78 58.02 48.13 60.72C46.33 62.52 40.02 62.52 38.67 60.72Z" fill="#fff" ${S}/><path d="M43.63 59.37V61.62" ${S}/>`;
  const EYE_R = `<path d="M52.63 60.72C54.44 58.02 60.74 58.02 62.09 60.27C60.74 62.52 54.89 62.52 52.63 60.72Z" fill="#fff" ${S}/><path d="M57.59 59.37V61.62" ${S}/>`;
  const CLOSED = `<path d="M39 60.6Q43.4 63.6 47.8 60.6M52.8 60.6Q57.2 63.6 61.6 60.6" fill="none" ${S}/>`;
  const ARCS = `<path d="M39 62.2Q43.4 56.6 47.8 62.2M52.8 62.2Q57.2 56.6 61.6 62.2" fill="none" ${S}/>`;

  const PARTS = {
    color: [
      { id: 'lavender', name: 'Lavender', petal: '#D5C9ED', cheek: '#69488F' },
      { id: 'rose', name: 'Rose', petal: '#F4CDD9', cheek: '#C2456F' },
      { id: 'peach', name: 'Peach', petal: '#F7D8C0', cheek: '#C8643A' },
      { id: 'butter', name: 'Butter', petal: '#F5E6A9', cheek: '#C77A2E' },
      { id: 'mint', name: 'Mint', petal: '#CDE8D5', cheek: '#3E7E5A' },
      { id: 'sky', name: 'Sky', petal: '#CBE0F2', cheek: '#3C6B9A' },
      { id: 'cloud', name: 'Cloud', petal: '#FFFFFF', cheek: '#69488F' }
    ],
    face: [
      { id: 'calm', name: 'Calm', svg: () => BROWS + EYE_L + EYE_R + NOSE + SMILE },
      { id: 'sleepy', name: 'Sleepy', svg: () => CLOSED + NOSE +
        `<path d="M47.6 70.6Q50.6 72.4 53.8 70.6" fill="none" ${S}/>` +
        `<path d="M66.5 40.5h6.2l-6.2 7h6.2M75.6 31.6h4.2l-4.2 4.8h4.2" fill="none" stroke="#69488F" stroke-width="1.63" stroke-linecap="round" stroke-linejoin="round"/>` },
      { id: 'happy', name: 'Happy', svg: () => ARCS + NOSE +
        `<path d="M44.6 69.2Q50.7 77.6 56.8 69.2Z" fill="${INK}" ${S}/><path d="M48.4 72.6Q50.7 71.4 53 72.6Q50.7 75.4 48.4 72.6Z" fill="#E98AA5"/>` },
      { id: 'wink', name: 'Wink', svg: () => EYE_L + `<path d="M52.8 61.4Q57.2 57.4 61.6 61.4" fill="none" ${S}/>` + NOSE + SMILE },
      { id: 'wow', name: 'Wow', svg: () =>
        `<circle cx="43.4" cy="60" r="3.3" fill="#fff" ${S}/><circle cx="57.4" cy="60" r="3.3" fill="#fff" ${S}/>` +
        `<circle cx="43.8" cy="60.3" r="1.35" fill="${INK}"/><circle cx="57.8" cy="60.3" r="1.35" fill="${INK}"/>` + NOSE +
        `<ellipse cx="51" cy="71.4" rx="2.3" ry="2.9" fill="${INK}"/>` },
      { id: 'starry', name: 'Starry', svg: () =>
        `<path d="${sparkle(43.4, 60, 4.2)}${sparkle(57.4, 60, 4.2)}" fill="#E8C36C" ${S}/>` + NOSE + SMILE },
      { id: 'cheeky', name: 'Cheeky', svg: () => ARCS + NOSE +
        `<path d="M45.4 69.6Q50.9 74.2 56.4 69.6" fill="none" ${S}/><path d="M49.2 71.9Q49.6 76.4 51.6 76.4Q53.6 76.4 53.6 71.6" fill="#E98AA5" ${S}/>` }
    ],
    hat: [
      { id: 'none', name: 'None' },
      { id: 'cap', name: 'Cap', vb: '30 -14 48 26', svg: () =>
        `<path d="M33 7Q33 -10 47 -10Q61 -10 61 7Z" fill="#69488F" ${S}/>` +
        `<path d="M59.5 5.4Q70.5 2.6 75.6 6.8Q68.4 9.8 59.5 7.8Z" fill="#4E3470" ${S}/>` +
        `<path d="M47 -10V6.4M38.8 -6.2Q42 0 41.6 6.6" fill="none" stroke="#B49BD3" stroke-width="1.2" stroke-linecap="round"/>` +
        `<circle cx="47" cy="-10.4" r="1.6" fill="#B49BD3" ${S}/>` },
      { id: 'beanie', name: 'Beanie', vb: '30 -20 34 32', svg: () =>
        `<path d="M34 6Q33 -12 47 -12Q61 -12 60 6Z" fill="#E98AA5" ${S}/>` +
        `<rect x="32" y="2.4" width="30" height="7.4" rx="3.7" fill="#D06C8D" ${S}/>` +
        `<path d="M37 3.4v5.4M42 3.4v5.4M47 3.4v5.4M52 3.4v5.4M57 3.4v5.4" stroke="#F4CDD9" stroke-width="1.1" stroke-linecap="round"/>` +
        `<circle cx="47" cy="-14.2" r="3.8" fill="#fff" ${S}/>` },
      { id: 'party', name: 'Party hat', vb: '32 -27 30 37', svg: () =>
        `<path d="M35.4 7.4L47 -20.4L58.6 7.4Z" fill="#E8C36C" ${S}/>` +
        `<path d="M39.6 -2.6L52.6 -2.6M42.8 -10.6L50.4 -10.6" stroke="#69488F" stroke-width="1.5" stroke-linecap="round"/>` +
        `<circle cx="42.8" cy="3" r="1.2" fill="#E98AA5"/><circle cx="51.6" cy="3.4" r="1.2" fill="#E98AA5"/>` +
        `<circle cx="47" cy="-21.8" r="2.8" fill="#E98AA5" ${S}/>` },
      { id: 'crown', name: 'Crown', vb: '30 -18 34 28', svg: () =>
        `<path d="M33.6 7.2L34.8 -8.6L41 -1.6L47 -13.4L53 -1.6L59.2 -8.6L60.4 7.2Z" fill="#E8C36C" ${S}/>` +
        `<circle cx="47" cy="2.2" r="2.1" fill="#E98AA5" ${S}/><circle cx="39.4" cy="3" r="1.4" fill="#9FD3E6"/><circle cx="54.6" cy="3" r="1.4" fill="#9FD3E6"/>` },
      { id: 'beret', name: 'Beret', vb: '27 -15 40 26', svg: () =>
        `<path d="M29.8 4.8Q30.6 -10.2 49.2 -9.2Q65.6 -8.2 63.6 2.6Q47.6 9.6 29.8 4.8Z" fill="#332B3E" ${S}/>` +
        `<path d="M48.6 -9.4Q49 -12.8 51.6 -13.2" fill="none" ${S}/>` +
        `<path d="M35.2 0.4Q41 -6.2 52 -6" fill="none" stroke="#6E6478" stroke-width="1.2" stroke-linecap="round"/>` },
      { id: 'headphones', name: 'Headphones', vb: '22 34 58 40', svg: () =>
        `<path d="M30.4 60Q29.6 37.4 50.4 37.4Q71.2 37.4 70.4 60" fill="none" stroke="${INK}" stroke-width="5.4" stroke-linecap="round"/>` +
        `<path d="M30.4 60Q29.6 37.4 50.4 37.4Q71.2 37.4 70.4 60" fill="none" stroke="#69488F" stroke-width="2.4" stroke-linecap="round"/>` +
        `<rect x="25.2" y="55" width="9" height="14.6" rx="4.2" fill="#69488F" ${S}/>` +
        `<rect x="66.6" y="55" width="9" height="14.6" rx="4.2" fill="#69488F" ${S}/>` }
    ],
    glasses: [
      { id: 'none', name: 'None' },
      { id: 'round', name: 'Round glasses', vb: '31 52 39 16', svg: () =>
        `<circle cx="43.4" cy="60" r="5.4" fill="#fff" fill-opacity=".25" ${S}/><circle cx="57.6" cy="60" r="5.4" fill="#fff" fill-opacity=".25" ${S}/>` +
        `<path d="M48.8 59.4Q50.5 57.6 52.2 59.4M38 59.2L33.6 57.6M63 59.2L67.4 57.6" fill="none" ${S}/>` },
      { id: 'shades', name: 'Sunglasses', vb: '31 53 39 14', svg: () =>
        `<path d="M36.6 56.6H49.6Q49.4 64.4 43.1 64.4Q36.8 64.4 36.6 56.6Z" fill="${INK}" ${S}/>` +
        `<path d="M51.4 56.6H64.4Q64.2 64.4 57.9 64.4Q51.6 64.4 51.4 56.6Z" fill="${INK}" ${S}/>` +
        `<path d="M49.6 57.4Q50.5 56.4 51.4 57.4M36.6 57L33.4 56.2M64.4 57L67.6 56.2" fill="none" ${S}/>` +
        `<path d="M39.4 58.4L41.4 58.4M54.2 58.4L56.2 58.4" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/>` },
      { id: 'hearts', name: 'Heart glasses', vb: '31 52 39 16', svg: () =>
        `<path d="${heart(43.2, 60.4, 4.6)}${heart(57.8, 60.4, 4.6)}" fill="#E98AA5" ${S}/>` +
        `<path d="M48.4 58.8Q50.5 57.2 52.6 58.8M37.6 58.6L33.6 57.4M63.4 58.6L67.4 57.4" fill="none" ${S}/>` },
      { id: 'visor', name: 'Visor', vb: '31 53 39 14', svg: () =>
        `<rect x="35.4" y="56.6" width="30.2" height="7.4" rx="3.7" fill="#9FD3E6" ${S}/>` +
        `<path d="M38.6 58.8L45 58.8" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/>` }
    ],
    hand: [
      { id: 'none', name: 'None' },
      { id: 'coffee', name: 'Coffee', vb: '62 68 34 36', grip: [68.6, 87], svg: () =>
        `<path d="M73.2 72.6Q71.6 70.6 73.2 68.6M77.4 72.6Q75.8 70.6 77.4 68.6" fill="none" stroke="#726B7A" stroke-width="1.2" stroke-linecap="round"/>` +
        `<path d="M86 79.6Q92.6 79.4 92.4 84.4Q92.2 89.4 85.2 89.6" fill="none" ${S} stroke-width="2.4"/>` +
        `<path d="M68.6 76.4H87.6L85.4 95.2Q85 98 82.2 98H74Q71.2 98 70.8 95.2Z" fill="#fff" ${S}/>` +
        `<path d="M69.2 80.4H87.1" stroke="${INK}" stroke-width="1.2"/><path d="M69.5 81.2H86.9L86.5 84.6H69.9Z" fill="#F5E6A9"/>` },
      { id: 'book', name: 'Sketchbook', vb: '62 70 36 32', grip: [68.4, 88], svg: () =>
        `<path d="M67 76.6Q74 73.4 80.6 76.6V97Q74 93.8 67 97Z" fill="#fff" ${S}/>` +
        `<path d="M80.6 76.6Q87.2 73.4 94.2 76.6V97Q87.2 93.8 80.6 97Z" fill="#fff" ${S}/>` +
        `<path d="M70 81.6Q74 80 77.6 81.6M70 85.6Q74 84 77.6 85.6M70 89.6Q73 88.4 75.6 89.6" fill="none" stroke="#B49BD3" stroke-width="1.1" stroke-linecap="round"/>` +
        `<path d="M84 86.6Q86 81 88.6 84Q90.6 86.6 86.8 89.4" fill="none" stroke="#E98AA5" stroke-width="1.3" stroke-linecap="round"/>` },
      { id: 'pencil', name: 'Pencil', vb: '62 66 34 38', grip: [71.4, 90.4], svg: () =>
        `<g transform="rotate(-38 78 85)"><rect x="68" y="82" width="20" height="6.4" fill="#E8C36C" ${S}/>` +
        `<path d="M88 82L95 85.2L88 88.4Z" fill="#F7D8C0" ${S}/><path d="M93.4 84.5L95 85.2L93.4 85.9Z" fill="${INK}"/>` +
        `<rect x="63.6" y="82" width="4.4" height="6.4" rx="1.4" fill="#E98AA5" ${S}/></g>` },
      { id: 'laptop', name: 'Laptop', vb: '62 70 38 32', grip: [70.4, 94.6], svg: () =>
        `<rect x="69.4" y="74.6" width="24" height="16.4" rx="2.2" fill="#332B3E" ${S}/>` +
        `<path d="M73.4 79.4L76 81.6L73.4 83.8M77.8 84H81.6" fill="none" stroke="#CDE8D5" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>` +
        `<path d="M66.4 91H96.4L94 96.4H68.8Z" fill="#E2DCE8" ${S}/>` },
      { id: 'palette', name: 'Palette', vb: '62 70 36 32', grip: [69, 92], svg: () =>
        `<path d="M80 74.6C89.6 74 95.6 79.6 95 86.4C94.6 91 90.6 91.8 88 91.2C85 90.6 84.4 93.8 85.4 95.6C86.6 97.8 84 99.4 80.6 99.4C72 99.4 66.6 94 67.4 86.6C68 80 73.4 75 80 74.6Z" fill="#F7D8C0" ${S}/>` +
        `<circle cx="75" cy="81.6" r="2.3" fill="#B49BD3"/><circle cx="82.6" cy="79.6" r="2.3" fill="#E98AA5"/>` +
        `<circle cx="89" cy="83" r="2.3" fill="#E8C36C"/><circle cx="74" cy="89.4" r="2.3" fill="#9FD3E6"/>` +
        `<circle cx="79.8" cy="94.2" r="2.1" fill="#fff" ${S}/>` },
      { id: 'megaphone', name: 'Megaphone', vb: '62 68 38 32', grip: [70.6, 90.6], svg: () =>
        `<path d="M70.4 82.4L88.6 74.6V97L70.4 89.4Z" fill="#E98AA5" ${S}/>` +
        `<rect x="66.6" y="81.6" width="5" height="8.6" rx="1.6" fill="#332B3E" ${S}/>` +
        `<path d="M92.4 80.4L96.2 78.6M93.4 85.8H97.4M92.4 91.2L96.2 93" fill="none" ${S}/>` }
    ]
  };
  const GROUPS = [
    { key: 'color', legend: 'Colour' },
    { key: 'face', legend: 'Expression' },
    { key: 'hat', legend: 'Headwear' },
    { key: 'glasses', legend: 'Eyewear' },
    { key: 'hand', legend: 'Holding' }
  ];
  const DEFAULT = { color: 'lavender', face: 'calm', hat: 'none', glasses: 'none', hand: 'none' };
  const find = (key, id) => PARTS[key].find(part => part.id === id) || PARTS[key].find(part => part.id === DEFAULT[key]);

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY));
      if (saved && typeof saved === 'object') {
        const look = { ...DEFAULT };
        for (const key in DEFAULT) if (PARTS[key].some(part => part.id === saved[key])) look[key] = saved[key];
        return look;
      }
    } catch {}
    return { ...DEFAULT };
  }
  function save(look) { try { localStorage.setItem(KEY, JSON.stringify(look)); } catch {} }

  // Full drawing for a look. Order: things behind the flower, flower, face, accessories.
  function draw(look) {
    const color = find('color', look.color);
    const hat = find('hat', look.hat);
    const glasses = find('glasses', look.glasses);
    const hand = find('hand', look.hand);
    let out = `<path d="${PETALS}" fill="${color.petal}" ${S}/>`;
    out += `<ellipse cx="38.67" cy="67.48" rx="2.7" ry="1.35" fill="${color.cheek}" opacity=".22"/><ellipse cx="62.09" cy="67.03" rx="2.7" ry="1.35" fill="${color.cheek}" opacity=".22"/>`;
    out += find('face', look.face).svg();
    if (glasses.svg) out += glasses.svg();
    if (hat.svg) out += hat.svg();
    if (hand.svg) {
      out += hand.svg();
      const [x, y] = hand.grip;
      out += `<ellipse cx="${x}" cy="${y}" rx="3.4" ry="3" fill="${color.petal}" ${S}/>`;
    }
    return out;
  }

  // Navigation flower: swap the static image for the dressed drawing.
  const navBloom = document.querySelector('.signature-flower .flower-bloom');
  let look = load();
  function paintNav() { if (navBloom) navBloom.innerHTML = draw(look); }
  paintNav();
  // Coming back with the browser's back button can restore a cached page; re-read the saved look.
  addEventListener('pageshow', event => { if (event.persisted) { look = load(); paintNav(); sync(); } });

  const opener = document.querySelector('.signature-flower');
  const dialog = document.querySelector('#flower-wardrobe');
  if (!opener || !dialog) return;
  const preview = dialog.querySelector('.wardrobe-flower');
  const stage = dialog.querySelector('.wardrobe-stage');
  const form = dialog.querySelector('.wardrobe-options');
  const status = dialog.querySelector('.wardrobe-status');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  // Option thumbnails
  const NONE_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7.5" fill="none" stroke="#726B7A" stroke-width="1.5"/><path d="M6.8 17.2L17.2 6.8" stroke="#726B7A" stroke-width="1.5" stroke-linecap="round"/></svg>`;
  function thumb(key, part) {
    if (key === 'color') return `<span class="wardrobe-swatch" style="--swatch:${part.petal}" aria-hidden="true"></span>`;
    if (!part.svg) return NONE_ICON;
    if (key === 'face') return `<svg viewBox="33.5 50.5 34 28" aria-hidden="true">${part.id === 'sleepy' ? part.svg().replace(/<path d="M66.5[^>]+>/, '') : part.svg()}</svg>`;
    return `<svg viewBox="${part.vb}" aria-hidden="true">${part.svg()}</svg>`;
  }

  for (const group of GROUPS) {
    const fieldset = document.createElement('fieldset');
    fieldset.className = `wardrobe-group wardrobe-group-${group.key}`;
    fieldset.innerHTML = `<legend>${tr(group.legend)}</legend><div class="wardrobe-choices"></div>`;
    const choices = fieldset.querySelector('.wardrobe-choices');
    for (const part of PARTS[group.key]) {
      const id = `wardrobe-${group.key}-${part.id}`;
      const name = tr(part.name);
      const label = document.createElement('label');
      label.className = 'wardrobe-choice';
      label.title = name;
      label.innerHTML = `<input type="radio" name="${group.key}" value="${part.id}" id="${id}" aria-label="${name}">${thumb(group.key, part)}`;
      choices.append(label);
    }
    form.append(fieldset);
  }

  function sync() {
    for (const key in look) {
      const input = form.querySelector(`input[name="${key}"][value="${look[key]}"]`);
      if (input) input.checked = true;
    }
    preview.innerHTML = draw(look);
    stage.style.setProperty('--stage', find('color', look.color).petal);
  }
  function bounce() {
    if (reduced.matches) return;
    stage.classList.remove('is-bouncing');
    void stage.offsetWidth;
    stage.classList.add('is-bouncing');
  }
  function commit(message) {
    save(look);
    paintNav();
    sync();
    bounce();
    status.textContent = message || tr('Saved. I’ll keep this look while you explore.');
  }
  sync();

  form.addEventListener('change', event => {
    const input = event.target;
    if (input.type !== 'radio') return;
    look = { ...look, [input.name]: input.value };
    commit();
  });

  dialog.querySelector('.wardrobe-remix').addEventListener('click', () => {
    const pick = key => {
      const ids = PARTS[key].map(part => part.id);
      // Accessories show up more often than not, so remixes feel playful.
      const pool = ids.length > 2 && Math.random() < .8 ? ids.filter(id => id !== 'none') : ids;
      return pool[Math.floor(Math.random() * pool.length)];
    };
    let next;
    do { next = Object.fromEntries(Object.keys(DEFAULT).map(key => [key, pick(key)])); }
    while (JSON.stringify(next) === JSON.stringify(look));
    look = next;
    commit(tr('A new look. Saved for your visit.'));
  });

  dialog.querySelector('.wardrobe-reset').addEventListener('click', () => {
    look = { ...DEFAULT };
    commit(tr('Back to the original flower.'));
  });

  // Open / close: native modal handles focus and Escape.
  opener.addEventListener('click', () => {
    if (dialog.open) return;
    status.textContent = '';
    sync();
    dialog.showModal();
    document.body.classList.add('wardrobe-open');
  });
  const close = () => dialog.close();
  dialog.querySelectorAll('.wardrobe-close, .wardrobe-done').forEach(button => button.addEventListener('click', close));
  dialog.addEventListener('close', () => {
    document.body.classList.remove('wardrobe-open');
    opener.focus({ preventScroll: true });
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
  });
})();
