/* mortgage-tracker.js
   Animated walkthrough of the remortgage progress tracker (Figma file "Status tracker V1", MVP page),
   rebuilt in HTML so it can move between states. Lender and adviser names are anonymised.
   Plays on its own once in view; clicking a stage jumps to it and pauses.
   With reduced motion it never autoplays, and every stage is still reachable. */
(() => {
  const root = document.querySelector('[data-tracker-demo]');
  if (!root) return;

  const es = window.I18n?.lang === 'es';
  const c = (en, esText) => es ? esText : en;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const A = 'assets/mortgages/tracker/';
  const notify = c('We’ll notify you if there are any updates. You’re all set for now.', 'Te avisaremos si hay novedades. Por ahora no tienes que hacer nada.');

  const stages = [
    {label: c('Fact-find', 'Formulario'), you: true, bar: 6,
      title: c('Tell us about you', 'Cuéntanos sobre ti'),
      body: c('We need some info about you and your property to give you a personalised recommendation.', 'Necesitamos algunos datos sobre ti y tu vivienda para darte una recomendación personalizada.'),
      cta: c('Start', 'Empezar')},
    {label: c('First chat', 'Primera conversación'), you: true, bar: 12,
      title: c('Chat to a mortgage expert', 'Habla con un experto hipotecario'),
      body: c('Get personalised advice from a Habito mortgage expert who’ll recommend your best deal and answer any questions.', 'Recibe asesoramiento de un experto de Habito que te recomendará la mejor oferta y resolverá tus dudas.'),
      cta: c('Chat on Habito.com', 'Chatear en Habito.com')},
    {label: c('Sourcing deals', 'Buscando ofertas'), you: false, bar: 25, eta: c('It’ll take 2 days', 'Tardará 2 días'), expert: true,
      title: c('Your adviser’s finding your best deal', 'Tu asesor está buscando tu mejor oferta'), body: notify},
    {label: c('Recommendation', 'Recomendación'), you: true, bar: 38, message: true,
      title: c('Review your mortgage recommendation', 'Revisa tu recomendación hipotecaria'),
      body: c('Your adviser found your best deal from 90+ lenders.', 'Tu asesor encontró tu mejor oferta entre más de 90 entidades.'),
      cta: c('Review', 'Revisar')},
    {label: c('Documents', 'Documentos'), you: true, bar: 50, expert: true, deal: true,
      title: c('Your adviser needs a couple of things from you', 'Tu asesor necesita un par de cosas de ti'),
      cta: c('See what’s needed', 'Ver qué falta')},
    {label: c('Checking documents', 'Revisión de documentos'), you: false, bar: 62, expert: true, deal: true,
      title: c('Your adviser is checking your answers and documents', 'Tu asesor está revisando tus respuestas y documentos'), body: notify},
    {label: c('Submitting', 'Envío de la solicitud'), you: false, bar: 75, expert: true, deal: true,
      title: c('Habito is submitting your application to your lender', 'Habito está enviando tu solicitud a tu entidad'), body: notify},
    {label: c('Lender review', 'Revisión de la entidad'), you: false, bar: 88, eta: c('It’ll take 2–4 weeks', 'Tardará de 2 a 4 semanas'), expert: true, deal: true,
      title: c('Your lender is reviewing your application', 'Tu entidad está revisando tu solicitud'), body: notify},
    {label: c('Offer', 'Oferta'), you: false, bar: 100, expert: true, deal: true,
      title: c('Great news – your mortgage deal’s approved! Your lender will finalise it', '¡Buenas noticias! Tu hipoteca está aprobada. Tu entidad la cerrará'), body: notify},
    {label: c('Complete', 'Completado'), done: true}
  ];

  const list = root.querySelector('[data-tracker-steps]');
  const screen = root.querySelector('[data-tracker-screen]');
  const toggle = root.querySelector('[data-tracker-toggle]');
  const live = root.querySelector('[data-tracker-live]');

  list.innerHTML = stages.map((stage, i) => `<li><button type="button" data-step="${i}"><span class="mg-tk-num">${String(i + 1).padStart(2, '0')}</span><span class="mg-tk-name">${stage.label}</span>${stage.done ? `<span class="mg-tk-who is-done">${c('Done', 'Listo')}</span>` : `<span class="mg-tk-who ${stage.you ? 'is-you' : 'is-us'}">${stage.you ? c('You', 'Tú') : 'Habito'}</span>`}</button></li>`).join('');
  const buttons = [...list.querySelectorAll('button')];

  screen.innerHTML = `
    <div class="tk-top"><span class="tk-glass"><img src="${A}back.svg" alt="" width="28" height="28"></span><span class="tk-glass"><img src="${A}bell.svg" alt="" width="28" height="28"></span></div>
    <div class="tk-body">
      <div class="tk-art"><img src="${A}${reduced ? 'hourglass-still.png' : 'hourglass.webp'}" alt="" width="366" height="273"></div>
      <div class="tk-card tk-message" data-tk="message"><span class="tk-logo"><img src="${A}habito.svg" alt="" width="32" height="32"></span><span class="tk-text"><b class="tk-accent">${c('New message', 'Nuevo mensaje')}</b><small>${c('Your mortgage expert', 'Tu experto hipotecario')}</small></span><span class="tk-pill"><img src="${A}chat.svg" alt="" width="20" height="20">${c('Reply', 'Responder')}</span></div>
      <p class="tk-foot" data-tk="message-foot">${c('Chatting on Habito.com', 'Chateando en Habito.com')}</p>
      <div class="tk-card tk-status">
        <div class="tk-head"><b data-tk="state"></b><span class="tk-accent">${c('See timeline', 'Ver cronología')}</span></div>
        <div class="tk-progress"><div class="tk-track"><i data-tk="bar"></i></div><p data-tk="eta"></p></div>
        <div class="tk-copy" data-tk="copy"></div>
      </div>
      <div class="tk-card tk-expert" data-tk="expert"><span class="tk-logo"><img src="${A}habito.svg" alt="" width="32" height="32"></span><span class="tk-text">${c('Your mortgage expert', 'Tu experto hipotecario')}<small>${c('Ask any questions you have', 'Pregunta lo que necesites')}</small></span><span class="tk-pill"><img src="${A}chat.svg" alt="" width="20" height="20">${c('Chat', 'Chat')}</span></div>
      <p class="tk-foot" data-tk="expert-foot">${c('Chatting on Habito.com', 'Chateando en Habito.com')}</p>
      <div class="tk-card tk-deal" data-tk="deal"><div class="tk-head"><b>${c('Your chosen deal', 'Tu oferta elegida')}<em> • ${c('2 years fixed', 'Fijo a 2 años')}</em></b></div>
        <div class="tk-row"><span class="tk-bank" aria-hidden="true"><svg viewBox="0 0 20 20" width="18" height="18"><path d="M10 2 2 6v2h16V6l-8-4ZM4 9h2v6H4V9Zm5 0h2v6H9V9Zm5 0h2v6h-2V9ZM2 16h16v2H2v-2Z" fill="currentColor"/></svg></span><span class="tk-text">3.2%<small>${c('Your lender', 'Tu entidad')}</small></span><span class="tk-money"><small>£</small>240,000</span></div>
        <div class="tk-row"><span class="tk-icon tk-blue"><img src="${A}info.svg" alt="" width="24" height="24"></span><span class="tk-text">${c('Your adviser will let you know if a cheaper deal becomes available', 'Tu asesor te avisará si aparece una oferta más barata')}</span></div></div>
      <div class="tk-card tk-cancel"><span class="tk-icon tk-red"><img src="${A}close.svg" alt="" width="24" height="24"></span><span class="tk-text">${c('Cancel mortgage application', 'Cancelar solicitud hipotecaria')}</span><span class="tk-chev">›</span></div>
    </div>
    <div class="tk-done" data-tk="done"><img src="${A}confetti.svg" alt="" width="143" height="120"><p>${c('Congratulations, your application is complete', 'Enhorabuena, tu solicitud está completa')}</p><span class="tk-ok">Ok</span></div>`;

  const $ = name => screen.querySelector(`[data-tk="${name}"]`);
  const copy = $('copy');
  let current = -1, timer = null, playing = false;

  function show(index) {
    const stage = stages[index];
    current = index;
    buttons.forEach((button, i) => {
      button.toggleAttribute('aria-current', i === index);
      button.classList.toggle('is-past', i < index);
    });
    screen.classList.toggle('is-done', !!stage.done);
    live.textContent = `${index + 1} / ${stages.length} · ${stage.label}`;
    if (stage.done) return;
    screen.classList.toggle('is-you', stage.you);
    $('state').textContent = stage.you ? c('Needs action', 'Requiere acción') : c('In progress', 'En curso');
    $('bar').style.width = `${stage.bar}%`;
    $('eta').textContent = stage.eta || '';
    $('eta').hidden = !stage.eta;
    copy.classList.remove('is-in');
    void copy.offsetWidth; // restart the entrance
    copy.innerHTML = `<h4>${stage.title}</h4>${stage.body ? `<p>${stage.body}</p>` : ''}${stage.cta ? `<span class="tk-cta">${stage.cta}</span>` : ''}`;
    copy.classList.add('is-in');
    ['message', 'message-foot'].forEach(name => $(name).classList.toggle('is-on', !!stage.message));
    ['expert', 'expert-foot'].forEach(name => $(name).classList.toggle('is-on', !!stage.expert));
    $('deal').classList.toggle('is-on', !!stage.deal);
  }

  const step = () => { show((current + 1) % stages.length); schedule(); };
  const schedule = () => { clearTimeout(timer); if (playing) timer = setTimeout(step, stages[current].done ? 3600 : 2600); };
  function setPlaying(value) {
    playing = value;
    toggle.setAttribute('aria-pressed', String(value));
    toggle.querySelector('span').textContent = value ? c('Pause', 'Pausar') : c('Play', 'Reproducir');
    root.classList.toggle('is-playing', value);
    schedule();
  }

  list.addEventListener('click', event => {
    const button = event.target.closest('[data-step]');
    if (!button) return;
    show(+button.dataset.step);
    setPlaying(false);
  });
  toggle.addEventListener('click', () => {
    if (!playing && stages[current].done) show(0);
    setPlaying(!playing);
  });

  // Scale the 402px-wide Figma frame to whatever width the phone has
  const fit = () => screen.style.setProperty('--tk-scale', screen.parentElement.clientWidth / 402);
  new ResizeObserver(fit).observe(screen.parentElement);
  fit();

  show(0);
  if (!reduced && 'IntersectionObserver' in window) {
    let started = false;
    new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting && !started) { started = true; setPlaying(true); }
      else if (!entry.isIntersecting && playing) { clearTimeout(timer); }
      else if (entry.isIntersecting && playing) { schedule(); }
    }), {threshold: 0.4}).observe(root);
  }
})();
