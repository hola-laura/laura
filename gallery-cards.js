/* Pointer-driven photo deck. Resting positions belong to home.css. */
(() => {
  const deck = document.querySelector('.gallery');
  if (!deck) return;
  const cards = [...deck.querySelectorAll('.gallery-card')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const announcement = deck.querySelector('.gallery-announcement');
  let order = [...cards], drag = null, settling = false, timer = 0;
  const animations = new Map();
  function layout() {
    order.forEach((card, i) => {
      card.dataset.slot = i;
      card.style.zIndex = i + 1;
    });
  }
  function stopAnimation(card) {
    animations.get(card)?.cancel();
    animations.delete(card);
  }
  function springHome(card, x, y) {
    stopAnimation(card);
    card.style.translate = '';
    if (reduced.matches || (!x && !y)) return;
    const animation = card.animate([
      { translate: x + 'px ' + y + 'px' },
      { translate: (-x * .055) + 'px ' + (-y * .055) + 'px', offset: .75 },
      { translate: '0px 0px' }
    ], { duration: 520, easing: 'cubic-bezier(.22,1,.36,1)' });
    animations.set(card, animation);
    animation.onfinish = () => animations.delete(card);
  }
  function shuffle(card, x = 0, y = 0) {
    if (settling) { springHome(card, x, y); return; }
    settling = true;
    const wasTop = order[order.length - 1] === card;
    order = order.filter(item => item !== card);
    if (wasTop) order.unshift(card);
    else order.push(card);
    layout();
    // A click gives the outgoing photo a small sideways deal.
    springHome(card, x || (wasTop ? 95 : -45), y || -12);
    announcement.textContent = 'Photo ' + (cards.indexOf(order[order.length - 1]) + 1) + ' is at the front.';
    clearTimeout(timer);
    timer = setTimeout(() => { settling = false; }, reduced.matches ? 0 : 520);
  }
  function release(event, cancelled = false) {
    if (!drag || (event && event.pointerId !== drag.id)) return;
    const active = drag;
    drag = null;
    active.card.classList.remove('is-dragging');
    document.body.classList.remove('gallery-dragging');
    if (active.card.hasPointerCapture(active.id)) active.card.releasePointerCapture(active.id);
    const dx = active.x - active.startX, dy = active.y - active.startY;
    const x = Math.max(-210, Math.min(210, dx)) / active.scale;
    const y = Math.max(-140, Math.min(140, dy)) / active.scale;
    if (!cancelled && (Math.abs(dx) > 45 || (active.type !== 'touch' && Math.abs(dy) > 45))) {
      shuffle(active.card, x, y);
    } else {
      layout();
      springHome(active.card, x, y);
    }
  }
  cards.forEach(card => {
    card.addEventListener('dragstart', e => e.preventDefault());
    card.addEventListener('pointerdown', e => {
      if (!e.isPrimary || e.button !== 0 || drag || settling) return;
      stopAnimation(card);
      const scale = deck.getBoundingClientRect().width / deck.offsetWidth;
      drag = {card, id:e.pointerId, startX:e.clientX, startY:e.clientY, x:e.clientX, y:e.clientY, scale, type:e.pointerType, moved:false};
      card.setPointerCapture(e.pointerId);
    });
    card.addEventListener('pointermove', e => {
      if (!drag || drag.id !== e.pointerId) return;
      const dx = e.clientX - drag.startX, dy = e.clientY - drag.startY;
      // Let vertical touch gestures scroll the page normally.
      if (drag.type === 'touch' && !drag.moved && Math.abs(dy) > 8 && Math.abs(dy) > Math.abs(dx)) {
        release(e, true);
        return;
      }
      drag.x = e.clientX; drag.y = e.clientY;
      if (!drag.moved && Math.hypot(dx, dy) < 5) return;
      drag.moved = true;
      card.classList.add('is-dragging');
      document.body.classList.add('gallery-dragging');
      card.style.zIndex = 5;
      // Keep the hand-held photo near its deck, including on narrow screens.
      const x = Math.max(-210, Math.min(210, dx)) / drag.scale;
      const y = Math.max(-140, Math.min(140, dy)) / drag.scale;
      card.style.translate = x + 'px ' + y + 'px';
    });
    card.addEventListener('pointerup', e => {
      if (!drag || drag.id !== e.pointerId) return;
      const tapped = !drag.moved;
      release(e);
      if (tapped) shuffle(card);
    });
    card.addEventListener('pointercancel', e => release(e, true));
    card.addEventListener('lostpointercapture', e => release(e, true));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); shuffle(card); }
      if (e.key === 'Escape') release(null, true);
    });
    // Prevent unrelated click doodles from appearing while dealing photos.
    card.addEventListener('click', e => e.stopPropagation());
  });
  window.addEventListener('blur', () => release(null, true));
  window.addEventListener('resize', () => release(null, true));
  document.addEventListener('visibilitychange', () => { if (document.hidden) release(null, true); });
  reduced.addEventListener('change', () => {
    release(null, true);
    for (const card of cards) stopAnimation(card);
  });
  layout();
})();
