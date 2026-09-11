/* An opaque paper flower with a short, spring-driven wobble on interaction. */
(() => {
  const button = document.querySelector('.little-jelly');
  const bloom = button?.querySelector('.flower-bloom');
  if (!bloom) return;
  const petals = [...bloom.querySelectorAll('.flower-petal')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const state = { x: 0, y: 0, twist: 0, squash: 0 };
  const target = { ...state };
  const velocity = { ...state };
  let frame = 0, previous = 0, elapsed = 0, energy = 0, visible = true;

  function draw() {
    bloom.setAttribute('transform', `translate(${state.x} ${state.y}) translate(0 0) rotate(${state.twist}) scale(${1 + state.squash} ${1 - state.squash}) translate(0 0)`);
    petals.forEach((petal, index) => {
      const wave = Math.sin(elapsed * 15 - index * .85) * energy;
      petal.setAttribute('transform', `rotate(${wave * 3.2} 0 0)`);
    });
  }
  function settle() {
    cancelAnimationFrame(frame);
    frame = previous = energy = 0;
    for (const key in state) state[key] = target[key] = velocity[key] = 0;
    draw();
  }
  function tick(now) {
    frame = 0;
    if (document.hidden || !visible || reduced.matches) { settle(); return; }
    const dt = previous ? Math.min((now - previous) / 1000, .032) : 1 / 60;
    previous = now;
    elapsed += dt;
    let moving = false;
    for (const key in state) {
      velocity[key] += (target[key] - state[key]) * 120 * dt;
      velocity[key] *= Math.exp(-10 * dt);
      state[key] += velocity[key] * dt;
      if (Math.abs(target[key] - state[key]) + Math.abs(velocity[key]) > .003) moving = true;
      else { state[key] = target[key]; velocity[key] = 0; }
    }
    energy *= Math.exp(-3.8 * dt);
    if (energy < .003) energy = 0;
    draw();
    if (moving || energy) frame = requestAnimationFrame(tick);
    else previous = 0;
  }
  function start() {
    if (reduced.matches) { settle(); return; }
    if (!frame && visible && !document.hidden) frame = requestAnimationFrame(tick);
  }
  function follow(event) {
    if (event.pointerType === 'touch') return;
    const rect = button.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
    const y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
    target.x = x * 2;
    target.y = y * 2;
    target.twist = x * 7;
    target.squash = .025;
    start();
  }
  button.addEventListener('pointerenter', event => {
    if (event.pointerType === 'touch') return;
    energy = .9;
    velocity.squash = .85;
    follow(event);
  });
  button.addEventListener('pointermove', follow);
  button.addEventListener('pointerleave', () => {
    for (const key in target) target[key] = 0;
    start();
  });
  button.addEventListener('focus', () => {
    if (button.matches(':focus-visible')) { energy = .8; start(); }
  });
  button.addEventListener('blur', () => {
    if (!button.matches(':hover')) {
      for (const key in target) target[key] = 0;
      start();
    }
  });
  button.addEventListener('click', () => { energy = 1; velocity.squash = 1; start(); });
  button.addEventListener('pointercancel', settle);
  reduced.addEventListener('change', settle);
  document.addEventListener('visibilitychange', () => { if (document.hidden) settle(); });
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    if (!visible) settle();
  }).observe(button);
})();
