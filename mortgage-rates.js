/* mortgage-rates.js
   Animated, working prototype of estimated mortgage rates (Figma: Homeownership Master file,
   "Estimated deals connected"), rebuilt in HTML for section 03.
   The filters really recalculate: LTV = balance / property value, and the monthly repayment uses the
   standard repayment formula, which reproduces the Figma figure exactly (£125,050 at 4.73% over 21 years = £783.73).
   The rate itself stays at the design's 4.73%: this demo doesn't invent lender pricing. Lenders are anonymised. */
(() => {
  const root = document.querySelector('[data-rates-demo]');
  if (!root) return;

  const es = window.I18n?.lang === 'es';
  const c = (en, esText) => es ? esText : en;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const A = 'assets/mortgages/rates/';
  const T = 'assets/mortgages/tracker/';
  const RATE = 0.0473;
  const start = {value: 388000, balance: 125050, term: 21};
  let data = {...start};

  const gbp = n => '£' + Math.round(n).toLocaleString('en-GB');
  const gbp2 = n => '£' + n.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  const monthly = () => { const r = RATE / 12, n = data.term * 12; return data.balance * r / (1 - Math.pow(1 + r, -n)); };
  const ltv = () => (data.balance / data.value * 100).toFixed(1) + '%';
  const years = n => c(`${n} years`, `${n} años`);

  const bank = `<span class="rt-bank" aria-hidden="true"><svg viewBox="0 0 20 20" width="16" height="16"><path d="M10 2 2 6v2h16V6l-8-4ZM4 9h2v6H4V9Zm5 0h2v6H9V9Zm5 0h2v6h-2V9ZM2 16h16v2H2v-2Z" fill="currentColor"/></svg></span>`;
  const back = `<span class="rt-glass"><img src="${T}back.svg" alt="" width="24" height="24"></span>`;
  const row = (label, value, key) => `<div class="rt-row"><span>${label}</span><b${key ? ` data-rt="${key}"` : ''}>${value}</b></div>`;
  const stepper = (label, key) => `<div class="rt-row rt-step"><span>${label}</span><span class="rt-stepper"><button type="button" data-rt-dec="${key}" aria-label="${c('Decrease', 'Reducir')} ${label}">−</button><b data-rt="${key}"></b><button type="button" data-rt-inc="${key}" aria-label="${c('Increase', 'Aumentar')} ${label}">+</button></span></div>`;

  const stages = [
    c('Find it at home', 'En tu casa'),
    c('See estimates', 'Ver estimaciones'),
    c('Change your details', 'Cambiar tus datos'),
    c('Compare the deal', 'Comparar la oferta'),
    c('Understand the numbers', 'Entender las cifras')
  ];

  const frame = root.querySelector('[data-rates-screen]');
  frame.innerHTML = `
  <div class="rt-pane rt-home" data-pane="0">
    <div class="rt-bar">${back}<b>${c('Your home', 'Tu casa')}</b></div>
    <div class="rt-card rt-mortgage"><div class="rt-card-head"><b>${c('Mortgage', 'Hipoteca')}</b></div>
      <div class="rt-li">${bank}<span class="rt-li-text">${c('Your lender', 'Tu entidad')}<small>${c('£74,950 paid off · 37%', '£74.950 pagados · 37%')}</small></span><b class="rt-big">-£125,050</b></div></div>
    <div class="rt-card rt-promo"><img src="${A}rates-banner.webp" alt="" width="620" height="306"><div class="rt-promo-body"><b>${c('See current mortgage rates', 'Mira los tipos hipotecarios actuales')}</b><p>${c('Compare mortgage rates personalised to your situation and the market. Estimates provided by Habito.', 'Compara tipos hipotecarios personalizados según tu situación y el mercado. Estimaciones de Habito.')}</p><span class="rt-soft" data-tap="try">${c('Try now', 'Probar')}</span></div></div>
  </div>
  <div class="rt-pane rt-rates" data-pane="1"><div class="rt-scroll">
    <div class="rt-bar rt-bar-plain">${back}<span class="rt-info">i</span></div>
    <h3>${c('Your estimated mortgage rates', 'Tus tipos hipotecarios estimados')}</h3>
    <p class="rt-lede">${c('Based on a', 'Con un valor de la vivienda de')} <b data-rt="value"></b>${c(' property value and ', ' y un saldo de ')}<b data-rt="balance"></b>${c(' mortgage balance, your LTV is ', ', tu LTV es ')}<b data-rt="ltv"></b>. ${c('Adjust the filters to change this.', 'Ajusta los filtros para cambiarlo.')}</p>
    <span class="rt-filter" data-tap="filters"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>${c('Your mortgage', 'Tu hipoteca')}</span>
    <div class="rt-card rt-deal"><div class="rt-li">${bank}<span class="rt-li-text">${c('Lender A', 'Entidad A')}</span><span class="rt-tag">${c('Lowest overall cost', 'Menor coste total')}</span></div>
      ${row(c('Monthly repayment', 'Cuota mensual'), '', 'monthly')}${row(c('Interest rate', 'Tipo de interés'), '4.73%')}${row(c('Deal length', 'Duración de la oferta'), years(2))}${row(c('Lender fee', 'Comisión de la entidad'), '£0')}${row('APRC', '6%')}
      <span class="rt-soft rt-soft-sm" data-tap="more">${c('See more', 'Ver más')}</span></div>
    <p class="rt-legal">${c('Your home may be repossessed if you do not keep up repayments on your mortgage.', 'Puedes perder tu vivienda si no pagas las cuotas de tu hipoteca.')}</p>
    <div class="rt-card rt-chart"><div class="rt-card-head"><b>${c('How rates have changed', 'Cómo han cambiado los tipos')}</b><span class="rt-acc">${c('2 years fixed', 'Fijo a 2 años')}</span></div>
      <div class="rt-chart-top"><b>${c('Last 11 months', 'Últimos 11 meses')}<small>${c('1 Jun 2025 – 1 May 2026', '1 jun. 2025 – 1 may. 2026')}</small></b><span class="rt-down">↓0.12%</span></div>
      <svg class="rt-line" viewBox="0 0 300 110" aria-hidden="true"><path class="rt-area" d="M4 22 C10 6 14 14 20 24 L60 30 L120 38 L180 44 L240 50 L292 56 L292 108 L4 108Z"/><path class="rt-path" pathLength="1" d="M4 22 C10 6 14 14 20 24 L60 30 L120 38 L180 44 L240 50 L292 56"/><circle cx="4" cy="22" r="4"/><circle cx="292" cy="56" r="4"/></svg>
      <div class="rt-axis"><span>${c('Jun 2025', 'jun. 2025')}</span><span>${c('May 2026', 'may. 2026')}</span></div></div>
  </div></div>
  <div class="rt-pane rt-about" data-pane="4">
    <div class="rt-bar rt-bar-plain"><span class="rt-plus">+</span></div>
    <img class="rt-about-art" src="${A}about.png" alt="" width="109" height="91">
    <h3>${c('About these mortgage rates', 'Sobre estos tipos hipotecarios')}</h3>
    <p class="rt-sub">${c('These mortgage rates are provided by Better.co.uk. They are based on the data you provided.', 'Estos tipos los proporciona Better.co.uk. Se basan en los datos que nos has dado.')}</p>
    <div class="rt-card">${row(c('Mortgage term', 'Plazo de la hipoteca'), '', 'term')}${row(c('Property value', 'Valor de la vivienda'), '', 'value')}${row(c('Mortgage balance', 'Saldo de la hipoteca'), '', 'balance')}${row(c('Deal length', 'Duración de la oferta'), c('2 years fixed', 'Fijo a 2 años'))}${row(c('Loan to value (LTV)', 'Préstamo sobre valor (LTV)'), '', 'ltv')}</div>
    <div class="rt-card rt-ltv"><b>${c('About loan to value (LTV)', 'Sobre el préstamo sobre valor (LTV)')}</b><p>${c('Loan to value (or ‘LTV’) is how much you’ve borrowed from your mortgage lender to buy your home compared with its value.', 'El LTV es cuánto has pedido prestado a tu entidad para comprar tu casa en comparación con su valor.')}</p></div>
    <div class="rt-foot"><span class="rt-cta">${c('Got it', 'Entendido')}</span><span class="rt-cta rt-cta-soft">${c('Change mortgage details', 'Cambiar datos de la hipoteca')}</span></div>
  </div>
  <i class="rt-scrim" data-scrim></i>
  <div class="rt-sheet rt-filters" data-sheet="filters">
    <div class="rt-sheet-bar"><span class="rt-pill">${c('Cancel', 'Cancelar')}</span><b>${c('Filters', 'Filtros')}</b><span></span></div>
    <div class="rt-card rt-flat">${row(c('Deal length', 'Duración de la oferta'), `<span class="rt-acc">${years(2)}</span>`)}${stepper(c('Property value', 'Valor de la vivienda'), 'value')}${stepper(c('Mortgage balance', 'Saldo de la hipoteca'), 'balance')}${row(c('Property use', 'Uso de la vivienda'), `<span class="rt-muted">${c('Live in', 'Vivienda habitual')}</span>`)}${stepper(c('Mortgage Term', 'Plazo de la hipoteca'), 'term')}</div>
    <span class="rt-cta rt-apply" data-tap="apply">${c('Apply', 'Aplicar')}</span>
  </div>
  <div class="rt-sheet rt-detail" data-sheet="detail">
    <span class="rt-plus rt-plus-float">+</span>
    <div class="rt-card"><div class="rt-li">${bank}<span class="rt-li-text">${c('Lender A', 'Entidad A')}</span></div></div>
    <div class="rt-card">${row(c('You borrow', 'Te prestan'), '', 'balance')}${row(c('Monthly repayments', 'Cuotas mensuales'), '', 'monthly')}${row(c('Fixed 2 year rate', 'Tipo fijo a 2 años'), '4.73%')}${row(c('Deal period', 'Periodo de la oferta'), years(2))}</div>
    <div class="rt-card">${row(c('Term', 'Plazo'), '', 'term')}${row(c('Rate after deal ends', 'Tipo al terminar la oferta'), '6.24%')}</div>
    <div class="rt-card">${row(c('Lender incentives', 'Incentivos de la entidad'), '£300')}${row(c('Lender fee', 'Comisión de la entidad'), '£0')}</div>
  </div>
  <i class="rt-tap" data-tapdot></i>`;

  const $ = s => frame.querySelector(s);
  const panes = [...frame.querySelectorAll('[data-pane]')];
  const scroller = $('.rt-scroll');
  const tapdot = $('[data-tapdot]');

  function paint(flash) {
    const values = {value: gbp(data.value), balance: gbp(data.balance), ltv: ltv(), term: years(data.term), monthly: gbp2(monthly())};
    frame.querySelectorAll('[data-rt]').forEach(el => {
      const next = values[el.dataset.rt];
      if (el.textContent !== next) {
        el.textContent = next;
        if (flash) { el.classList.remove('is-flash'); void el.offsetWidth; el.classList.add('is-flash'); }
      }
    });
  }
  const limits = {value: [150000, 900000, 5000], balance: [25000, 600000, 5000], term: [5, 35, 1]};
  function nudge(key, dir) {
    const [min, max, stepBy] = limits[key];
    const next = Math.min(max, Math.max(min, data[key] + dir * stepBy));
    if (key === 'balance' && next >= data.value) return;
    data[key] = next; paint(true);
  }

  // ---------- stages ----------
  let current = -1, timers = [], playing = false;
  const later = (ms, fn) => timers.push(setTimeout(fn, ms));
  const clearAll = () => { timers.forEach(clearTimeout); timers = []; };
  function tap(selector) {
    const el = typeof selector === 'string' ? $(selector) : selector;
    if (!el || reduced) return;
    const f = frame.getBoundingClientRect(), r = el.getBoundingClientRect(), s = f.width / 402;
    tapdot.style.left = ((r.left + r.width / 2 - f.left) / s) + 'px';
    tapdot.style.top = ((r.top + r.height / 2 - f.top) / s) + 'px';
    tapdot.classList.remove('is-on'); void tapdot.offsetWidth; tapdot.classList.add('is-on');
    el.classList.remove('is-pressed'); void el.offsetWidth; el.classList.add('is-pressed');
  }
  function showPane(n) { panes.forEach(p => { const i = +p.dataset.pane; p.classList.toggle('is-active', i === n); p.classList.toggle('is-past', i < n); }); }
  function sheet(name) {
    frame.querySelectorAll('[data-sheet]').forEach(s => s.classList.toggle('is-open', s.dataset.sheet === name));
    $('[data-scrim]').classList.toggle('is-on', !!name);
  }

  const scenes = [
    () => { data = {...start}; paint(); sheet(null); showPane(0); scroller.scrollTop = 0; frame.classList.remove('is-drawn'); later(1300, () => tap('[data-tap="try"]')); },
    () => { sheet(null); showPane(1); scroller.style.scrollBehavior = 'auto'; scroller.scrollTop = 0; scroller.style.scrollBehavior = '';
      later(1100, () => { scroller.scrollTo({top: 420, behavior: reduced ? 'auto' : 'smooth'}); frame.classList.add('is-drawn'); });
      later(3000, () => scroller.scrollTo({top: 0, behavior: reduced ? 'auto' : 'smooth'})); },
    () => { showPane(1); frame.classList.add('is-drawn'); scroller.scrollTop = 0; data = {...start}; paint();
      later(300, () => tap('[data-tap="filters"]')); later(650, () => sheet('filters'));
      [1500, 2000, 2500, 3000].forEach(t => later(t, () => { tap('[data-rt-inc="term"]'); nudge('term', 1); }));
      later(3700, () => tap('[data-tap="apply"]')); later(4000, () => { sheet(null); paint(true); }); },
    () => { showPane(1); frame.classList.add('is-drawn'); if (data.term === start.term) { data.term = 25; } paint(); later(400, () => tap('[data-tap="more"]')); later(700, () => sheet('detail')); },
    () => { sheet(null); showPane(4); }
  ];
  const durations = [3200, 4600, 5600, 3600, 4200];

  const list = root.querySelector('[data-rates-steps]');
  list.innerHTML = stages.map((label, i) => `<li><button type="button" data-step="${i}"><span class="mg-tk-num">${String(i + 1).padStart(2, '0')}</span><span class="mg-tk-name">${label}</span></button></li>`).join('');
  const buttons = [...list.querySelectorAll('button')];
  const toggle = root.querySelector('[data-rates-toggle]');
  const live = root.querySelector('[data-rates-live]');

  function show(i) {
    clearAll(); current = i;
    buttons.forEach((b, k) => { b.toggleAttribute('aria-current', k === i); b.classList.toggle('is-past', k < i); });
    live.textContent = `${i + 1} / ${stages.length} · ${stages[i]}`;
    scenes[i]();
    if (playing) later(durations[i], () => show((i + 1) % stages.length));
  }
  function setPlaying(v) {
    playing = v; toggle.setAttribute('aria-pressed', String(v));
    toggle.querySelector('span').textContent = v ? c('Pause', 'Pausar') : c('Play', 'Reproducir');
    if (v) show(current < 0 ? 0 : current); else clearAll();
  }
  list.addEventListener('click', e => { const b = e.target.closest('[data-step]'); if (!b) return; playing = false; setPlaying(false); show(+b.dataset.step); });
  toggle.addEventListener('click', () => setPlaying(!playing));

  // People can play with the filters themselves
  frame.addEventListener('click', e => {
    const inc = e.target.closest('[data-rt-inc]'), dec = e.target.closest('[data-rt-dec]');
    if (inc || dec) { if (playing) setPlaying(false); nudge((inc || dec).dataset[inc ? 'rtInc' : 'rtDec'], inc ? 1 : -1); return; }
    const t = e.target.closest('[data-tap]');
    if (!t) return;
    if (playing) setPlaying(false);
    ({try: () => show(1), filters: () => { sheet('filters'); buttons.forEach((b, k) => b.toggleAttribute('aria-current', k === 2)); }, apply: () => { sheet(null); paint(true); }, more: () => show(3)})[t.dataset.tap]?.();
  });
  frame.addEventListener('click', e => { if (e.target.matches('[data-scrim]')) sheet(null); });

  const fit = () => frame.style.setProperty('--tk-scale', frame.parentElement.clientWidth / 402);
  new ResizeObserver(fit).observe(frame.parentElement);
  fit(); paint(); show(0);

  if (!reduced && 'IntersectionObserver' in window) {
    let started = false;
    new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting && !started) { started = true; setPlaying(true); }
      else if (!entry.isIntersecting && playing) { playing = false; toggle.setAttribute('aria-pressed', 'false'); toggle.querySelector('span').textContent = c('Play', 'Reproducir'); clearAll(); }
    }), {threshold: 0.4}).observe(root);
  }
})();
