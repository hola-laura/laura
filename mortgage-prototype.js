/* mortgage-prototype.js
   Interactive mortgage prototype on the Homeownership case study: tabs switch between Figma screens, hotspots navigate between them. English and Spanish copy sit side by side through c(en, es). */
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

  const spot = (x,y,w,h,label,action) => `<button class="mg-figma-spot" type="button" style="--x:${x}%;--y:${y}%;--w:${w}%;--h:${h}%" aria-label="${esc(label)}" data-proto-action="${action}"></button>`;
  const frame = (src,alt,layers='') => `<div class="mg-phone mg-phone-figma"><img class="mg-figma-image" src="${base}${src}" alt="${esc(alt)}" loading="eager">${layers}</div>`;

  const tracker = () => frame('tracker-redacted.png',c('Figma remortgage progress screen, details anonymised','Pantalla Figma de progreso hipotecario, datos anonimizados'),
    spot(7.5,26.8,35,2.6,c('Open the original timeline','Abrir la cronología original'),'tracker-timeline')
    +spot(3.5,4.1,13,5,c('Go back','Volver'),'tracker-back'));
  const trackerTimeline = () => frame('tracker-timeline.png',c('Original Figma timeline sheet with eight remortgage stages','Hoja de cronología original de Figma con ocho etapas'),spot(4.5,27.5,14,5.2,c('Close timeline','Cerrar cronología'),'tracker'));
  const recommendationReady = () => frame('recommendation-ready-redacted.png',c('Figma needs-action screen, adviser name anonymised','Pantalla Figma con nombre del asesor anonimizado'),
    spot(7.7,66.5,84,5.5,c('Review recommendation','Revisar recomendación'),'recommendation-detail')
    +spot(69,43,23,3.5,c('See the timeline','Ver cronología'),'tracker-timeline')
    +spot(73,78.3,19,4.5,c('Open adviser chat','Abrir chat del asesor'),'chat')
    +spot(3.5,6.2,13,5.3,c('Go back','Volver'),'tracker-back'));
  const recommendationDetail = () => frame('recommendation-redacted.png',c('Figma mortgage recommendation with lender and figures anonymised','Recomendación hipotecaria Figma con entidad y cifras anonimizadas'),
    spot(3.5,4.1,13,5,c('Go back to recommendation','Volver a la recomendación'),'recommendation-ready'));
  const intercom = () => frame('intercom-redacted.png',c('Figma in-app mortgage chat with adviser anonymised','Chat hipotecario de Figma con el asesor anonimizado'),
    spot(15,30.5,80,7,c('Review mortgage recommendations','Revisar recomendaciones'),'recommendation-detail')
    +spot(3.5,5,13,5.5,c('Go back','Volver'),'chat-back'));
  const factfindReady = () => frame('factfind-ready.png',c('Original Figma fact-find preparation screen','Pantalla original de preparación del formulario de Figma'),spot(7.5,90,85,5.5,c('I’m ready','Estoy lista'),'factfind-timeline')+spot(3.5,7,13,5.2,c('Go back','Volver'),'tracker-back'));
  const factfindTimeline = () => frame(state.factfindExpanded?'factfind-timeline.png':'factfind-timeline-collapsed.png',c('Original Figma remortgage application timeline','Cronología original de la solicitud de cambio de hipoteca de Figma'),
    (state.factfindExpanded
      ? spot(19,57,33,4.5,c('Hide the three extra steps','Ocultar los tres pasos adicionales'),'factfind-collapse')
      : spot(18,50.5,34,4.5,c('Show three more steps','Mostrar tres pasos más'),'factfind-expand'))
    +spot(3.5,7,13,5.2,c('Go back to preparation','Volver a la preparación'),'factfind-ready'));

  const screens = {
    tracker:{status:['Implementation in progress when I left','En implementación cuando dejé el equipo'],heading:['Remortgage progress','Seguimiento del cambio de hipoteca'],description:['The screen and timeline sheet are the original Figma frames. Select “Learn more” inside the tracker to open the eight-step sheet.','La pantalla y la hoja de cronología son los frames originales de Figma. Pulsa «Learn more» en el tracker para abrir las ocho etapas.'],render:()=>state.view==='timeline'?trackerTimeline():tracker()},
    recommendation:{status:['Design exploration','Exploración de diseño'],heading:['Recommendation ready, then the full offer','Recomendación lista y detalle de la oferta'],description:['Follow the original Figma flow from “Needs action” to the offer details. Personal names and mortgage figures are covered.','Sigue el flujo original de Figma desde «Needs action» hasta el detalle de la oferta. Los nombres y las cifras están cubiertos.'],render:()=>state.view==='detail'?recommendationDetail():recommendationReady()},
    chat:{status:['Implementation in progress when I left','En implementación cuando dejé el equipo'],heading:['Mortgage help in the right chat','Ayuda hipotecaria en el chat adecuado'],description:['This is the original Intercom screen. Its recommendation button opens the matching offer design.','Esta es la pantalla original de Intercom. El botón de recomendación abre el diseño de la oferta.'],render:intercom},
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
  render();
})();
