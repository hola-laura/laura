(() => {
 document.querySelectorAll('[data-comparison]').forEach(root => {
  const screen=root.querySelector('[data-compare-screen]');
  const range=root.querySelector('[data-compare-range]');
  const buttons=[...root.querySelectorAll('[data-compare-value]')];
  const update=value=>{
   const percent=Math.max(0,Math.min(100,Number(value)));
   screen.style.setProperty('--split',percent+'%');
   range.value=String(percent);
   range.setAttribute('aria-valuetext',t('{a}% legacy and {b}% current',{a:percent,b:100-percent}));
   buttons.forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.compareValue)===percent)));
  };
  range.addEventListener('input',()=>update(range.value));
  range.addEventListener('pointerdown',()=>screen.classList.add('is-dragging'));
  ['pointerup','pointercancel','blur'].forEach(type=>range.addEventListener(type,()=>screen.classList.remove('is-dragging')));
  buttons.forEach(button=>button.addEventListener('click',()=>update(button.dataset.compareValue)));
  update(range.value);
 });
 document.querySelectorAll('[data-field-states]').forEach(root=>{
  const field=root.querySelector('input');
  const message=root.querySelector('.rld-field-message');
  const buttons=[...root.querySelectorAll('[data-field-state]')];
  buttons.forEach(button=>button.addEventListener('click',()=>{
   const state=button.dataset.fieldState;
   buttons.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
   field.classList.toggle('is-focus',state==='focus');
   field.classList.toggle('is-error',state==='error');
   field.setAttribute('aria-invalid',String(state==='error'));
   field.value=state==='error'?'':'Clinical handover consistency';
   field.placeholder='Enter a risk title';
   message.textContent=state==='error'?t('Enter a risk title before saving.'):state==='focus'?t('A visible focus state keeps the active field clear.'):t('Clear labels and predictable feedback.');
  }));
 });
 const iconRoot=document.querySelector('.rld-iconwall');
 if(iconRoot){
  const media=iconRoot.querySelector('[data-icon-media]');
  const icons=media.querySelector('.rld-icon-sheet');
  const ui=media.querySelector('.rld-interface-sheet');
  const caption=iconRoot.querySelector('.rld-media-caption');
  const buttons=[...iconRoot.querySelectorAll('[data-icon-view]')];
  buttons.forEach(button=>button.addEventListener('click',()=>{
   const showIcons=button.dataset.iconView==='icons';
   buttons.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
   icons.hidden=!showIcons;ui.hidden=showIcons;
   caption.textContent=showIcons?t('Part of the original clinical icon library.'):t('Original reporting and template-configuration designs.');
  }));
 }
})();
