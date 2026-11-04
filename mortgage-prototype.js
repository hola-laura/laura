(() => {
  const root = document.querySelector('[data-prototype-gallery]');
  if (!root) return;

  const es = () => window.I18n?.lang === 'es';
  const c = (en, esText) => es() ? esText : en;
  const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const tabs = [...root.querySelectorAll('[data-prototype-tab]')];
  const panel = root.querySelector('[data-prototype-screen]');
  const heading = root.querySelector('[data-prototype-heading]');
  const description = root.querySelector('[data-prototype-description]');
  const status = root.querySelector('[data-prototype-status]');
  const count = root.querySelector('[data-prototype-count]');
  const dots = root.querySelector('[data-prototype-dots]');
  const previous = root.querySelector('[data-prototype-prev]');
  const next = root.querySelector('[data-prototype-next]');
  const base = 'assets/mortgages/prototypes/';
  const state = {active:'tracker', view:'main', factfindExpanded:false, returnTo:'recommendation'};

  const cover = (x,y,w,h,text,bg='#f1f8f3',extra='') => `<span class="mg-figma-cover" style="--x:${x}%;--y:${y}%;--w:${w}%;--h:${h}%;--cover:${bg}" aria-label="${esc(text)}" ${extra}>${text}</span>`;
  const spot = (x,y,w,h,label,action) => `<button class="mg-figma-spot" type="button" style="--x:${x}%;--y:${y}%;--w:${w}%;--h:${h}%" aria-label="${esc(label)}" data-proto-action="${action}"></button>`;
  const frame = (src,alt,layers='') => `<div class="mg-phone mg-phone-figma"><img class="mg-figma-image" src="${base}${src}" alt="${esc(alt)}" loading="eager">${layers}</div>`;

  const tracker = () => frame('tracker.png',c('Original Figma remortgage progress screen','Pantalla original de progreso de Figma'),
    cover(19.5,42.6,23,2.5,'Example lender')
    +cover(19.5,56.7,14,2.5,'Lender')
    +`<span class="mg-figma-cover mg-figma-deal-redaction" aria-label="${c('Mortgage details anonymised','Datos hipotecarios anonimizados')}"><b>${c('Example lender','Entidad de ejemplo')}</b><small>${c('Mortgage details anonymised','Datos hipotecarios anonimizados')}</small><strong>—</strong></span>`
    +spot(7.5,26.8,35,2.6,c('Open the original timeline','Abrir la cronología original'),'tracker-timeline')
    +spot(3.5,4.1,13,5,c('Go back','Volver'),'tracker-back'));
  const trackerTimeline = () => frame('tracker-timeline.png',c('Original Figma timeline sheet with eight remortgage stages','Hoja de cronología original de Figma con ocho etapas'),' '+spot(4.5,27.5,14,5.2,c('Close timeline','Cerrar cronología'),'tracker'));
  const recommendationReady = () => frame('recommendation-ready.png',c('Original Figma screen showing a mortgage recommendation ready for review','Pantalla original de Figma con una recomendación hipotecaria lista para revisar'),
    cover(7.7,59.6,84,5.1,c('Your adviser found a deal from 90+ lenders.','Tu asesor encontró una oferta entre más de 90 entidades.'),'#fff')
    +spot(7.7,66.5,84,5.5,c('Review recommendation','Revisar recomendación'),'recommendation-detail')
    +spot(69,43,23,3.5,c('See the timeline','Ver cronología'),'tracker-timeline')
    +spot(73,78.3,19,4.5,c('Open adviser chat','Abrir chat del asesor'),'chat')
    +spot(3.5,6.2,13,5.3,c('Go back','Volver'),'tracker-back'));
  const recommendationDetail = () => frame('recommendation.png',c('Original Figma mortgage recommendation detail screen','Pantalla original de detalle de recomendación hipotecaria de Figma'),
    `<span class="mg-figma-cover mg-figma-bank-redaction" aria-label="${c('Lender logo anonymised','Logotipo de la entidad anonimizado')}">E</span>`
    +cover(23,17,29,3.1,'£—','#fff')
    +cover(23.7,20.1,43,1.9,c('Example lender · fixed term','Entidad de ejemplo · tipo fijo'),'#fff')
    +cover(8,26.4,25,1.8,'—','#fff')
    +cover(39,26.4,23,1.8,'—','#fff')
    +cover(62,38.3,26,3.4,c('Included','Incluido'),'#fff')
    +`<span class="mg-figma-cover mg-figma-adviser-redaction" aria-label="${c('Adviser name and portrait anonymised','Nombre y foto del asesor anonimizados')}"><b>H</b><span>${c('Mortgage expert','Experto hipotecario')}</span></span>`
    +spot(7.8,92.9,84,4.1,c('Continue to next step','Continuar'),'recommendation-ready')
    +spot(3.5,4.1,13,5,c('Go back to recommendation','Volver a la recomendación'),'recommendation-ready'));
  const intercom = () => frame('intercom.png',c('Original Figma in-app mortgage expert conversation','Conversación original de Figma con experto hipotecario en la app'),
    cover(31,7.1,39,2.4,c('Mortgage expert chat','Chat con experto hipotecario'),'#fff')
    +`<span class="mg-figma-cover mg-figma-chat-avatar" aria-label="${c('Expert portrait anonymised','Foto del experto anonimizada')}"></span>`
    +spot(15,30.5,80,7,c('Review mortgage recommendations','Revisar recomendaciones'),'recommendation-detail')
    +spot(3.5,5,13,5.5,c('Go back','Volver'),'chat-back'));
  const buyer = () => frame('first-buyer.png',c('Original Figma first-time buyer homeownership dashboard','Panel original de Figma para compradores de primera vivienda'),
    `<span class="mg-figma-cover mg-figma-buyer-avatar" aria-label="${c('Profile photo anonymised','Foto de perfil anonimizada')}"></span>`
    +cover(7.8,62.1,33,2.5,c('Your adviser','Tu asesor'),'#fff')
    +`<span class="mg-figma-cover mg-figma-adviser-avatar" aria-label="${c('Adviser photo anonymised','Foto del asesor anonimizada')}"></span>`
    +spot(43,38,31,14,c('Open the mortgage fact-find','Abrir el formulario hipotecario'),'factfind-ready')
    +spot(7.7,67,30,4.7,c('Ask your adviser','Preguntar al asesor'),'chat')
    +spot(3.5,5.5,13,5.3,c('Go back','Volver'),'tracker-back'));
  const factfindReady = () => frame('factfind-ready.png',c('Original Figma fact-find preparation screen','Pantalla original de preparación del formulario de Figma'),spot(7.5,90,85,5.5,c('I’m ready','Estoy lista'),'factfind-timeline')+spot(3.5,7,13,5.2,c('Go back to the buyer profile','Volver al perfil de compra'),'buyer'));
  const factfindTimeline = () => frame(state.factfindExpanded?'factfind-timeline.png':'factfind-timeline-collapsed.png',c('Original Figma remortgage application timeline','Cronología original de la solicitud de cambio de hipoteca de Figma'),
    state.factfindExpanded
      ? spot(19,57,33,4.5,c('Hide the three extra steps','Ocultar los tres pasos adicionales'),'factfind-collapse')
      : spot(18,50.5,34,4.5,c('Show three more steps','Mostrar tres pasos más'),'factfind-expand')
    +spot(3.5,7,13,5.2,c('Go back to preparation','Volver a la preparación'),'factfind-ready'));

  const screens = {
    tracker:{status:['Implementation in progress when I left','En implementación cuando dejé el equipo'],heading:['Remortgage progress','Seguimiento del cambio de hipoteca'],description:['The screen and timeline sheet are the original Figma frames. Select “Learn more” inside the tracker to open the eight-step sheet.','La pantalla y la hoja de cronología son los frames originales de Figma. Pulsa «Learn more» en el tracker para abrir las ocho etapas.'],render:()=>state.view==='timeline'?trackerTimeline():tracker()},
    recommendation:{status:['Design exploration','Exploración de diseño'],heading:['Recommendation ready, then the full offer','Recomendación lista y detalle de la oferta'],description:['Follow the original Figma flow from “Needs action” to the offer details. Personal names and mortgage figures are covered.','Sigue el flujo original de Figma desde «Needs action» hasta el detalle de la oferta. Los nombres y las cifras están cubiertos.'],render:()=>state.view==='detail'?recommendationDetail():recommendationReady()},
    chat:{status:['Implementation in progress when I left','En implementación cuando dejé el equipo'],heading:['Mortgage help in the right chat','Ayuda hipotecaria en el chat adecuado'],description:['This is the original Intercom screen. Its recommendation button opens the matching offer design.','Esta es la pantalla original de Intercom. El botón de recomendación abre el diseño de la oferta.'],render:intercom},
    ftb:{status:['Strategy in progress when I left','Estrategia en curso cuando dejé el equipo'],heading:['A homeownership dashboard for first-time buyers','Una vista de compra para quienes compran su primera vivienda'],description:['The original Home-buying vision frame: buyer profile, journey tiles, adviser support and education.','El frame original de la visión Home-buying: perfil, etapas, ayuda del asesor y guías.'],render:buyer},
    factfind:{status:['Fact-find exploration','Exploración del formulario'],heading:['Prepare before the mortgage fact-find','Prepararse para el formulario hipotecario'],description:['The original Fact-find frames show what to prepare and an expandable Habito application timeline.','Los frames originales de Fact-find muestran qué preparar y una cronología desplegable de la solicitud con Habito.'],render:()=>state.view==='timeline'?factfindTimeline():factfindReady()}
  };

  function render(){
    const current=screens[state.active];
    tabs.forEach(tab=>tab.setAttribute('aria-selected',String(tab.dataset.prototypeTab===state.active)));
    root.querySelector('#prototype-panel').setAttribute('aria-labelledby',`tab-${state.active}`);
    status.textContent=c(...current.status);heading.textContent=c(...current.heading);description.textContent=c(...current.description);
    count.textContent=c('Original Figma frame','Frame original de Figma');
    previous.hidden=next.hidden=dots.hidden=true;
    panel.innerHTML=current.render();
  }
  function setPrototype(name){state.active=name;state.view='main';state.factfindExpanded=false;render();}
  function navigate(action){
    if(action==='tracker-timeline'){state.returnTo=state.active;state.active='tracker';state.view='timeline';}
    else if(action==='tracker'){state.active='tracker';state.view='main';}
    else if(action==='tracker-back'){state.active='tracker';state.view='main';}
    else if(action==='buyer'){state.active='ftb';state.view='main';}
    else if(action==='chat-back'){state.active=state.returnTo||'recommendation';state.view='main';}
    else if(action==='recommendation-detail'){state.active='recommendation';state.view='detail';}
    else if(action==='recommendation-ready'){state.active='recommendation';state.view='main';}
    else if(action==='chat'){state.returnTo=state.active;state.active='chat';state.view='main';}
    else if(action==='factfind-ready'){state.active='factfind';state.view='main';}
    else if(action==='factfind-timeline'){state.active='factfind';state.view='timeline';state.factfindExpanded=false;}
    else if(action==='factfind-expand'){state.factfindExpanded=true;}
    else if(action==='factfind-collapse'){state.factfindExpanded=false;}
    else if(action==='cost'){state.view='cost';}
    render();
  }
  tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>setPrototype(tab.dataset.prototypeTab));
    tab.addEventListener('keydown',event=>{
      if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
      event.preventDefault();const i=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:tabs.length-1))%tabs.length;
      tabs[i].focus();tabs[i].click();
    });
  });
  panel.addEventListener('click',event=>{
    const button=event.target.closest('[data-proto-action]');if(button)return navigate(button.dataset.protoAction);
    if(event.target.classList.contains('mg-figma-cover')&&event.target.closest('.mg-figma-adviser-redaction'))return navigate('chat');
  });
  root.querySelectorAll('[data-audience]').forEach(button=>button.addEventListener('click',()=>{
    const connected=button.dataset.audience==='connected';
    root.querySelectorAll('[data-audience]').forEach(item=>{const selected=item===button;item.classList.toggle('is-selected',selected);item.setAttribute('aria-pressed',String(selected));});
    root.querySelector('[data-audience-outcome]').textContent=c(connected?'Prioritise connected customers and keep improving their in-app journey.':'Keep the broader Homeownership open-market route paused while the connected journey has the stronger conversion.',connected?'Priorizar a los clientes conectados y seguir mejorando su experiencia en la app.':'Mantener en pausa la vía abierta de Homeownership mientras la conversión sea mayor entre los clientes conectados.');
  }));
  render();
})();
