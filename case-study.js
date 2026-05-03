/* =====================================================================
   case-study.js
   ---------------------------------------------------------------------
   Animations specific to the case study page. Runs once on DOMContentLoaded.

   Contents:
     1. Scroll progress bar at the top of the page
     2. Sticky left rail — highlights the current section on scroll
     3. Counting-up numbers when stats/impact cards enter view
     4. Before/after slider — drag handle + auto-demo on first scroll-in
     5. Hero phones — subtle parallax on mouse move
   ===================================================================== */

(() => {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------------------------------------------------------------------
     1. Scroll progress bar
     --------------------------------------------------------------------- */
  const setupProgress = () => {
    const bar = document.getElementById("progressBar");
    if (!bar) return;

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      bar.style.width = `${pct}%`;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
  };

  /* ---------------------------------------------------------------------
     2. Sticky rail — highlight current section while scrolling
     Each <li> has a data-link="sectionId". We observe each section and
     add .is-active to the matching rail item.
     --------------------------------------------------------------------- */
  const setupRail = () => {
    const rail = document.querySelector(".cs-rail");
    if (!rail) return;

    const items = Array.from(rail.querySelectorAll("[data-link]"));
    const sectionByItem = new Map();

    // Map each rail item to the section it points at.
    items.forEach((item) => {
      const id = item.getAttribute("data-link");
      const section =
        document.getElementById(id) || document.getElementById(`${id}-copy`);

      if (section) sectionByItem.set(section, item);

      // Clicking a rail item scrolls to its section.
      item.addEventListener("click", () => {
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    // Highlight the section closest to the middle of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const item = sectionByItem.get(entry.target);
          if (!item) return;
          items.forEach((i) => i.classList.remove("is-active"));
          item.classList.add("is-active");
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sectionByItem.forEach((_, section) => observer.observe(section));
  };

  /* ---------------------------------------------------------------------
     3. Counting-up numbers
     Elements with [data-count="42"] animate from 0 to 42 when scrolled
     into view. Supports data-prefix, data-suffix, and decimal targets.
     --------------------------------------------------------------------- */
  const animateNumber = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const prefix = el.dataset.prefix || "";
    const isDecimal = !Number.isInteger(target);
    const duration = 1400;

    if (prefersReduced) {
      el.textContent =
        prefix + (isDecimal ? target.toFixed(1) : target) + suffix;
      return;
    }

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const current = target * easeOut(t);
      const formatted = isDecimal
        ? current.toFixed(1)
        : Math.round(current).toString();
      el.textContent = prefix + formatted + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const setupCounters = () => {
    const nodes = document.querySelectorAll("[data-count]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateNumber(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );
    nodes.forEach((n) => observer.observe(n));
  };

  /* ---------------------------------------------------------------------
     4. Before/after slider
     Drag the handle (or pointer-down anywhere on the container) to move
     the clip boundary between the "before" and "after" panes. On first
     scroll-in the slider plays a brief demo sweep.
     --------------------------------------------------------------------- */
  const setupCompare = () => {
    const container = document.querySelector(".compare");
    const handle    = document.getElementById("compareHandle");
    const afterPane = container?.querySelector(".compare-after");
    if (!container || !handle || !afterPane) return;

    let percent = 50;

    const setPercent = (p) => {
      percent = Math.min(98, Math.max(2, p));
      handle.style.left = `${percent}%`;
      afterPane.style.clipPath = `inset(0 0 0 ${percent}%)`;
    };

    const percentFromEvent = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      setPercent((x / rect.width) * 100);
    };

    // Pointer drag
    let dragging = false;
    const onDown = (e) => { dragging = true; percentFromEvent(e); };
    const onMove = (e) => { if (dragging) percentFromEvent(e); };
    const onUp   = () => { dragging = false; };

    handle.addEventListener("pointerdown", onDown);
    container.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    // Keyboard
    handle.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft")  setPercent(percent - 3);
      if (e.key === "ArrowRight") setPercent(percent + 3);
    });

    // Demo sweep the first time the slider is scrolled into view
    if (prefersReduced) return;

    const demoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          demoObserver.disconnect();

          let origin = 50;
          const keyframes = [
            [600,  18],
            [1200, 82],
            [1800, 50],
          ];
          keyframes.forEach(([delay, target]) => {
            setTimeout(() => {
              const duration = 500;
              const startTime = performance.now();
              const step = (now) => {
                const t = Math.min(1, (now - startTime) / duration);
                const eased = 1 - Math.pow(1 - t, 3);
                setPercent(origin + (target - origin) * eased);
                if (t < 1) requestAnimationFrame(step);
                else origin = target;
              };
              requestAnimationFrame(step);
            }, delay);
          });
        });
      },
      { threshold: 0.4 }
    );
    demoObserver.observe(container);
  };

  /* ---------------------------------------------------------------------
     5. Hero phones — parallax on mouse move
     Translates each phone slightly as the cursor moves across the stage,
     while preserving their base rotation and vertical offset.
     --------------------------------------------------------------------- */
  const setupHeroParallax = () => {
    if (prefersReduced) return;

    const stage = document.querySelector(".cs-hero-stage");
    if (!stage) return;

    const phones = stage.querySelectorAll("[data-phone]");

    const applyTransform = (phone, x, y) => {
      const isBefore = phone.dataset.phone === "before";
      const rotation = isBefore ? "-6deg" : "4deg";
      const baseY    = isBefore ? 16 : -16;
      const magX     = isBefore ? 20 : -16;
      phone.style.transform =
        `translate(${x * magX}px, ${y * magX * 0.6 + baseY}px) rotate(${rotation})`;
    };

    stage.addEventListener("pointermove", (e) => {
      const rect = stage.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width  - 0.5;
      const ny = (e.clientY - rect.top)  / rect.height - 0.5;
      phones.forEach((p) => applyTransform(p, nx, ny));
    });

    stage.addEventListener("pointerleave", () => {
      phones.forEach((p) => applyTransform(p, 0, 0));
    });
  };

  /* ---------------------------------------------------------------------
     6. Impact cards — staggered entrance + text reveal for non-numeric
     --------------------------------------------------------------------- */
  const setupImpactCards = () => {
    const grid = document.querySelector(".cs-impact-grid");
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll(".cs-impact-card"));

    if (prefersReduced) {
      cards.forEach((c) => c.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.add("is-visible"), i * 150);
          });
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(grid);

    // "zero" text reveal — typed feel
    const textEls = grid.querySelectorAll("[data-impact-text]");
    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          textObserver.unobserve(entry.target);
          const el = entry.target;
          const text = el.dataset.impactText;
          el.textContent = "";
          let i = 0;
          const type = () => {
            el.textContent = text.slice(0, ++i);
            if (i < text.length) setTimeout(type, 80);
          };
          setTimeout(type, 600);
        });
      },
      { threshold: 0.4 }
    );
    textEls.forEach((el) => textObserver.observe(el));
  };

  /* ---------------------------------------------------------------------
     Boot
     --------------------------------------------------------------------- */
  const init = () => {
    setupProgress();
    setupRail();
    setupCounters();
    setupCompare();
    setupHeroParallax();
    setupImpactCards();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
