/* A hand-held photo deck: frame-paced dragging, a short deal, then a damped spring. */
(() => {
  const deck = document.querySelector('.gallery');
  if (!deck) return;
  const cards = [...deck.querySelectorAll('.gallery-card')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const announcement = deck.querySelector('.gallery-announcement');
  let order = [...cards], drag = null, busy = false, paintFrame = 0;
  let generation = 0;
  const animations = new Map();
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  function layout() {
    order.forEach((card, i) => {
      card.dataset.slot = i;
      card.style.zIndex = i + 1;
    });
  }
  function stop(card) {
    animations.get(card)?.cancel();
    animations.delete(card);
  }
  function position(card, x, y, angle) {
    card.style.translate = x + 'px ' + y + 'px';
    card.style.rotate = angle + 'deg';
  }
  async function animate(card, frames, duration, easing = 'linear') {
    stop(card);
    if (reduced.matches) return;
    const animation = card.animate(frames, { duration, easing, fill: 'forwards' });
    animations.set(card, animation);
    try { await animation.finished; } catch { /* Interrupted by the next gesture. */ }
    if (animations.get(card) === animation) {
      const last = frames[frames.length - 1];
      card.style.translate = last.translate;
      card.style.rotate = last.rotate;
      animations.delete(card);
      animation.cancel();
    }
  }
  function spring(card, x, y, angle = 0) {
    if (reduced.matches) { position(card, 0, 0, 0); return Promise.resolve(); }
    const frames = [];
    // Sample a critically-near-damped physical spring, rather than an ease with a snap.
    const frequency = 17, damping = .78;
    const damped = frequency * Math.sqrt(1 - damping * damping);
    for (let i = 0; i <= 48; i++) {
      const t = i / 48 * .68;
      const remaining = Math.exp(-damping * frequency * t) *
        (Math.cos(damped * t) + damping * frequency / damped * Math.sin(damped * t));
      frames.push({translate: (x * remaining) + 'px ' + (y * remaining) + 'px', rotate: (angle * remaining) + 'deg', offset:i / 48});
    }
    frames[48] = {translate:'0px 0px', rotate:'0deg', offset:1};
    return animate(card, frames, 680);
  }
  function reorder(card) {
    const top = order[order.length - 1] === card;
    order = order.filter(item => item !== card);
    if (top) order.unshift(card); else order.push(card);
    layout();
    announcement.textContent = 'Photo ' + (cards.indexOf(order[order.length - 1]) + 1) + ' is at the front.';
  }
  async function shuffle(card, x = 0, y = 0, angle = 0) {
    if (busy) return;
    busy = true;
    const token = ++generation;
    const wasTop = order[order.length - 1] === card;
    if (wasTop && !reduced.matches) {
      card.style.zIndex = 5;
      // Keep the photo above the pack until it has cleared the next photograph.
      const scale = deck.getBoundingClientRect().width / deck.offsetWidth;
      const direction = Math.abs(x) > 5 ? Math.sign(x) : -1;
      const outX = direction * Math.max(Math.abs(x) + 36, card.getBoundingClientRect().width / scale + 28);
      const outY = y - 18;
      const outAngle = direction * 9;
      await animate(card, [
        {translate:x + 'px ' + y + 'px', rotate:angle + 'deg'},
        {translate:outX + 'px ' + outY + 'px', rotate:outAngle + 'deg'}
      ], Math.abs(x) > 5 ? 140 : 220, 'cubic-bezier(.2,.65,.3,1)');
      if (token !== generation) return;
      reorder(card);
      busy = false;
      await spring(card, outX, outY, outAngle);
    } else {
      reorder(card);
      await spring(card, x, y, angle);
    }
    if (token === generation) busy = false;
  }
  function paint() {
    paintFrame = 0;
    if (drag?.moved) position(drag.card, drag.x, drag.y, drag.angle);
  }
  function release(event, cancelled = false) {
    if (!drag || (event && event.pointerId !== drag.id)) return;
    cancelAnimationFrame(paintFrame); paintFrame = 0;
    const active = drag;
    drag = null;
    active.card.classList.remove('is-dragging');
    document.body.classList.remove('gallery-dragging');
    if (active.card.hasPointerCapture(active.id)) active.card.releasePointerCapture(active.id);
    position(active.card, active.x, active.y, active.angle);
    const distance = Math.abs(active.dx);
    if (!cancelled && (!active.moved || distance > 52 || (active.type !== 'touch' && Math.abs(active.dy) > 65))) {
      shuffle(active.card, active.x, active.y, active.angle);
    } else {
      layout();
      spring(active.card, active.x, active.y, active.angle);
    }
  }
  cards.forEach(card => {
    card.addEventListener('dragstart', e => e.preventDefault());
    card.addEventListener('pointerdown', e => {
      if (!e.isPrimary || e.button !== 0 || drag || busy) return;
      const visual = getComputedStyle(card);
      const coordinates = visual.translate.split(/\s+/).map(parseFloat);
      const baseX = Number.isFinite(coordinates[0]) ? coordinates[0] : 0;
      const baseY = Number.isFinite(coordinates[1]) ? coordinates[1] : 0;
      const baseAngle = parseFloat(visual.rotate) || 0;
      stop(card);
      position(card, baseX, baseY, baseAngle);
      drag = {baseX, baseY, baseAngle, card, id:e.pointerId, startX:e.clientX, startY:e.clientY, x:baseX, y:baseY, dx:0, dy:0, angle:baseAngle,
        scale:deck.getBoundingClientRect().width / deck.offsetWidth, type:e.pointerType, moved:false};
      card.setPointerCapture(e.pointerId);
    });
    card.addEventListener('pointermove', e => {
      if (!drag || drag.id !== e.pointerId) return;
      const dx = e.clientX - drag.startX, dy = e.clientY - drag.startY;
      if (drag.type === 'touch' && !drag.moved && Math.abs(dy) > 8 && Math.abs(dy) > Math.abs(dx)) {
        release(e, true); return;
      }
      if (!drag.moved && Math.hypot(dx, dy) < 4) return;
      drag.moved = true;
      drag.dx = dx; drag.dy = dy;
      // Soft resistance near the edges, with no sudden hard stop.
      const resist = (value, limit) => Math.abs(value) <= limit ? value : Math.sign(value) * (limit + (Math.abs(value) - limit) * .18);
      drag.x = drag.baseX + resist(dx, 210) / drag.scale;
      drag.y = drag.baseY + resist(dy, 140) / drag.scale;
      drag.angle = reduced.matches ? 0 : clamp(drag.baseAngle + dx * .035, -9, 9);
      card.classList.add('is-dragging');
      document.body.classList.add('gallery-dragging');
      card.style.zIndex = 5;
      if (!paintFrame) paintFrame = requestAnimationFrame(paint);
    });
    card.addEventListener('pointerup', release);
    card.addEventListener('pointercancel', e => release(e, true));
    card.addEventListener('lostpointercapture', e => release(e, true));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (!drag) shuffle(card); }
      if (e.key === 'Escape') release(null, true);
    });
    card.addEventListener('click', e => e.stopPropagation());
  });
  function reset() {
    release(null, true);
    generation++; busy = false;
    cards.forEach(card => { stop(card); position(card, 0, 0, 0); });
    layout();
  }
  window.addEventListener('blur', reset);
  window.addEventListener('resize', reset);
  document.addEventListener('visibilitychange', () => { if (document.hidden) reset(); });
  reduced.addEventListener('change', reset);
  layout();
})();
