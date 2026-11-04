(() => {
  const root = document.querySelector('[data-prototype-gallery]');
  if (!root) return;
  const t = (copy, values = {}) => window.t ? window.t(copy, values) : copy;
  const tabs = [...root.querySelectorAll('[data-prototype-tab]')];
  const panel = root.querySelector('[data-prototype-screen]');
  const heading = root.querySelector('[data-prototype-heading]');
  const description = root.querySelector('[data-prototype-description]');
  const status = root.querySelector('[data-prototype-status]');
  const count = root.querySelector('[data-prototype-count]');
  const dots = root.querySelector('[data-prototype-dots]');
  const previous = root.querySelector('[data-prototype-prev]');
  const next = root.querySelector('[data-prototype-next]');
  const state = { active: 'tracker', index: 0, ftbQuestion: 0, ftbChoice: '', chatQuestion: '', chatAnswer: '', supportRoute: false };

  const shell = (title, content, kicker = 'Home') => `
    <div class="mg-phone-screen">
      <div class="mg-phone-statusbar"><span>9:41</span><span aria-hidden="true">● ● ▰</span></div>
      <div class="mg-phone-topbar"><button type="button" data-phone-back aria-label="${t('Back to previous screen')}">‹</button><strong>${t(title)}</strong><span></span></div>
      <div class="mg-phone-kicker">${t(kicker)}</div>
      ${content}
    </div>`;

  const renderTracker = () => {
    const timeline = `<section class="mg-phone-card"><span class="mg-phone-pill">● ${t('In progress')}</span><h5>${t('Your application is moving forward')}</h5><p>${t('Your adviser has sent your application to the lender. We’ll show the next update here.')}</p><div class="mg-phone-progress"><span></span></div><p>${t('Next update expected soon')}</p><ul class="mg-phone-milestones"><li><i>✓</i><span>${t('Fact-find complete')}</span><small>${t('Done')}</small></li><li><i>✓</i><span>${t('Recommendation reviewed')}</span><small>${t('Done')}</small></li><li class="is-current"><i>•</i><span>${t('Application submitted')}</span><small>${t('Now')}</small></li></ul></section><div class="mg-phone-adviser"><span class="mg-phone-avatar">A</span><span>${t('Your mortgage adviser')}<small>${t('Ask a question about your application')}</small></span><button type="button" data-go-chat>${t('Chat')}</button></div><button class="mg-phone-secondary" type="button" data-go-recommendation>${t('Review recommendation')}</button>`;
    const detail = `<section class="mg-phone-card"><span class="mg-phone-pill">● ${t('Your timeline')}</span><h5>${t('A clear view of the steps ahead')}</h5><p>${t('We’ll keep your progress up to date as your adviser works with the lender.')}</p><ul class="mg-phone-milestones"><li><i>✓</i><span>${t('Tell us about your mortgage')}</span><small>${t('Complete')}</small></li><li><i>✓</i><span>${t('Review your recommendation')}</span><small>${t('Complete')}</small></li><li class="is-current"><i>•</i><span>${t('Application with the lender')}</span><small>${t('In progress')}</small></li><li><i>4</i><span>${t('Receive the lender’s decision')}</span><small>${t('Next')}</small></li></ul></section><button class="mg-phone-cta" type="button" data-phone-prev>${t('Back to progress')}</button>`;
    return state.index === 0 ? shell('Mortgage progress', timeline) : shell('Mortgage progress', detail);
  };

  const renderRecommendation = () => {
    if (state.index === 0) {
      const card = `<section class="mg-phone-card"><span class="mg-phone-pill">● ${t('Ready to review')}</span><div style="height:34px"></div><h4>${t('Your recommendation is ready')}</h4><p>${t('Your adviser has found an option for you. Review the details and ask questions before deciding.')}</p><div class="mg-phone-progress"><span style="width:72%;background:#e69b38"></span></div><button class="mg-phone-cta" type="button" data-proto-next>${t('Review recommendation')}</button></section><div class="mg-phone-adviser"><span class="mg-phone-avatar">A</span><span>${t('Your mortgage adviser')}<small>${t('Here to help you decide')}</small></span><button type="button" data-go-chat>${t('Chat')}</button></div>`;
      return shell('Mortgage', card);
    }
    const detail = `<section class="mg-phone-card"><span class="mg-phone-pill">${t('Illustrative example')}</span><h4>${t('Your recommended option')}</h4><p>${t('A summary of the key terms, with the full recommendation available to read.')}</p><div class="mg-phone-summary"><div><strong>${t('Fixed')}</strong><small>${t('Rate type')}</small></div><div><strong>${t('2 years')}</strong><small>${t('Initial period')}</small></div><div><strong>${t('No fee')}</strong><small>${t('Product fee')}</small></div></div><div class="mg-phone-option"><span>${t('Monthly payment')}</span><strong>${t('See full details')}</strong></div><div class="mg-phone-option"><span>${t('Early repayment charge')}</span><strong>${t('View terms')}</strong></div><p>${t('This concept uses sample content. Your adviser would explain how each term applies to you.')}</p><button class="mg-phone-cta" type="button" data-go-chat>${t('Ask my adviser')}</button><button class="mg-phone-secondary" type="button" data-proto-prev>${t('Back to recommendation')}</button></section>`;
    return shell('Recommendation details', detail);
  };

  const renderChat = () => {
    const response = state.chatQuestion ? `<div class="mg-chat-bubble is-customer">${t(state.chatQuestion)}</div><div class="mg-chat-bubble is-adviser">${t(state.chatAnswer)}</div>` : `<div class="mg-chat-bubble is-adviser">${t('Hi, I’m your mortgage adviser. What can I help you with today?')}</div>`;
    const choices = state.supportRoute
      ? `<div class="mg-phone-card"><h5>${t('You need bank support')}</h5><p>${t('Mortgage advisers can help with your home loan. For account, card or payment questions, continue to the bank support team.')}</p><button class="mg-phone-cta" type="button" data-support-reset>${t('Return to mortgage chat')}</button></div>`
      : `<div class="mg-chat-choices"><button type="button" data-chat-question="When will my recommendation be ready?">${t('When will my recommendation be ready?')}</button><button type="button" data-chat-question="What documents will I need?">${t('What documents will I need?')}</button><button type="button" data-support-route>${t('I have a bank account question')}</button></div>`;
    return shell(state.supportRoute ? 'Bank support' : 'Mortgage chat', `<div class="mg-chat-thread">${response}</div>${choices}`);
  };

  const renderFtb = () => {
    if (state.ftbQuestion > 1) {
      const choice = state.ftbChoice || 'Still exploring';
      return shell('Your starting point', `<section class="mg-phone-card"><span class="mg-phone-pill">${t('Your journey')}</span><h4>${t('Let’s make the next step clearer')}</h4><p>${t('We’ll tailor guidance to your stage: {stage}. This concept starts with practical prompts before the mortgage advice journey.', {stage:t(choice)})}</p><ul class="mg-phone-milestones"><li class="is-current"><i>1</i><span>${t('Understand your budget')}</span><small>${t('Next')}</small></li><li><i>2</i><span>${t('Prepare for advice')}</span><small>${t('Later')}</small></li><li><i>3</i><span>${t('Track your home purchase')}</span><small>${t('Later')}</small></li></ul><button class="mg-phone-secondary" type="button" data-ftb-reset>${t('Change my answers')}</button></section>`);
    }
    const questions = state.ftbQuestion === 0
      ? {title:'About your situation',question:'Where are you living now?',options:['Renting','Living with family','Tied to a lease agreement']}
      : {title:'Your home-buying stage',question:'Where are you in your home-buying journey?',options:['I have an offer accepted','I’ve found a property','I’m still exploring']};
    const selected = state.ftbChoice;
    const form = `<section class="mg-phone-card"><h5>${t(questions.question)}</h5>${questions.options.map((option,i)=>`<label class="mg-phone-choice"><input type="radio" name="ftb-answer" value="${t(option)}" ${selected===option?'checked':''}><span>${t(option)}</span></label>`).join('')}</section><div class="mg-phone-stepper"><button type="button" data-ftb-next ${selected?'':'disabled'}>${t(state.ftbQuestion===0?'Continue':'See my next steps')}</button></div>`;
    return shell(questions.title, form);
  };

  const prototypes = {
    tracker: {status:'Implementation in progress when I left',heading:'Know what happens next',description:'The next tracker iteration turns brokerage updates into clearer milestones, with a useful action and a route back to the adviser.',steps:[renderTracker,renderTracker]},
    recommendation: {status:'Design exploration',heading:'Make a complex recommendation easier to act on',description:'Bring the adviser’s recommended option into the app, then give customers a clear route to review the terms and ask for help.',steps:[renderRecommendation,renderRecommendation]},
    chat: {status:'Implementation in progress when I left',heading:'Put the right human in reach',description:'Mortgage advice and bank support sit close together. Clear context helps customers reach the right team and recover quickly if they choose the wrong route.',steps:[renderChat]},
    ftb: {status:'Strategy in progress when I left',heading:'Start with the buyer’s stage',description:'An early fact-find concept adapts the next step to the buyer’s situation and readiness, rather than assuming everyone is at the same point.',steps:[renderFtb,renderFtb,renderFtb]}
  };

  const render = () => {
    const current = prototypes[state.active];
    const total = current.steps.length;
    const index = Math.max(0, Math.min(state.index, total - 1));
    state.index = index;
    root.querySelector('#prototype-panel').setAttribute('aria-labelledby', `tab-${state.active}`);
    tabs.forEach(tab => tab.setAttribute('aria-selected', String(tab.dataset.prototypeTab === state.active)));
    status.textContent = t(current.status);
    heading.textContent = t(current.heading);
    description.textContent = t(current.description);
    count.textContent = t('Screen {n} of {total}', {n:index + 1, total});
    previous.disabled = index === 0;
    next.disabled = index === total - 1;
    previous.hidden = next.hidden = dots.hidden = state.active === 'ftb';
    panel.innerHTML = current.steps[index]();
    dots.innerHTML = current.steps.map((_, i) => `<button type="button" aria-label="${t('Go to screen {n}', {n:i+1})}" aria-current="${i===index}" data-prototype-dot="${i}"></button>`).join('');
  };

  const setPrototype = (name, screen = 0) => {
    state.active = name;
    state.index = screen;
    if (name === 'chat') {state.chatQuestion = ''; state.chatAnswer = ''; state.supportRoute = false;}
    render();
  };
  const go = delta => {state.index = Math.max(0, Math.min(prototypes[state.active].steps.length - 1, state.index + delta));render();};

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => setPrototype(tab.dataset.prototypeTab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (i + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
      tabs[nextIndex].focus();
      tabs[nextIndex].click();
    });
  });
  previous.addEventListener('click', () => go(-1));
  next.addEventListener('click', () => go(1));
  dots.addEventListener('click', event => {const dot=event.target.closest('[data-prototype-dot]');if(dot){state.index=Number(dot.dataset.prototypeDot);render();}});

  panel.addEventListener('click', event => {
    if (event.target.closest('[data-proto-next]')) return go(1);
    if (event.target.closest('[data-proto-prev],[data-phone-back]')) return go(-1);
    if (event.target.closest('[data-go-chat]')) return setPrototype('chat');
    if (event.target.closest('[data-go-recommendation]')) return setPrototype('recommendation');
    const question = event.target.closest('[data-chat-question]');
    if (question) {
      state.chatQuestion = question.dataset.chatQuestion;
      state.chatAnswer = /^(When|¿Cuándo)/.test(state.chatQuestion) ? 'Your adviser will update your timeline when the recommendation is ready.' : 'Your adviser will confirm the documents for your circumstances here.';
      return render();
    }
    if (event.target.closest('[data-support-route]')) {state.supportRoute=true;return render();}
    if (event.target.closest('[data-support-reset]')) {state.supportRoute=false;state.chatQuestion='';state.chatAnswer='';return render();}
    if (event.target.closest('[data-ftb-reset]')) {state.ftbQuestion=0;state.ftbChoice='';state.index=0;return render();}
    if (event.target.closest('[data-ftb-next]')) {
      const selected = panel.querySelector('input[name="ftb-answer"]:checked');
      if (!selected) return;
      state.ftbChoice = selected.value;
      state.ftbQuestion += 1;
      state.index = state.ftbQuestion;
      return render();
    }
  });
  panel.addEventListener('change', event => {
    if (event.target.matches('input[name="ftb-answer"]')) {
      state.ftbChoice = event.target.value;
      const continueButton = panel.querySelector('[data-ftb-next]');
      if (continueButton) continueButton.disabled = false;
    }
  });

  root.querySelectorAll('[data-audience]').forEach(button => button.addEventListener('click', () => {
    const connected = button.dataset.audience === 'connected';
    root.querySelectorAll('[data-audience]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('is-selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    root.querySelector('[data-audience-outcome]').textContent = t(connected
      ? 'Prioritise connected customers and keep improving their in-app journey.'
      : 'Keep the broader Homeownership open-market route paused while the connected journey has the stronger conversion.');
  }));
  render();
})();
