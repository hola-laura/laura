/* rldatix-studio.js
   RLDatix case study: interactive close-ups in "The work, up close" (#rs-studio).
   Matrix filter, risk record controls, Icon Wall configurator, redlines and save feedback. */
(() => {
  const root = document.getElementById('rs-studio');
  if (!root) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, el = root) => el.querySelector(s);
  const $$ = (s, el = root) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- Shared risk scale ---------- */
  const LIKELIHOOD = ['Almost certain', 'Likely', 'Possible', 'Unlikely', 'Rare']; // 5 → 1
  const CONSEQUENCE = ['Negligible', 'Minor', 'Moderate', 'Major', 'Catastrophic']; // 1 → 5
  const band = s => (s >= 15 ? 'ext' : s >= 8 ? 'high' : s >= 4 ? 'mod' : 'low');
  const BAND_NAME = { low: 'Low', mod: 'Moderate', high: 'High', ext: 'Extreme' };

  /* ---------- 1. Matrix ---------- */
  // [title, owner, likelihood 1-5, consequence 1-5]
  const RISKS = [
    ['Staffing escalation out of hours', 'Ward lead', 5, 4], ['Sepsis screening missed', 'Critical care', 4, 5],
    ['Medication dose transcription', 'Pharmacy', 4, 4], ['Clinical handover between shifts', 'Governance team', 4, 3],
    ['Delayed discharge letters', 'Quality team', 4, 2], ['Falls on Ward 3 at night', 'Ward lead', 3, 4],
    ['PPE supply for isolation bays', 'Estates', 3, 4], ['Equipment checks overdue', 'Estates', 3, 3],
    ['Bed capacity in ED', 'Emergency dept', 5, 3], ['Patient ID wristbands', 'Nursing', 2, 4],
    ['Pressure ulcer assessments', 'Tissue viability', 3, 3], ['Visitor guidance unclear', 'Comms', 3, 1],
    ['Lab results not acknowledged', 'Pathology', 2, 5], ['Fire door wedged open', 'Estates', 2, 3],
    ['Training records incomplete', 'Education', 2, 2], ['Parking signage', 'Facilities', 1, 1],
    ['Interpreter booking delays', 'Patient experience', 3, 2], ['Agency staff induction', 'Workforce', 4, 3]
  ].map(([title, owner, l, c]) => ({ title, owner, l, c, s: l * c }));

  const matrix = $('[data-rs-matrix]');
  const list = $('[data-rs-list]');
  const listUl = $('ul', list);
  const listTitle = $('[data-rs-list-title]');
  let picked = null;

  const renderList = () => {
    const items = (picked ? RISKS.filter(r => r.l === picked.l && r.c === picked.c) : RISKS)
      .slice().sort((a, b) => b.s - a.s).slice(0, 5);
    listTitle.textContent = picked ? `${LIKELIHOOD[5 - picked.l]} × ${CONSEQUENCE[picked.c - 1]}` : 'Highest scoring risks';
    list.classList.toggle('is-filtered', !!picked);
    listUl.innerHTML = items.length
      ? items.map((r, i) => `<li style="animation-delay:${i * 40}ms"><strong>${esc(r.title)}</strong><small>${esc(r.owner)} · Score ${r.s}</small><span class="rs-chip ${band(r.s)}">${BAND_NAME[band(r.s)]}</span></li>`).join('')
      : '<li class="rs-empty">No risks in this cell. A good sign.</li>';
  };

  if (matrix) {
    let html = '';
    for (let l = 5; l >= 1; l--) {
      html += `<span class="ax">${LIKELIHOOD[5 - l]}</span>`;
      for (let c = 1; c <= 5; c++) {
        const n = RISKS.filter(r => r.l === l && r.c === c).length;
        html += `<button type="button" class="rs-cell" data-band="${band(l * c)}" data-l="${l}" data-c="${c}" data-count="${n}" aria-label="${LIKELIHOOD[5 - l]}, ${CONSEQUENCE[c - 1]}: ${n} risk${n === 1 ? '' : 's'}" aria-pressed="false">${n}</button>`;
      }
    }
    html += '<span></span>' + CONSEQUENCE.map(c => `<span class="ax col">${c}</span>`).join('');
    matrix.innerHTML = html;
    matrix.addEventListener('click', e => {
      const cell = e.target.closest('.rs-cell');
      if (!cell) return;
      const same = picked && picked.el === cell;
      $$('.rs-cell', matrix).forEach(b => { b.classList.remove('is-picked'); b.setAttribute('aria-pressed', 'false'); });
      picked = same ? null : { l: +cell.dataset.l, c: +cell.dataset.c, el: cell };
      if (picked) { cell.classList.add('is-picked'); cell.setAttribute('aria-pressed', 'true'); }
      matrix.classList.toggle('has-pick', !!picked);
      renderList();
    });
    $('[data-rs-clear]').addEventListener('click', () => { picked?.el.click(); });
    renderList();
  }

  /* ---------- 2. Risk record ---------- */
  const panel = $('[data-rs-panel]');
  if (panel) {
    const ring = $('[data-rs-ring]', panel), score = $('[data-rs-score]', panel);
    const note = $('[data-rs-score-note]', panel), chip = $('[data-rs-band]', panel);
    const boxes = $$('input[type=checkbox]', panel);
    // Each control in place lowers likelihood by one step, from Almost certain (5) with none in place.
    const C = 3;
    let shown = 12;
    const update = () => {
      const done = boxes.filter(b => b.checked).length;
      const l = Math.max(1, 5 - done);
      const s = l * C, b = band(s);
      const colors = { low: '#5cc28f', mod: '#e8c240', high: '#f6a26b', ext: '#ef6f6c' };
      ring.style.setProperty('--ring', colors[b]);
      ring.style.setProperty('--p', s / 25);
      chip.className = `rs-chip ${b}`; chip.textContent = BAND_NAME[b];
      note.textContent = `${LIKELIHOOD[5 - l]} × Moderate. ${done} of ${boxes.length} controls in place.`;
      const from = shown, to = s, t0 = performance.now();
      shown = s;
      if (reduced) { score.textContent = to; return; }
      const step = now => {
        const p = Math.min(1, (now - t0) / 450);
        score.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    boxes.forEach(b => b.addEventListener('change', update));
    $$('[data-rs-tab]', panel).forEach(tab => tab.addEventListener('click', () => {
      $$('[data-rs-tab]', panel).forEach(t => t.setAttribute('aria-selected', String(t === tab)));
      $$('[data-rs-pane]', panel).forEach(p => { p.hidden = p.dataset.rsPane !== tab.dataset.rsTab; });
    }));
    update();
  }

  /* ---------- 3. Icon Wall configurator ---------- */
  const ICONS = {
    skin: { name: 'Skin', tint: '#f8e1dd', svg: '<path d="M5 19c1-6 4-9 7-9s6 3 7 9"/><circle cx="12" cy="6" r="2.5"/><path d="M9 15h.01M12 13.5h.01M15 15h.01"/>' },
    pill: { name: 'Medication', tint: '#e2eefc', svg: '<rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-35 12 12)"/><path d="m9.5 8.5 5 7"/>' },
    fall: { name: 'Fall', tint: '#dff1e7', svg: '<circle cx="15" cy="4.5" r="2"/><path d="m13 8-4 5 4 2-2 5M9 13l-4-1M13 15l5 1"/><path d="M3 21h18"/>' },
    drop: { name: 'Blood', tint: '#fbdcdb', svg: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9.5 15a2.5 2.5 0 0 0 2.5 2.5"/>' },
    hazard: { name: 'Hazard', tint: '#fbf1cf', svg: '<path d="M12 3 2.5 20h19z"/><path d="M12 10v4M12 17h.01"/>' },
    chat: { name: 'Feedback', tint: '#e7e1f3', svg: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8M8 13h5"/>' }
  };
  const svg = k => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[k].svg}</svg>`;
  const BASE = [
    ['pill', 'Medication event', 'Wrong dose, drug or timing'],
    ['fall', 'Patient fall', 'Patient or staff fall'],
    ['drop', 'Blood product', 'Blood or transfusion'],
    ['hazard', 'Hazard', 'Environmental hazard'],
    ['chat', 'Feedback', 'Share feedback or a concern']
  ];
  const cfg = $('[data-rs-config]');
  if (cfg) {
    const icons = $('[data-rs-icons]', cfg), wall = $('[data-rs-wall]', cfg);
    const label = $('[data-rs-label]', cfg), help = $('[data-rs-help]', cfg), form = $('[data-rs-form]', cfg);
    let icon = 'skin';
    icons.innerHTML = Object.keys(ICONS).map(k => `<button type="button" data-icon="${k}" aria-label="${ICONS[k].name}" aria-pressed="${k === icon}">${svg(k)}</button>`).join('');
    const tile = (k, t, h, isNew) => `<div class="rs-tile${isNew ? ' is-new' : ''}"><span class="rs-tile-icon" style="--tint:${ICONS[k].tint}">${svg(k)}</span><strong>${esc(t)}</strong><small>${esc(h)}</small><em aria-hidden="true">→</em></div>`;
    const render = bump => {
      const t = label.value.trim() || 'New category', h = help.value.trim() || 'Add help text so staff know when to use it';
      wall.innerHTML = tile(icon, t, h, true) + BASE.map(b => tile(...b)).join('');
      $('[data-rs-route-label]', cfg).textContent = t;
      $('[data-rs-route-form]', cfg).textContent = form.value;
      if (bump && !reduced) wall.firstElementChild.classList.add('is-bump');
    };
    icons.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      icon = b.dataset.icon;
      $$('button', icons).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      render(true);
    });
    [label, help].forEach(i => i.addEventListener('input', () => render(false)));
    form.addEventListener('change', () => render(true));
    render(false);
  }

  /* ---------- 4. Redlines ---------- */
  const stage = $('[data-rs-redline]');
  if (stage) {
    const item = $('.rs-item', stage);
    const draw = () => {
      $$('.rs-red', stage).forEach(n => n.remove());
      const S = stage.getBoundingClientRect(), I = item.getBoundingClientRect();
      const ico = item.firstElementChild.getBoundingClientRect(), txt = item.children[1].getBoundingClientRect();
      const x = r => r.left - S.left, y = r => r.top - S.top;
      const add = (cls, style, label) => {
        const d = document.createElement('div');
        d.className = `rs-red ${cls}`; d.setAttribute('aria-hidden', 'true');
        Object.assign(d.style, style);
        if (label) d.innerHTML = `<em>${label}</em>`;
        stage.appendChild(d);
      };
      const px = n => `${Math.round(n)}px`;
      const r = n => String(Math.round(n));
      const base = y(I) + I.height;
      // padding top, measured to the text block
      add('v', { left: px(x(txt) + 120), top: px(y(I)), height: px(y(txt) - y(I)) }, r(y(txt) - y(I)));
      // padding left and gap, drawn under the item so labels never sit on the content
      add('h below', { left: px(x(I)), top: px(base + 8), width: px(x(ico) - x(I)) }, r(x(ico) - x(I)));
      add('h below', { left: px(x(ico) + ico.width), top: px(base + 8), width: px(x(txt) - x(ico) - ico.width) }, r(x(txt) - x(ico) - ico.width));
      // icon box
      add('box', { left: px(x(ico) - 3), top: px(y(ico) - 3), width: px(ico.width + 6), height: px(ico.height + 6) });
      // height
      add('v', { left: px(x(I) + I.width + 10), top: px(y(I)), height: px(I.height) }, r(I.height));
    };
    const ro = new ResizeObserver(draw); ro.observe(stage);
    root.querySelectorAll('[data-rs-red]').forEach(b => b.addEventListener('click', () => {
      root.querySelectorAll('[data-rs-red]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      stage.classList.toggle('is-on', b.dataset.rsRed === 'on');
    }));
  }

  /* ---------- 5. Save feedback ---------- */
  const fb = $('[data-rs-feedback]');
  if (fb) {
    const save = $('[data-rs-save]', fb), toast = $('[data-rs-toast]', fb);
    const menu = $('[data-rs-menu]', fb), q = $('[data-rs-question]', fb);
    let mode = 'shared', timers = [];
    const clear = () => {
      timers.forEach(clearTimeout); timers = [];
      toast.classList.remove('show'); q.classList.remove('show'); menu.classList.remove('show');
      save.dataset.state = ''; save.innerHTML = 'Save changes';
    };
    $$('[data-rs-mode]').forEach(b => b.addEventListener('click', () => {
      mode = b.dataset.rsMode;
      $$('[data-rs-mode]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      fb.classList.toggle('is-legacy', mode === 'legacy');
      clear();
    }));
    save.addEventListener('click', () => {
      clear();
      if (mode === 'legacy') {
        void menu.offsetWidth; menu.classList.add('show');
        timers.push(setTimeout(() => q.classList.add('show'), 1200));
        return;
      }
      save.dataset.state = 'busy'; save.innerHTML = '<span class="rs-spin" aria-hidden="true"></span>Saving';
      timers.push(setTimeout(() => {
        save.dataset.state = ''; save.innerHTML = 'Save changes';
        toast.classList.add('show');
      }, reduced ? 0 : 700));
    });
  }

  /* ---------- Reveal on scroll ---------- */
  if (!reduced && 'IntersectionObserver' in window) {
    root.classList.add('rs-motion');
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -10% 0px' });
    $$('.rs-card').forEach(c => io.observe(c));
  }
})();
