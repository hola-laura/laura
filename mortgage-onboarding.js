/* mortgage-onboarding.js
   Animated walkthrough of mortgage connection onboarding with the deal-end steps
   (Figma: Homeownership Master file, "Onboarding / Connection"), rebuilt in HTML.
   Same behaviour as the tracker: plays once in view, stages are clickable, reduced motion never autoplays.
   Lender anonymised; balance and dates are the placeholder figures from the Figma file. */
(() => {
  const root = document.querySelector('[data-onboarding-demo]');
  if (!root) return;

  const es = window.I18n?.lang === 'es';
  const c = (en, esText) => es ? esText : en;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const A = 'assets/mortgages/onboarding/';
  const T = 'assets/mortgages/tracker/';

  const stages = [
    {label: c('Connect intro', 'Conectar'), group: 'connect'},
    {label: c('Insights', 'Información útil'), group: 'connect'},
    {label: c('Equity', 'Patrimonio'), group: 'connect'},
    {label: c('Mortgage found', 'Hipoteca encontrada'), group: 'connect'},
    {label: c('Deal-end question', 'Fin de la oferta'), group: 'deal'},
    {label: c('Pick the date', 'Elegir la fecha'), group: 'deal'},
    {label: c('Choose a reminder', 'Elegir recordatorio'), group: 'deal'},
    {label: c('Reminder set', 'Recordatorio listo'), group: 'deal'}
  ];

  const back = `<span class="ob-back"><img src="${T}back.svg" alt="" width="28" height="28"></span>`;
  const dots = n => `<div class="ob-dots">${[0, 1, 2].map(i => `<i${i === n ? ' class="is-on"' : ''}></i>`).join('')}</div>`;
  const bank = `<span class="ob-bank" aria-hidden="true"><svg viewBox="0 0 20 20" width="18" height="18"><path d="M10 2 2 6v2h16V6l-8-4ZM4 9h2v6H4V9Zm5 0h2v6H9V9Zm5 0h2v6h-2V9ZM2 16h16v2H2v-2Z" fill="currentColor"/></svg></span>`;
  const head = title => `<div class="ob-bar">${back}<b>${title}</b></div>`;
  const months = c(['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'], ['jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic', 'ene']);
  const wheel = (items, cls) => `<div class="ob-wheel ${cls}"><div class="ob-wheel-track">${items.map(item => `<span>${item}</span>`).join('')}</div></div>`;

  const screens = [
    `<div class="ob-screen ob-intro">${back}<div class="ob-art"><img src="${A}connect.png" alt="" width="313" height="274"></div>
      <h3>${c('Connect your mortgage from any lender.', 'Conecta tu hipoteca, sea de la entidad que sea.')}</h3>
      <p>${c('No account details needed. We will securely get your mortgage details from TransUnion and use them to show you up-to-date info.', 'Sin datos de tu cuenta. Obtendremos de forma segura los datos de tu hipoteca a través de TransUnion para mostrarte información actualizada.')}</p>
      <p class="ob-muted">${c('No impact on credit score', 'No afecta a tu historial crediticio')}</p>${dots(0)}<span class="ob-cta">${c('Next', 'Siguiente')}</span></div>`,
    `<div class="ob-screen ob-intro">${back}<div class="ob-art"><img src="${A}insights.png" alt="" width="302" height="193"></div>
      <h3>${c('Get insights to help you save money', 'Información para ayudarte a ahorrar')}</h3>
      <p>${c('Track your overpayments and see how UK rates are changing, to help you be mortgage-free faster.', 'Sigue tus amortizaciones y cómo cambian los tipos en Reino Unido para terminar de pagar antes.')}</p>${dots(1)}<span class="ob-cta">${c('Next', 'Siguiente')}</span></div>`,
    `<div class="ob-screen ob-intro">${back}<div class="ob-art"><img src="${A}equity.png" alt="" width="295" height="208"></div>
      <h3>${c('Track your equity', 'Sigue tu patrimonio')}</h3>
      <p>${c('See how much of your home you own and how its value has changed over time.', 'Mira cuánto de tu casa ya es tuyo y cómo ha cambiado su valor.')}</p>
      <p class="ob-small">${c('By connecting your mortgage, you agree to our <u>Terms and Conditions</u> and <u>Privacy Policy</u>.', 'Al conectar tu hipoteca, aceptas nuestros <u>Términos y condiciones</u> y la <u>Política de privacidad</u>.')}</p>${dots(2)}<span class="ob-cta">${c('Connect mortgage', 'Conectar hipoteca')}</span></div>`,
    `<div class="ob-screen ob-found"><span class="ob-pill">${c('Cancel', 'Cancelar')}</span><img class="ob-found-art" src="${A}found.png" alt="" width="97" height="86">
      <h3>${c('We’ve found your mortgage', 'Hemos encontrado tu hipoteca')}</h3>
      <small class="ob-caption">${c('MORTGAGE DETAILS', 'DATOS DE LA HIPOTECA')}</small>
      <div class="ob-card"><div class="ob-row">${bank}<span>${c('Your lender', 'Tu entidad')}</span></div><div class="ob-amount">-<small>£</small>195,428<small>.31</small></div></div>
      <div class="ob-card ob-help"><div class="ob-row"><span class="ob-q">?</span><b>${c('Something not right?', '¿Algo no cuadra?')}</b></div><p>${c('We get this information from TransUnion. If it doesn’t look right, they can correct it.', 'Esta información viene de TransUnion. Si no es correcta, pueden corregirla.')}</p><span class="ob-ghost">${c('Learn more', 'Más información')}</span></div>
      <div class="ob-foot"><div class="ob-lock"><svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4 7V5a4 4 0 1 1 8 0v2h1v8H3V7h1Zm2 0h4V5a2 2 0 1 0-4 0v2Z" fill="currentColor"/></svg><span>${c('This won’t impact your credit score and you can remove it any time.', 'No afecta a tu historial crediticio y puedes quitarla cuando quieras.')}</span></div><span class="ob-cta">${c('Show in Monzo', 'Ver en Monzo')}</span></div></div>`,
    `<div class="ob-screen ob-ask">${head(c('Set reminder', 'Crear recordatorio'))}<img class="ob-center-art" src="${A}calendar.png" alt="" width="118" height="103">
      <h3>${c('When will your current deal end?', '¿Cuándo termina tu oferta actual?')}</h3>
      <p>${c('This is the date when your current mortgage deal with your lender ends.', 'Es la fecha en la que termina la oferta actual de tu hipoteca con tu entidad.')}</p>
      <div class="ob-foot"><span class="ob-cta">${c('Enter date', 'Introducir fecha')}</span><span class="ob-cta ob-cta-soft">${c('I don’t know', 'No lo sé')}</span></div></div>`,
    `<div class="ob-screen ob-pick">${head(c('Set reminder', 'Crear recordatorio'))}
      <h3>${c('When will your current deal end?', '¿Cuándo termina tu oferta actual?')}</h3>
      <div class="ob-card ob-wheels"><i class="ob-wheel-band"></i>${wheel(months, 'ob-months')}${wheel(['2021', '2022', '2023', '2024', '2025', '2026'], 'ob-years')}</div>
      <div class="ob-foot"><span class="ob-cta">${c('Next', 'Siguiente')}</span></div></div>`,
    `<div class="ob-screen ob-pick">${head(c('Current deal details', 'Datos de tu oferta'))}
      <h3>${c('Pick reminder date', 'Elige cuándo avisarte')}</h3>
      <p>${c('About 3-6 months should give you enough time to look at new deals.', 'Entre 3 y 6 meses antes suele dar tiempo suficiente para mirar nuevas ofertas.')}</p>
      <div class="ob-card ob-wheels ob-wheels-single"><i class="ob-wheel-band"></i>${wheel([1, 2, 3, 4, 5, 6, 7].map(n => c(`${n} months before`, `${n} meses antes`)), 'ob-lead')}</div>
      <small class="ob-caption">${c('TIMELINE', 'CRONOLOGÍA')}</small>
      <div class="ob-card ob-timeline"><div class="is-done"><i></i><span>${c('Start of deal', 'Inicio de la oferta')}</span><b>${c('Nov 2021', 'nov. 2021')}</b></div><div class="ob-remind"><i></i><span>${c('Reminder date', 'Recordatorio')}</span><b>${c('May 2023', 'may. 2023')}</b></div><div><i></i><span>${c('End of deal', 'Fin de la oferta')}</span><b>${c('Nov 2023', 'nov. 2023')}</b></div></div>
      <div class="ob-foot"><span class="ob-cta">${c('Set reminder', 'Crear recordatorio')}</span></div></div>`,
    `<div class="ob-screen ob-done">${head(c('Current deal details', 'Datos de tu oferta')).replace(back, '')}<img class="ob-check" src="${A}check.png" alt="" width="111" height="104">
      <h3>${c('Reminder set', 'Recordatorio creado')}</h3><p>${c('We’ll send you a reminder in May 2023', 'Te avisaremos en mayo de 2023')}</p>
      <div class="ob-foot"><span class="ob-cta">${c('Done', 'Listo')}</span></div></div>`
  ];

  const list = root.querySelector('[data-onboarding-steps]');
  const frame = root.querySelector('[data-onboarding-screen]');
  const toggle = root.querySelector('[data-onboarding-toggle]');
  const live = root.querySelector('[data-onboarding-live]');

  list.innerHTML = stages.map((stage, i) => `<li><button type="button" data-step="${i}"><span class="mg-tk-num">${String(i + 1).padStart(2, '0')}</span><span class="mg-tk-name">${stage.label}</span><span class="mg-tk-who ${stage.group === 'deal' ? 'is-new' : 'is-base'}">${stage.group === 'deal' ? c('Deal end', 'Fin oferta') : c('Connect', 'Conexión')}</span></button></li>`).join('');
  const buttons = [...list.querySelectorAll('button')];
  frame.innerHTML = screens.join('');
  const panes = [...frame.querySelectorAll('.ob-screen')];

  let current = -1, timer = null, playing = false;
  function show(index) {
    current = index;
    panes.forEach((pane, i) => {
      pane.classList.toggle('is-active', i === index);
      pane.classList.toggle('is-past', i < index);
    });
    buttons.forEach((button, i) => {
      button.toggleAttribute('aria-current', i === index);
      button.classList.toggle('is-past', i < index);
    });
    root.classList.toggle('is-deal', stages[index].group === 'deal');
    live.textContent = `${index + 1} / ${stages.length} · ${stages[index].label}`;
  }
  const step = () => { show((current + 1) % stages.length); schedule(); };
  const schedule = () => { clearTimeout(timer); if (playing) timer = setTimeout(step, current === stages.length - 1 ? 3400 : current >= 4 ? 3000 : 2400); };
  function setPlaying(value) {
    playing = value;
    toggle.setAttribute('aria-pressed', String(value));
    toggle.querySelector('span').textContent = value ? c('Pause', 'Pausar') : c('Play', 'Reproducir');
    schedule();
  }
  list.addEventListener('click', event => {
    const button = event.target.closest('[data-step]');
    if (!button) return;
    show(+button.dataset.step);
    setPlaying(false);
  });
  toggle.addEventListener('click', () => setPlaying(!playing));

  const fit = () => frame.style.setProperty('--tk-scale', frame.parentElement.clientWidth / 402);
  new ResizeObserver(fit).observe(frame.parentElement);
  fit();
  show(0);

  // The 38% → 88% bars fill once the section is seen
  const io = 'IntersectionObserver' in window;
  if (!reduced && io) {
    let started = false;
    new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) root.classList.add('is-in');
      if (entry.isIntersecting && !started) { started = true; setPlaying(true); }
      else if (!entry.isIntersecting && playing) clearTimeout(timer);
      else if (entry.isIntersecting && playing) schedule();
    }), {threshold: 0.35}).observe(root);
  } else root.classList.add('is-in');
})();

// "In production" strip: reveal once in view
(() => {
  const live = document.querySelector('.mg-live');
  if (!live) return;
  if (!('IntersectionObserver' in window)) { live.classList.add('is-in'); return; }
  const io = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { live.classList.add('is-in'); io.disconnect(); } }), {threshold: 0.2});
  io.observe(live);
})();
