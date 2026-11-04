/* Flex case study interactions. Every piece works without motion and with a keyboard. */
(() => {
  const es = window.I18n && I18n.lang === 'es';
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* Hero wall: duplicate each column so the loop has no seam. */
  $$('.fx-wall-col').forEach(col => {
    [...col.children].forEach(phone => col.append(phone.cloneNode(true)));
  });
  const hero = $('.fx-hero'), pause = $('.fx-pause');
  if (pause) pause.addEventListener('click', () => {
    const paused = hero.classList.toggle('is-paused');
    pause.textContent = paused ? (es ? 'Reanudar' : 'Play') : (es ? 'Pausar' : 'Pause');
    pause.setAttribute('aria-pressed', String(paused));
  });

  /* 65 and 9: the bars fill once, when they reach the screen. */
  const bars = $('.fx-bars');
  if (bars && 'IntersectionObserver' in window && !calm) {
    bars.classList.add('is-waiting');
    const seen = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { bars.classList.remove('is-waiting'); seen.disconnect(); }
    }, { threshold: .6 });
    seen.observe(bars);
  }

  /* Before and after comparison. */
  const compare = $('.fx-compare input');
  if (compare) {
    const stage = compare.parentElement;
    let touched = false;
    const set = v => { compare.value = v; stage.style.setProperty('--pos', v + '%'); };
    compare.addEventListener('input', () => { touched = true; set(compare.value); });
    compare.addEventListener('pointerdown', () => { touched = true; });
    /* One short sweep shows it can be dragged, and stops the moment anyone touches it. */
    if ('IntersectionObserver' in window && !calm) {
      const hint = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        hint.disconnect();
        const start = performance.now();
        const step = now => {
          if (touched) return;
          const t = Math.min(1, (now - start) / 1600);
          set(Math.round(50 + Math.sin(t * Math.PI * 2) * 22 * (1 - t * .3)));
          if (t < 1) requestAnimationFrame(step); else set(50);
        };
        setTimeout(() => requestAnimationFrame(step), 500);
      }, { threshold: .6 });
      hint.observe(stage);
    }
  }

  /* Purchases collapse into one account as you scroll. */
  const collapse = $('.fx-collapse'), stage = $('.fx-stage');
  if (collapse) {
    const steps = $$('.fx-collapse-step', collapse);
    const rows = $$('.fx-row', collapse);
    rows.forEach((row, i) => row.style.setProperty('--d', 150 + (rows.length / 2 - i) * 46));
    const clamp = n => Math.min(1, Math.max(0, n));
    const paint = () => {
      const box = collapse.getBoundingClientRect();
      const span = box.height - innerHeight;
      const t = calm ? 1 : clamp(-box.top / (span || 1));
      stage.style.setProperty('--p', clamp((t - .18) / .42).toFixed(3));
      stage.style.setProperty('--q', clamp((t - .42) / .26).toFixed(3));
      const index = t < .5 ? 0 : 1;
      steps.forEach((step, i) => step.classList.toggle('is-on', calm || i === index));
    };
    let ticking = false;
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; paint(); }); } }, { passive: true });
    addEventListener('resize', paint);
    paint();
  }

  /* Research map: each note points to the part of the screen it shaped. */
  const map = $('.fx-map');
  if (map) {
    const screen = $('.fx-map-screen', map), track = $('.fx-map-track', map), hit = $('.fx-map-hit', map), image = $('img', track);
    const notes = $$('.fx-map-note', map);
    const select = note => {
      notes.forEach(item => item.setAttribute('aria-pressed', String(item === note)));
      const [top, height] = note.dataset.zone.split(',').map(Number);
      const full = image.getBoundingClientRect().height;
      if (!full) return;
      hit.style.top = top * 100 + '%';
      hit.style.height = height * 100 + '%';
      hit.classList.remove('is-pop'); void hit.offsetWidth; hit.classList.add('is-pop');
      const view = screen.clientHeight;
      const y = Math.min(Math.max(0, top * full + height * full / 2 - view / 2), full - view);
      track.style.transform = `translateY(${-y}px)`;
    };
    notes.forEach(note => {
      note.addEventListener('click', () => select(note));
      note.addEventListener('mouseenter', () => { if (matchMedia('(hover:hover)').matches) select(note); });
      note.addEventListener('focus', () => select(note));
    });
    const start = () => select(notes.find(n => n.dataset.start !== undefined) || notes[0]);
    image.complete ? start() : image.addEventListener('load', start);
    addEventListener('resize', () => select(notes.find(n => n.getAttribute('aria-pressed') === 'true') || notes[0]));
  }

  /* Monthly payment: illustrative numbers, simple interest on a falling balance. */
  const sim = $('.fx-sim');
  if (sim) {
    const BALANCE = 500, RATE = .29 / 12, BASE = 90;
    const input = $('input', sim), amount = $('[data-amount]', sim), tag = $('[data-tag]', sim), count = $('[data-months]', sim), rows = $$('[data-row]', sim);
    const MONTHS = es ? ['30 mayo', '30 junio', '30 julio'] : ['30 May', '30 June', '30 July'];
    const plan = pay => {
      let left = BALANCE, interest = 0; const list = [];
      while (left > .005 && list.length < 120) {
        const charge = left * RATE; interest += charge;
        const paid = Math.min(pay, left + charge);
        left = left + charge - paid; list.push(paid);
      }
      return { list, interest };
    };
    const base = plan(BASE);
    const money = n => n.toFixed(2).replace('.', es ? ',' : '.');
    const update = () => {
      const pay = +input.value, now = plan(pay), diff = base.interest - now.interest;
      amount.textContent = pay.toFixed(2).replace('.', es ? ',' : '.');
      input.setAttribute('aria-valuetext', '£' + pay);
      count.textContent = now.list.length;
      rows.forEach((row, i) => {
        const value = now.list[i];
        row.children[0].textContent = MONTHS[i];
        row.children[1].textContent = value === undefined ? '—' : '£' + money(value);
      });
      if (Math.abs(diff) < .01) { tag.dataset.tone = ''; tag.textContent = es ? 'Sin cambios en los intereses' : 'No changes to interest'; }
      else if (diff > 0) { tag.dataset.tone = 'good'; tag.textContent = (es ? 'Ahorras £' : 'Saves £') + money(diff) + (es ? ' de intereses' : ' interest'); }
      else { tag.dataset.tone = 'bad'; tag.textContent = (es ? 'Añade £' : 'Adds £') + money(-diff) + (es ? ' de intereses' : ' interest'); }
      if (tag.dataset.last !== tag.dataset.tone) { tag.dataset.last = tag.dataset.tone; tag.classList.remove('is-pop'); void tag.offsetWidth; tag.classList.add('is-pop'); }
    };
    if (es) { $('h3', sim).textContent = 'Pago de mayo'; $('.fx-sim-up span', sim).textContent = 'Próximos pagos'; }
    input.addEventListener('input', update);
    update();
  }

  /* Numbers count up once when they arrive. The real figure is in the HTML, so nothing depends on this. */
  if ('IntersectionObserver' in window && !calm) {
    const count = el => {
      const text = el.textContent, match = text.match(/^(\D*)(\d+)([.,]\d+)?(.*)$/);
      if (!match) return;
      const [, pre, whole, dec = '', post] = match;
      const places = Math.max(0, dec.length - 1), sep = dec[0] || '', target = parseFloat(whole + (dec ? '.' + dec.slice(1) : ''));
      const start = performance.now();
      const tick = now => {
        const t = Math.min(1, (now - start) / 800), value = target * (1 - Math.pow(1 - t, 3));
        el.textContent = t < 1 ? pre + value.toFixed(places).replace('.', sep || '.') + post : text;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const numbers = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { numbers.unobserve(entry.target); count(entry.target); }
    }), { threshold: .6 });
    $$('.fx-big strong, .fx-bars strong, .fx-results strong').forEach(el => numbers.observe(el));
  }

  /* Tap-through prototypes. Inactive layers leave the tab order. */
  const syncFocus = mini => {
    const step = mini.dataset.step || 'start';
    $$('.fx-mini-view button', mini).forEach(b => { b.tabIndex = step === 'start' ? 0 : -1; });
    $$('.fx-mini-sheet button', mini).forEach(b => { b.tabIndex = step === 'sheet' ? 0 : -1; });
    $$('.fx-mini-done button', mini).forEach(b => { b.tabIndex = step === 'done' ? 0 : -1; });
    const sheet = $('.fx-mini-sheet', mini);
    if (sheet) sheet.setAttribute('aria-hidden', String(step !== 'sheet'));
  };
  const COLORS = ['#ff6a5c', '#37c6b0', '#f6c445', '#6d4793', '#1c8fb3'];
  $$('.fx-confetti').forEach(box => {
    for (let i = 0; i < 18; i++) {
      const bit = document.createElement('i'), angle = i / 18 * Math.PI * 2;
      bit.style.cssText = `--c:${COLORS[i % 5]};--x:${Math.round(Math.cos(angle) * (70 + i * 5 % 50))}px;--y:${Math.round(Math.sin(angle) * (90 + i * 7 % 60) + 40)}px;--r:${(i * 67) % 360}deg;--d:${i % 4 * 30}ms`;
      box.append(bit);
    }
  });
  $$('.fx-proto[data-proto=extra], .fx-proto[data-proto=plan]').forEach(proto => {
    const mini = $('.fx-mini', proto);
    const go = step => {
      mini.dataset.step = step;
      syncFocus(mini);
      const next = step === 'sheet' ? $('.fx-mini-sheet .fx-btn', mini) : step === 'done' ? $('.fx-mini-done button', mini) : step === 'start' ? $('.fx-mini-view .fx-btn', mini) : null;
      if (next && document.activeElement && mini.contains(document.activeElement)) next.focus({ preventScroll: true });
    };
    proto.addEventListener('click', event => {
      const button = event.target.closest('[data-go]');
      if (!button) return;
      const target = button.dataset.go;
      if (target === 'face') { go('face'); setTimeout(() => go('done'), calm ? 0 : 720); }
      else if (target === 'ready') go('done');
      else go(target);
    });
    const options = $$('.fx-opt', proto);
    const ready = $('.fx-mini-done img', proto);
    const pick = option => {
      options.forEach(item => { item.setAttribute('aria-checked', String(item === option)); item.tabIndex = item === option ? 0 : -1; });
      if (ready) ready.src = { choose: 'assets/flex/v2/plan-ready.webp', full: 'assets/flex/v2/plan-ready-full.webp', min: 'assets/flex/v2/plan-ready-min.webp' }[option.dataset.plan];
    };
    options.forEach((option, i) => {
      option.addEventListener('click', () => pick(option));
      option.addEventListener('keydown', event => {
        const move = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
        if (!move) return;
        event.preventDefault();
        const next = options[(i + move + options.length) % options.length];
        pick(next); next.focus();
      });
      option.tabIndex = option.getAttribute('aria-checked') === 'true' ? 0 : -1;
    });
    syncFocus(mini);
  });

  /* Money Transfers: Flex solves a real balance problem, then the real screens take over. */
  const transfer = $('[data-proto=transfer]');
  if (transfer) {
    const mini = $('.fx-mini', transfer), screens = $$('[data-screen]', mini);
    const options = $$('[data-source]', transfer), next = $('[data-go=plan]', transfer), error = $('.fx-mini-error', transfer);
    const pick = option => {
      options.forEach(item => { item.setAttribute('aria-checked', String(item === option)); item.tabIndex = item === option ? 0 : -1; });
      const flex = option.dataset.source === 'flex';
      next.disabled = !flex;
      error.classList.toggle('is-off', flex);
    };
    options.forEach((option, i) => {
      option.addEventListener('click', () => pick(option));
      option.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
        event.preventDefault();
        const other = options[1 - i]; pick(other); other.focus();
      });
    });
    options[1].tabIndex = -1;
    transfer.addEventListener('click', event => {
      const button = event.target.closest('[data-go]');
      if (!button) return;
      const step = button.dataset.go;
      screens.forEach(screen => {
        const on = screen.dataset.screen === step;
        screen.classList.toggle('is-on', on);
        screen.inert = !on;
      });
      if (step === 'start') pick(options[0]);
      const active = screens.find(screen => screen.dataset.screen === step), focus = active && $('button:not([disabled])', active);
      if (focus) focus.focus({ preventScroll: true });
    });
  }

  /* Limit: the amount carries through the pause to the confirmation. */
  const limit = $('[data-proto=limit]');
  if (limit) {
    const mini = $('.fx-mini', limit), input = $('input', limit), out = $('[data-limit]', limit), cta = $('[data-limit-cta]', limit);
    const title = $('[data-limit-title]', limit), body = $('[data-limit-body]', limit);
    const pounds = n => '£' + n.toLocaleString(es ? 'es-ES' : 'en-GB', { useGrouping: 'always' });
    const paint = () => {
      const text = pounds(+input.value);
      out.textContent = text;
      input.setAttribute('aria-valuetext', text);
      cta.textContent = (es ? 'Aumentar a ' : 'Increase limit to ') + text;
    };
    input.addEventListener('input', paint);
    limit.addEventListener('click', event => {
      const button = event.target.closest('[data-go]');
      if (!button) return;
      const step = button.dataset.go;
      if (step === 'raise') {
        title.textContent = (es ? 'Hemos aumentado tu límite a ' : 'We increased your limit to ') + pounds(+input.value);
        body.textContent = es ? 'Te avisaremos si podemos volver a aumentarlo. Puedes desactivar estas ofertas cuando quieras.' : 'We’ll let you know if we can increase your limit again in the future. You can opt out of this at any time.';
      }
      if (step === 'keep') {
        title.textContent = es ? 'Mantendrás tu límite actual' : 'You’ll keep your current limit';
        body.textContent = es ? 'Puedes pedir un límite más alto cuando quieras.' : 'You can request a higher limit at any time.';
      }
      mini.dataset.step = step === 'raise' || step === 'keep' ? 'done' : step;
      syncFocus(mini);
      if (step === 'start') { input.value = 2000; paint(); }
      const target = mini.dataset.step === 'done' ? $('.fx-mini-done button', mini) : mini.dataset.step === 'sheet' ? $('.fx-mini-sheet button', mini) : $('.fx-mini-view button', mini);
      if (target) target.focus({ preventScroll: true });
    });
    $('.fx-mini-view input', limit).tabIndex = 0;
    syncFocus(mini);
  }

  /* Drag the flow map sideways with a mouse. Touch and trackpads scroll it natively. */
  const flow = $('.fx-flow');
  if (flow) {
    let startX = 0, startLeft = 0, down = false;
    flow.addEventListener('pointerdown', event => {
      if (event.pointerType !== 'mouse') return;
      down = true; startX = event.clientX; startLeft = flow.scrollLeft;
      flow.classList.add('is-drag'); flow.setPointerCapture(event.pointerId);
    });
    flow.addEventListener('pointermove', event => { if (down) flow.scrollLeft = startLeft - (event.clientX - startX); });
    const stop = () => { down = false; flow.classList.remove('is-drag'); };
    flow.addEventListener('pointerup', stop);
    flow.addEventListener('pointercancel', stop);
    flow.addEventListener('dragstart', event => event.preventDefault());
  }
})();
