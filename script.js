/* =====================================================================
   script.js
   ---------------------------------------------------------------------
   Shared animations for every page of the portfolio. Runs once on
   DOMContentLoaded.

   Contents:
     1. Hero title — word-by-word reveal on load
     2. Scroll-triggered reveal for [data-reveal] / [data-stagger] elements
     3. Custom cursor (ring + dot) — follows pointer, swells on hover
     4. 3D tilt on elements marked [data-tilt]
   ===================================================================== */

(() => {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------------------------------------------------------------------
     1. Hero title word reveal
     Wraps every word in <span class="word"><span>word</span></span> so we
     can clip + translate each word for a staggered rise-up on load.
     --------------------------------------------------------------------- */
  const wrapWord = (word, index) => {
    const outer = document.createElement("span");
    outer.className = "word";
    outer.style.setProperty("--delay", `${index * 80}ms`);
    const inner = document.createElement("span");
    inner.textContent = word;
    outer.appendChild(inner);
    return outer;
  };

  const revealHero = () => {
    const headings = document.querySelectorAll(".hero-title[data-reveal]");

    headings.forEach((heading) => {
      // Handled below — disable the generic reveal observer for this node.
      heading.removeAttribute("data-reveal");

      // Split HTML into plain-text chunks and nested elements (like the
      // italic accent span), then rebuild with each word wrapped.
      const parts = heading.innerHTML
        .split(/(<[^>]+>[^<]*<\/[^>]+>|\s+)/)
        .filter(Boolean);

      heading.innerHTML = "";
      let wordIndex = 0;

      parts.forEach((chunk) => {
        if (/^\s+$/.test(chunk)) {
          heading.appendChild(document.createTextNode(" "));
          return;
        }

        if (chunk.startsWith("<")) {
          // Nested element (e.g. .hero-accent span) — wrap its words too.
          const tmp = document.createElement("div");
          tmp.innerHTML = chunk;
          const nested = tmp.firstElementChild;
          const text = nested.textContent;
          nested.textContent = "";
          const words = text.split(/\s+/);
          words.forEach((word, i) => {
            nested.appendChild(wrapWord(word, wordIndex++));
            if (i < words.length - 1)
              nested.appendChild(document.createTextNode(" "));
          });
          heading.appendChild(nested);
        } else {
          // Plain text — split on whitespace and wrap each word.
          const words = chunk.split(/\s+/).filter(Boolean);
          words.forEach((word, i) => {
            heading.appendChild(wrapWord(word, wordIndex++));
            if (i < words.length - 1)
              heading.appendChild(document.createTextNode(" "));
          });
        }
      });

      // Trigger the staggered animation next frame.
      requestAnimationFrame(() => {
        heading.querySelectorAll(".word").forEach((w) => w.classList.add("is-in"));
      });
    });
  };

  /* ---------------------------------------------------------------------
     2. Scroll-triggered reveal
     Any element with [data-reveal] fades in and translates up when it
     enters the viewport. Groups with [data-stagger] reveal their children
     one after the other via --i custom properties.
     --------------------------------------------------------------------- */
  const setupReveal = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );

    document
      .querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));

    document.querySelectorAll("[data-stagger]").forEach((group) => {
      Array.from(group.children).forEach((child, i) =>
        child.style.setProperty("--i", i)
      );
      observer.observe(group);
    });
  };

  /* ---------------------------------------------------------------------
     3. Custom cursor — ring + dot
     The dot snaps to the pointer every frame; the ring lerps toward it
     for a soft trailing effect. Hidden on touch / coarse-pointer devices.
     --------------------------------------------------------------------- */
  const setupCursor = () => {
    const ring = document.querySelector(".cursor");
    const dot  = document.querySelector(".cursor-dot");
    if (!ring || !dot) return;

    const supportsHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (!supportsHover) return;

    document.body.classList.add("cursor-ready");

    // Target position (dot), current ring position (lerps toward target)
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX   = targetX;
    let ringY   = targetY;

    window.addEventListener("pointermove", (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.transform =
        `translate(${targetX}px, ${targetY}px) translate(-50%, -50%)`;
    });
    window.addEventListener("pointerdown", () => ring.classList.add("is-down"));
    window.addEventListener("pointerup",   () => ring.classList.remove("is-down"));

    const render = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      ring.style.transform =
        `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(render);
    };
    render();

    // Swell the ring over interactive elements.
    const hoverables = document.querySelectorAll(
      "a, button, .card, [data-tilt]"
    );
    hoverables.forEach((el) => {
      el.addEventListener("pointerenter", () => ring.classList.add("is-hover"));
      el.addEventListener("pointerleave", () => ring.classList.remove("is-hover"));
    });
  };

  /* ---------------------------------------------------------------------
     4. 3D tilt on [data-tilt] elements
     Translates pointer position inside the element into small X/Y
     rotations. Child .card-media and .card-meta layers float forward
     on Z via the is-tilting class (see styles.css).
     --------------------------------------------------------------------- */
  const setupTilt = () => {
    if (prefersReduced) return;

    document.querySelectorAll("[data-tilt]").forEach((el) => {
      let frame = 0;

      el.addEventListener("pointermove", (e) => {
        const rect = el.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width  - 0.5;
        const ny = (e.clientY - rect.top)  / rect.height - 0.5;

        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          el.style.transform =
            `perspective(900px) ` +
            `rotateX(${(-ny * 6).toFixed(2)}deg) ` +
            `rotateY(${( nx * 8).toFixed(2)}deg) ` +
            `translateY(-4px)`;
        });
        el.classList.add("is-tilting");
      });

      el.addEventListener("pointerleave", () => {
        cancelAnimationFrame(frame);
        el.style.transform = "";
        el.classList.remove("is-tilting");
      });
    });
  };

  /* ---------------------------------------------------------------------
     Boot
     --------------------------------------------------------------------- */
  const init = () => {
    revealHero();
    setupReveal();
    setupCursor();
    setupTilt();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
