/* rldatix-studio.js
   RLDatix case study: interactive close-ups in "The work, up close" (#rs-studio).
   Sidebar, matrix filter, risk record, save feedback, Icon Wall configurator and redlines. */
(() => {
  const root = document.getElementById('rs-studio');
  if (!root) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, el = root) => el.querySelector(s);
  const $$ = (s, el = root) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const icon = d => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;

  /* ---------- Sidebar ---------- */
  const NAV = [
    ['Search', '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4-4"/>'],
    ['Inbox', '<path d="M4 13h4l2 3h4l2-3h4"/><path d="M5 6h14l1 7v5H4v-5z"/>', '3'],
    ['Overview', '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>'],
    ['Incidents', '<path d="M12 4 3 20h18z"/><path d="M12 10v4M12 17h.01"/>'],
    ['Risks', '<path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6z"/>'],
    ['Actions', '<path d="m5 12 4 4 10-10"/>', '6'],
    ['Reports', '<path d="M5 20V10M12 20V4M19 20v-7"/>'],
    null,
    ['Settings', '<circle cx="12" cy="12" r="3"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/>']
  ];
  document.querySelectorAll('[data-rs-side]').forEach(side => {
    const on = side.dataset.rsSide;
    side.innerHTML = '<div class="rs-org"><i>D</i><span>DCIQ</span><small>⌄</small></div>' +
      NAV.map(n => n ? `<div class="rs-nav${n[0] === on ? ' on' : ''}">${icon(n[1])}<span>${n[0]}</span>${n[2] ? `<em>${n[2]}</em>` : ''}</div>` : '<hr>').join('') +
      '<div class="rs-me"><b>LS</b><span>Laura S.</span></div>';
  });

  /* ---------- Shared risk scale ---------- */
  const LIKELIHOOD = ['Almost certain', 'Likely', 'Possible', 'Unlikely', 'Rare']; // 5 → 1
  const CONSEQUENCE = ['Negligible', 'Minor', 'Moderate', 'Major', 'Catastrophic']; // 1 → 5
  const band = s => (s >= 15 ? 'ext' : s >= 8 ? 'high' : s >= 4 ? 'mod' : 'low');
  const BAND_NAME = { low: 'Low', mod: 'Moderate', high: 'High', ext: 'Extreme' };

  /* ---------- 1. Matrix ---------- */
  // Same sample data as the risk overview in 02 / Overviews: 67 risks, 19 extreme.
  const MATRIX = [[4, 8, 5, 7, 2], [3, 0, 5, 2, 2], [1, 3, 10, 5, 1], [0, 1, 3, 1, 0], [6, 0, 1, 0, 1]]; // rows: Almost certain → Rare
  const NAMED = {
    '5,5': [['Sepsis screening missed in ED', 'Critical care'], ['Staffing escalation out of hours', 'Ward lead']],
    '5,4': [['Medication dose transcription', 'Pharmacy'], ['Bed capacity in ED', 'Emergency dept'], ['Lab results not acknowledged', 'Pathology']],
    '5,3': [['Agency staff induction', 'Workforce']],
    '4,5': [['Delayed escalation of deteriorating patients', 'Critical care']],
    '4,4': [['Falls on Ward 3 at night', 'Ward lead']],
    '4,3': [['Clinical handover between shifts', 'Governance team'], ['PPE supply for isolation bays', 'Estates']],
    '3,3': [['Equipment checks overdue', 'Estates'], ['Pressure ulcer assessments', 'Tissue viability']],
    '3,2': [['Interpreter booking delays', 'Patient experience']],
    '1,1': [['Parking signage', 'Facilities']]
  };
  const TOPICS = ['Discharge letters delayed', 'Training records incomplete', 'Fire door checks', 'Patient ID wristbands', 'Visitor guidance unclear', 'Theatre list overruns', 'Consent forms incomplete', 'Infusion pump servicing', 'Night staffing ratios', 'Referral backlog', 'Hand hygiene audits', 'Allergy status missing'];
  const UNITS = ['Ward 1', 'Ward 2', 'Ward 4', 'Maternity', 'Outpatients', 'Theatres'];
  const OWNERS = ['Ward lead', 'Quality team', 'Governance team', 'Estates', 'Nursing', 'Workforce'];
  let n = 0;
  const RISKS = [];
  MATRIX.forEach((row, i) => row.forEach((count, j) => {
    const l = 5 - i, c = j + 1, named = NAMED[`${l},${c}`] || [];
    for (let k = 0; k < count; k++) {
      const [title, owner] = named[k] || [`${TOPICS[n % TOPICS.length]}, ${UNITS[n % UNITS.length]}`, OWNERS[n % OWNERS.length]];
      if (!named[k]) n++;
      RISKS.push({ title, owner, l, c, s: l * c });
    }
  }));

  const matrix = $('[data-rs-matrix]');
  if (matrix) {
    const list = $('[data-rs-list]'), listUl = $('ul', list), listTitle = $('[data-rs-list-title]');
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
    let html = '';
    for (let l = 5; l >= 1; l--) {
      html += `<span class="ax">${LIKELIHOOD[5 - l]}</span>`;
      for (let c = 1; c <= 5; c++) {
        const n = RISKS.filter(r => r.l === l && r.c === c).length;
        html += `<button type="button" class="rs-cell" data-band="${band(l * c)}" data-l="${l}" data-c="${c}" data-count="${n}" aria-label="${LIKELIHOOD[5 - l]}, ${CONSEQUENCE[c - 1]}: ${n} risk${n === 1 ? '' : 's'}" aria-pressed="false">${n}</button>`;
      }
    }
    const SHORT = ['Neg.', 'Minor', 'Mod.', 'Major', 'Cat.'];
    html += '<span></span>' + CONSEQUENCE.map((c, i) => `<span class="ax col"><span class="rs-long">${c}</span><span class="rs-short" aria-hidden="true">${SHORT[i]}</span></span>`).join('');
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
    const score = $('[data-rs-score]', panel), note = $('[data-rs-score-note]', panel);
    const chip = $('[data-rs-band]', panel), hist = $('[data-rs-history]', panel);
    const boxes = $$('input[type=checkbox]', panel);
    const PAST = [['May', 20], ['Jun', 20], ['Jul', 16], ['Aug', 16], ['Sep', 16], ['Oct', 12], ['Nov', 12]];
    hist.innerHTML = PAST.map(([m, s]) => `<span style="--h:${s / 25 * 100}%"><small>${m}</small></span>`).join('') + '<span class="now" data-rs-now><small>Now</small></span>';
    const now = $('[data-rs-now]', hist);
    const C = 3;
    let shown = 12;
    const update = () => {
      const done = boxes.filter(b => b.checked).length;
      const l = Math.max(1, 5 - done), s = l * C, b = band(s);
      now.style.setProperty('--h', `${s / 25 * 100}%`);
      chip.className = `rs-chip ${b}`; chip.textContent = BAND_NAME[b];
      note.textContent = `${LIKELIHOOD[5 - l]} × Moderate`;
      const from = shown, to = s, t0 = performance.now();
      shown = s;
      if (reduced) { score.textContent = to; return; }
      const step = t => {
        const p = Math.min(1, (t - t0) / 450);
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

  /* ---------- 3. Save feedback ---------- */
  const fb = $('[data-rs-feedback]');
  if (fb) {
    const save = $('[data-rs-save]', fb), toast = $('[data-rs-toast]', fb);
    const menu = $('[data-rs-menu]', fb), q = $('[data-rs-question]', fb);
    let mode = 'shared', timers = [];
    const clear = () => {
      timers.forEach(clearTimeout); timers = [];
      toast.classList.remove('show'); q.classList.remove('show'); menu.classList.remove('show');
      save.dataset.state = ''; save.textContent = mode === 'legacy' ? 'Save ▾' : 'Save changes';
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
        save.dataset.state = ''; save.textContent = 'Save changes';
        toast.classList.add('show');
      }, reduced ? 0 : 700));
    });
  }

  /* ---------- 4. Icon Wall configurator ---------- */
  const ICONS = {
    skin: { name: 'Skin', tint: '#fdeee9', svg: '<path d="M5 19c1-6 4-9 7-9s6 3 7 9"/><circle cx="12" cy="6" r="2.5"/><path d="M9 15h.01M12 13.5h.01M15 15h.01"/>' },
    pill: { name: 'Medication', tint: '#eaf1fd', svg: '<rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-35 12 12)"/><path d="m9.5 8.5 5 7"/>' },
    fall: { name: 'Fall', tint: '#e8f5ee', svg: '<circle cx="15" cy="4.5" r="2"/><path d="m13 8-4 5 4 2-2 5M9 13l-4-1M13 15l5 1"/><path d="M3 21h18"/>' },
    drop: { name: 'Blood', tint: '#fde8e8', svg: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9.5 15a2.5 2.5 0 0 0 2.5 2.5"/>' },
    hazard: { name: 'Hazard', tint: '#fcf5dd', svg: '<path d="M12 3 2.5 20h19z"/><path d="M12 10v4M12 17h.01"/>' },
    chat: { name: 'Feedback', tint: '#efedfb', svg: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8M8 13h5"/>' }
  };
  const BASE = [
    ['pill', 'Medication event', 'Wrong dose, drug or timing'],
    ['fall', 'Patient fall', 'Patient or staff fall'],
    ['hazard', 'Hazard', 'Something unsafe nearby']
  ];
  const cfg = $('[data-rs-config]');
  if (cfg) {
    const icons = $('[data-rs-icons]', cfg), wall = $('[data-rs-wall]', cfg);
    const label = $('[data-rs-label]', cfg), help = $('[data-rs-help]', cfg), form = $('[data-rs-form]', cfg);
    let pick = 'skin';
    icons.innerHTML = Object.keys(ICONS).map(k => `<button type="button" data-icon="${k}" aria-label="${ICONS[k].name}" aria-pressed="${k === pick}">${icon(ICONS[k].svg)}</button>`).join('');
    const tile = (k, t, h, isNew) => `<div class="rs-tile${isNew ? ' is-new' : ''}"><span class="rs-tile-icon" style="--tint:${ICONS[k].tint}">${icon(ICONS[k].svg)}</span><strong>${esc(t)}</strong><small>${esc(h)}</small></div>`;
    const render = bump => {
      const t = label.value.trim() || 'New category', h = help.value.trim() || 'Add help text so staff know when to use it';
      wall.innerHTML = tile(pick, t, h, true) + BASE.map(b => tile(...b)).join('');
      $('[data-rs-route-form]', cfg).textContent = form.value;
      if (bump && !reduced) wall.firstElementChild.classList.add('is-bump');
    };
    icons.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      pick = b.dataset.icon;
      $$('button', icons).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      render(true);
    });
    [label, help].forEach(i => i.addEventListener('input', () => render(false)));
    form.addEventListener('change', () => render(true));
    render(false);
  }

  /* ---------- 5. Redlines ---------- */
  const stage = $('[data-rs-redline]');
  if (stage) {
    const item = $('.rs-item', stage);
    const draw = () => {
      $$('.rs-red', stage).forEach(n => n.remove());
      const S = stage.getBoundingClientRect(), I = item.getBoundingClientRect();
      const ico = item.firstElementChild.getBoundingClientRect(), txt = item.children[1].getBoundingClientRect();
      const x = r => r.left - S.left, y = r => r.top - S.top;
      const px = n => `${Math.round(n)}px`, r = n => String(Math.round(n));
      const add = (cls, style, text) => {
        const d = document.createElement('div');
        d.className = `rs-red ${cls}`; d.setAttribute('aria-hidden', 'true');
        Object.assign(d.style, style);
        if (text) d.innerHTML = `<em>${text}</em>`;
        stage.appendChild(d);
      };
      const base = y(I) + I.height;
      add('v', { left: px(x(txt) + 120), top: px(y(I)), height: px(y(txt) - y(I)) }, r(y(txt) - y(I)));
      add('h below', { left: px(x(I)), top: px(base + 8), width: px(x(ico) - x(I)) }, r(x(ico) - x(I)));
      add('h below', { left: px(x(ico) + ico.width), top: px(base + 8), width: px(x(txt) - x(ico) - ico.width) }, r(x(txt) - x(ico) - ico.width));
      add('box', { left: px(x(ico) - 3), top: px(y(ico) - 3), width: px(ico.width + 6), height: px(ico.height + 6) });
      add('v', { left: px(x(I) + I.width + 10), top: px(y(I)), height: px(I.height) }, r(I.height));
    };
    new ResizeObserver(draw).observe(stage);
    if (document.fonts) document.fonts.ready.then(draw);
    $$('[data-rs-red]').forEach(b => b.addEventListener('click', () => {
      $$('[data-rs-red]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      stage.classList.toggle('is-on', b.dataset.rsRed === 'on');
    }));
  }

  /* ---------- Hero dashboard scale ---------- */
  document.querySelectorAll('.rld-compare .hd-wrap').forEach(wrap => {
    const hd = wrap.querySelector('.hd');
    new ResizeObserver(() => hd.style.setProperty('--k', wrap.clientWidth / 1260)).observe(wrap);
  });

  /* ---------- Reveal on scroll ---------- */
  if (!reduced && 'IntersectionObserver' in window) {
    root.classList.add('rs-motion');
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -10% 0px' });
    $$('.rs-card').forEach(c => io.observe(c));
  }
})();
