/* flow.js — plays a sequence of real Figma frames inside the phone, like a recorded prototype.
   flow.html?f=rec | chat | app | day1   (&bare hides the step list)
   Each beat shows one frame. `scroll` scrolls a long frame, `tap` shows where the finger goes,
   `go` is how the next frame arrives: push (from the right), pop (back), up (sheet), down (close sheet). */
(() => {
  const root = document.querySelector('[data-flow]');
  if (!root) return;
  const A = 'remortgage-presentation/assets/proto/';
  const FLOWS = {
    rec: {
      steps: ['The tracker says it’s ready', 'The recommendation', 'Why this deal, for me', 'What it really costs', 'What we ruled out', 'Every detail, before you commit', 'Accept, reject or ask', 'What happens next', 'Back in the tracker'],
      beats: [
        {img: 'rec-tracker.png', step: 0, hold: 1700, tap: [201, 625], go: 'push'},
        {img: 'rec-main.png', step: 1, hold: 2300, tap: [110, 762], go: 'up'},
        {img: 'rec-why.png', step: 2, hold: 2900, tap: [38, 98], go: 'down'},
        {img: 'rec-main.png', step: 1, hold: 500, tap: [156, 362], go: 'push'},
        {img: 'rec-cost.png', step: 3, hold: 2900, tap: [36, 84], go: 'pop'},
        {img: 'rec-main.png', step: 1, hold: 1300, scroll: 185, tap: [200, 714], go: 'push'},
        {img: 'rec-ruledout.png', step: 4, hold: 2900, scroll: 342, go: 'pop'},
        {img: 'rec-main.png', step: 1, from: 185, scroll: 185, hold: 500, tap: [200, 820], go: 'push'},
        {img: 'rec-details.png', step: 5, hold: 4300, scroll: 1214, scrollMs: 3300, tap: [201, 819], go: 'push'},
        {img: 'rec-secure.png', step: 6, hold: 2700, tap: [293, 826], go: 'push'},
        {img: 'rec-next.png', step: 7, hold: 2700, tap: [202, 820], go: 'push'},
        {img: 'rec-tracker-after.png', step: 8, hold: 3400}
      ]
    },
    chat: {
      steps: ['The adviser lives in the tracker', 'An intro, the first time only', 'A mortgage-only chat', 'A real person joins', 'Off-topic? One tap to Monzo support', 'The recommendation arrives in the chat', 'And it opens in the app'],
      beats: [
        {img: 'ic-tracker2.png', step: 0, hold: 2600, tap: [200, 624], go: 'push'},
        {img: 'ic-intro.png', step: 1, hold: 3600, scroll: 75, scrollMs: 900, tap: [201, 820], go: 'push'},
        {img: 'ic-chat1.png', step: 2, hold: 3200, go: 'fade'},
        {img: 'ic-chat2.png', step: 3, hold: 3800, scroll: 355, scrollMs: 2200, go: 'fade'},
        {img: 'ic-redirect.png', step: 4, hold: 3400, go: 'fade'},
        {img: 'ic-chat3.png', step: 5, hold: 3000, tap: [199, 304], go: 'push'},
        {img: 'ic-recs.png', step: 6, hold: 4600, scroll: 829, scrollMs: 3200}
      ]
    },
    apply: {
      steps: ['A push when it’s ready', 'The adviser’s top pick, and the alternatives', 'Every detail of the deal', 'What happens next, before you leave', 'The hand-off, said out loud', 'Back to your progress'],
      beats: [
        {img: 'ap-push.png', step: 0, hold: 2000, tap: [150, 726], go: 'fade'},
        {img: 'ap-main.png', step: 1, hold: 3400, scroll: 420, scrollMs: 1900, tap: [100, 270], go: 'push'},
        {img: 'ap-drill.png', step: 2, hold: 4200, scroll: 1634, scrollMs: 3200, tap: [201, 770], go: 'push'},
        {img: 'ap-steps.png', step: 3, hold: 2800, tap: [201, 820], go: 'fade'},
        {img: 'ap-handoff.png', step: 4, hold: 2000, go: 'fade'},
        {img: 'ap-tracker.png', step: 5, hold: 3400, scroll: 259}
      ]
    },
    focus: {
      groups: {0: 'Not connected', 3: 'Connected', 7: 'Remortgaging', 9: 'When things go differently'},
      steps: ['First visit', 'Came back after seeing rates', 'Deal may end soon', 'Just connected', 'Deal far away', 'Deal ends in 7–12 months', 'Deal ends in under 6 months', 'In progress', 'Complete', 'Data unavailable', 'Variable rate, no deal end'],
      beats: [
        {img: 'fve-01.png', anim: {src: 'remortgage-presentation/assets/anim/house-light.webp', left: 75.9, top: 85.1, width: 248.2, keep: true}, step: 0, hold: 3200, go: 'fade'},
        {img: 'fve-02.png', anim: {src: 'remortgage-presentation/assets/anim/calculator-light.webp', left: 35.3, top: 99.9, width: 295.6, keep: true}, step: 1, hold: 3200, go: 'fade'},
        {img: 'fve-03.png', anim: {src: 'remortgage-presentation/assets/anim/calendar-light.webp', left: 94.0, top: 105.3, width: 214.0, keep: true}, step: 2, hold: 3200, go: 'fade'},
        {img: 'fve-04.png', anim: {src: 'remortgage-presentation/assets/proto/fvi-confetti.png', left: 99.9, top: 110.0, width: 202.2, float: true}, step: 3, hold: 3200, go: 'fade'},
        {img: 'fve-05b.png', anim: {src: 'remortgage-presentation/assets/proto/fvi-plant.png', left: 126.3, top: 110.0, width: 149.4, float: true}, step: 4, hold: 3200, go: 'fade'},
        {img: 'fve-06.png', anim: {src: 'remortgage-presentation/assets/anim/calendar-light.webp', left: 94.0, top: 105.3, width: 214.0, keep: true}, step: 5, hold: 3200, go: 'fade'},
        {img: 'fve-07.png?v=2', anim: {src: 'remortgage-presentation/assets/anim/calendar-light.webp', left: 94.0, top: 105.3, width: 214.0, keep: true}, step: 6, hold: 3200, go: 'fade'},
        {img: 'fve-08.png', anim: {src: 'assets/mortgages/tracker/hourglass.webp', left: -16.5, top: 2.3, width: 422.4, keep: true}, step: 7, hold: 3200, go: 'fade'},
        {img: 'fve-09.png', anim: {src: 'remortgage-presentation/assets/proto/fvi-confetti.png', left: 99.9, top: 110.0, width: 202.2, float: true}, step: 8, hold: 3200, go: 'fade'},
        {img: 'fve-10.png', anim: {src: 'remortgage-presentation/assets/proto/fvi-umbrella.png', left: 117.0, top: 110.0, width: 167.9, float: true}, step: 9, hold: 3200, go: 'fade'},
        {img: 'fve-11.png', anim: {src: 'remortgage-presentation/assets/proto/fvi-balloon.png', left: 118.2, top: 110.0, width: 165.7, float: true}, step: 10, hold: 3200, go: 'fade'}
      ]
    },
    vision: {
      steps: ['Your deal is ending: example deals, inside Monzo', 'Choose: an adviser first, or deals first', 'Pre-filled with what Monzo already knows', 'Recommendations, with your adviser one tap away', 'Every detail of the deal', 'Documents, straight from your phone', 'Always know what’s next'],
      beats: [
        {img: 'vz-deals.png', anim: {src: 'remortgage-presentation/assets/anim/house-light.webp', left: 51, top: 132, width: 300}, step: 0, hold: 3000, tap: [201, 838], go: 'push'},
        {img: 'vz-choose.png', step: 1, hold: 2800, tap: [133, 740], go: 'push'},
        {img: 'vz-look.png', step: 2, hold: 2400, tap: [184, 373], go: 'push'},
        {img: 'vz-review.png', step: 2, hold: 3600, scroll: 751, scrollMs: 2600, tap: [201, 805], go: 'push'},
        {img: 'vz-recs.png', step: 3, hold: 2800, tap: [84, 692], go: 'push'},
        {img: 'vz-deal.png', step: 4, hold: 4200, scroll: 1390, scrollMs: 3200, tap: [201, 741], go: 'push'},
        {img: 'vz-docs.png', step: 5, hold: 2400, tap: [194, 497], go: 'push'},
        {img: 'vz-idkind.png', step: 5, hold: 2000, tap: [102, 300], go: 'fade'},
        {img: 'vz-tracker.png', step: 6, hold: 4200, scroll: 300, scrollMs: 1800}
      ]
    },
    day1: {
      steps: ['One account, with your Monzo email', 'On your own, or with someone else', 'The hand-off, said out loud', 'Then the form, on Habito’s website'],
      beats: [
        {img: 'd1c-account.png', step: 0, hold: 3200, tap: [201, 800], go: 'push'},
        {img: 'd1b-joint.png', step: 1, hold: 2800, tap: [200, 456], go: 'push'},
        {img: 'd1b-allset.png', anim: {src: 'remortgage-presentation/assets/proto/d1b-drinks.png', left: 126, top: 215.9, width: 150, float: true}, step: 2, hold: 3800, tap: [201, 800], go: 'fade'},
        {img: 'd1-habito.png?v=2', step: 3, hold: 4200}
      ]
    },
    window: {
      steps: ['The push: your deal is ready', 'A card on your Monzo home', 'The recommendation, in Monzo', 'Other deals, as secondary options', 'To accept it, on to Habito'],
      beats: [
        {img: 'vw-lock.png', step: 0, hold: 2000, tap: [200, 688], go: 'fade'},
        {img: 'vw-home.png', step: 1, hold: 1800, tap: [300, 168], go: 'push'},
        {img: 'vw-rec.png', step: 2, hold: 2400, scroll: 330, scrollMs: 1600, go: 'fade'},
        {img: 'vw-rec.png', step: 3, from: 330, hold: 3000, scroll: 653, scrollMs: 2200, tap: [201, 818], go: 'push'},
        {img: 'vw-habito.png', step: 4, hold: 3200}
      ]
    },
    deals: {
      steps: ['Find it at home', 'Estimated deals, by lender', 'Every cost of a deal', 'Change your details', 'How rates have moved', 'How rates are estimated'],
      beats: [
        {img: 'ed-home.png?v=2', step: 0, hold: 2200, tap: [188, 642], go: 'push'},
        {img: 'ed-deals.png', step: 1, hold: 2800, tap: [77, 618], go: 'up'},
        {img: 'ed-detail-sheet2.png', back: 'ed-deals-dim.png', head: 'ed-detail-head.png', step: 2, hold: 4200, scroll: 485, scrollMs: 2800, go: 'down'},
        {img: 'ed-deals.png', step: 1, hold: 900, tap: [201, 329], go: 'up'},
        {img: 'ed-form2.png', step: 3, hold: 2600, tap: [200, 800], go: 'down'},
        {img: 'ed-deals.png', step: 4, hold: 4600, scroll: 733, scrollMs: 3200, go: 'fade'},
        {img: 'ed-deals.png', step: 4, hold: 700, tap: [369, 77], go: 'up'},
        {img: 'ed-about.png', step: 5, hold: 4200, scroll: 383, scrollMs: 2600}
      ]
    },
    app: {
      steps: ['Before you start', 'What happens next'],
      beats: [
        {img: 'factfind-ready.png', step: 0, hold: 2600, tap: [165, 666], go: 'push'},
        {img: 'factfind-timeline.png', step: 1, hold: 3600, scroll: 185, tap: [163, 632]}
      ]
    }
  };
  FLOWS.focus4 = {
    steps: ['Not connected yet|One action: connect, or just see rates', 'Connected, deal far away|Calm: your equity, nothing to do', 'Deal ends in under 6 months|Urgent: what doing nothing costs', 'Remortgage in progress|The tracker lives on the home screen'],
    beats: [0, 4, 6, 7].map((b, i) => ({...FLOWS.focus.beats[b], step: i, hold: 4200}))
  };
  const flow = FLOWS[new URLSearchParams(location.search).get('f')] || FLOWS.rec;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const screen = root.querySelector('[data-flow-screen]');
  const list = root.querySelector('[data-flow-steps]');
  const toggle = root.querySelector('[data-flow-toggle]');

  if (flow.groups) list.classList.add('is-grouped');
  list.innerHTML = flow.steps.map((label, i) => `${flow.groups && flow.groups[i] ? `<li class="fl-group">${flow.groups[i]}</li>` : ''}<li><button type="button" data-step="${i}"><span class="mg-tk-num">${String(i + 1).padStart(2, '0')}</span><span>${label.split('|')[0]}${label.includes('|') ? `<small>${label.split('|')[1]}</small>` : ''}</span></button></li>`).join('');
  const buttons = [...list.querySelectorAll('button')];
  screen.innerHTML = '<div class="fl-layer"><img alt=""><img class="fl-anim" alt="" hidden></div><div class="fl-layer"><img alt=""><img class="fl-anim" alt="" hidden></div><i class="fl-tap"></i>';
  const layers = [...screen.querySelectorAll('.fl-layer')];
  const tapDot = screen.querySelector('.fl-tap');
  flow.beats.forEach(beat => { new Image().src = A + beat.img; if (beat.anim && (beat.anim.float || beat.anim.keep)) new Image().src = beat.anim.src; });

  let current = 0, front = 0, playing = false, timers = [];
  const later = (fn, ms) => timers.push(setTimeout(fn, ms));
  const clear = () => { timers.forEach(clearTimeout); timers = []; };
  const setScroll = (img, y, ms) => { img.style.setProperty('--scroll-ms', ms + 'ms'); img.style.transform = `translateY(${-y}px)`; };
  const place = (layer, cls) => { layer.className = 'fl-layer no-anim ' + cls; void layer.offsetWidth; layer.classList.remove('no-anim'); };

  let scrollTimer, headTimer;   /* kept apart from the play timers: schedule() clears those right after show() */
  function show(index, how) {
    clearTimeout(scrollTimer); clearTimeout(headTimer);
    const beat = flow.beats[index];
    const incoming = layers[1 - front], outgoing = layers[front];
    const img = incoming.querySelector('img');
    incoming.classList.add('no-anim');
    img.src = A + beat.img;
    incoming.style.background = beat.back ? `#f2f8f3 url(${A + beat.back}) top center / 402px auto no-repeat` : '';
    incoming.dataset.back = beat.back ? '1' : '';
    const anim = incoming.querySelector('.fl-anim');
    if (beat.anim) { anim.hidden = true; anim.classList.toggle('is-float', !!beat.anim.float); const src = beat.anim.float || beat.anim.keep ? beat.anim.src : beat.anim.src + '?r=' + Date.now() % 1e6; if (anim.getAttribute('src') !== src) anim.src = src; void anim.offsetWidth; anim.style.cssText = `left:${beat.anim.left}px;top:${beat.anim.top}px;width:${beat.anim.width}px`; anim.hidden = false; }
    else { anim.hidden = true; anim.removeAttribute('src'); }
    anim.classList.toggle('is-static', !!beat.head);
    /* a sheet keeps its header (close button) fixed while the content scrolls under it */
    const pinHead = () => { if (!beat.head) return; anim.src = A + beat.head; anim.style.cssText = 'left:0;top:0;width:402px'; anim.hidden = false; };
    setScroll(img, beat.from || 0, 0);
    if (!how || reduced) {
      incoming.className = 'fl-layer no-anim'; incoming.style.zIndex = 2; outgoing.style.zIndex = 1; pinHead();
    } else if (how === 'fade') {
      place(incoming, 'is-clear'); incoming.style.zIndex = 2; outgoing.style.zIndex = 1;
      incoming.className = 'fl-layer';
    } else if (how === 'push') {
      place(incoming, 'is-right'); incoming.style.zIndex = 2; outgoing.style.zIndex = 1;
      incoming.className = 'fl-layer'; outgoing.className = 'fl-layer is-left';
    } else if (how === 'pop') {
      place(incoming, 'is-left'); incoming.style.zIndex = 1; outgoing.style.zIndex = 2;
      incoming.className = 'fl-layer'; outgoing.className = 'fl-layer is-right';
    } else if (how === 'up' && beat.back) {
      /* a sheet over the page it came from: the page dims, the sheet slides up */
      setScroll(img, -874, 0); place(incoming, 'is-clear'); incoming.style.zIndex = 2; outgoing.style.zIndex = 1;
      incoming.className = 'fl-layer'; setScroll(img, beat.from || 0, 520);
      headTimer = setTimeout(pinHead, 560);
    } else if (how === 'up') {
      place(incoming, 'is-down'); incoming.style.zIndex = 2; outgoing.style.zIndex = 1;
      incoming.className = 'fl-layer'; outgoing.className = 'fl-layer is-back';
    } else if (how === 'down' && outgoing.dataset.back === '1') {
      /* closing a sheet: the page under it is already there, the sheet fades away */
      incoming.className = 'fl-layer no-anim'; incoming.style.zIndex = 1; outgoing.style.zIndex = 2;
      outgoing.className = 'fl-layer is-down';
    } else if (how === 'down') {
      place(incoming, 'is-back'); incoming.style.zIndex = 1; outgoing.style.zIndex = 2;
      incoming.className = 'fl-layer'; outgoing.className = 'fl-layer is-down';
    }
    front = 1 - front; current = index;
    buttons.forEach((button, i) => { button.toggleAttribute('aria-current', i === beat.step); button.classList.toggle('is-past', i < beat.step); });
    if (beat.scroll && beat.scroll !== (beat.from || 0)) {
      const ms = beat.scrollMs || Math.max(900, beat.hold - 1100);
      scrollTimer = setTimeout(() => { img.parentElement.classList.remove('no-anim'); setScroll(img, beat.scroll, ms); }, 650);
    }
  }

  function schedule() {
    clear();
    if (!playing) return;
    const beat = flow.beats[current];
    const last = current === flow.beats.length - 1;
    later(() => {
      if (beat.tap) {
        tapDot.style.left = beat.tap[0] + 'px'; tapDot.style.top = beat.tap[1] + 'px';
        tapDot.classList.remove('is-on'); void tapDot.offsetWidth; tapDot.classList.add('is-on');
      }
      later(() => { show(last ? 0 : current + 1, last ? null : beat.go || 'push'); schedule(); }, beat.tap ? 520 : 0);
    }, beat.hold + (beat.scroll ? 400 : 0));
  }

  function setPlaying(value) {
    playing = value;
    toggle.setAttribute('aria-pressed', String(value));
    toggle.querySelector('span').textContent = value ? 'Pause' : 'Play';
    schedule();
  }

  list.addEventListener('click', event => {
    const button = event.target.closest('[data-step]');
    if (!button) return;
    clear(); setPlaying(false);
    show(flow.beats.findIndex(beat => beat.step === +button.dataset.step), null);
  });
  toggle.addEventListener('click', () => setPlaying(!playing));

  const fit = () => screen.style.setProperty('--tk-scale', screen.parentElement.clientWidth / 402);
  new ResizeObserver(fit).observe(screen.parentElement);
  fit();
  show(0, null);
  if (!reduced) setPlaying(true);
})();
