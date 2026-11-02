(() => {
  const mount = document.querySelector("#puppet-mount");
  const game = document.querySelector("#project-playground");
  if (!mount || !game) return;

  const art = game.querySelector(".puppet-art");
  const note = game.querySelector(".puppet-story-note");
  const choices = [...game.querySelectorAll(".puppet-project-choice")];
  const stories = {
    "financial-health": "A product vision for bringing Financial Health into the app, with self-serve as a route to lower operational cost.",
    bizum: "A local customer need I helped turn into a UK leadership decision to test Bizum in Spain.",
    intu: "A design system and risk tools shaped to work across company platforms.",
    "just-eat": "Sign-up and membership experiences across the Family Club journey."
  };

  fetch(new URL("assets/puppet/laura-marionette.svg", document.baseURI))
    .then((response) => {
      if (!response.ok) throw new Error("The marionette could not be loaded.");
      return response.text();
    })
    .then((svg) => {
      mount.innerHTML = svg;
      const puppet = mount.querySelector("svg");
      const limbs = [...mount.querySelectorAll(".puppet-grab")];
      if (!puppet || !limbs.length) return;

      const chooseProject = (id) => {
        if (!stories[id]) return;
        choices.forEach((choice) => choice.setAttribute("aria-pressed", String(choice.dataset.projectSelect === id)));
        note.textContent = stories[id];
        game.dataset.currentProject = id;
        art.classList.remove("is-playing");
        void art.offsetWidth;
        art.classList.add("is-playing");
        window.setTimeout(() => art.classList.remove("is-playing"), 520);
      };

      choices.forEach((choice) => choice.addEventListener("click", () => chooseProject(choice.dataset.projectSelect)));
      document.querySelectorAll(".coming-soon-card[data-project]").forEach((card) => {
        card.addEventListener("click", () => chooseProject(card.dataset.project));
      });

      const pointInSvg = (event) => {
        const point = puppet.createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        return point.matrixTransform(puppet.getScreenCTM().inverse());
      };

      const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
      limbs.forEach((limb) => {
        limb.addEventListener("pointerdown", (event) => {
          if (event.button !== 0) return;
          const start = pointInSvg(event);
          limb.setPointerCapture(event.pointerId);
          game.classList.add("is-dragging");
          limb.dataset.startX = start.x;
          limb.dataset.startY = start.y;
          limb.dataset.moved = "false";
        });

        limb.addEventListener("pointermove", (event) => {
          if (!limb.hasPointerCapture(event.pointerId)) return;
          const p = pointInSvg(event);
          const dx = p.x - Number(limb.dataset.startX);
          const dy = p.y - Number(limb.dataset.startY);
          if (Math.abs(dx) + Math.abs(dy) > 4) limb.dataset.moved = "true";
          const isArm = limb.id.includes("arm");
          const angle = clamp(dx * (isArm ? 0.34 : 0.22) + dy * (isArm ? 0.16 : 0.08), isArm ? -34 : -18, isArm ? 34 : 18);
          limb.style.transform = `rotate(${angle}deg)`;
        });

        const release = (event) => {
          if (!limb.hasPointerCapture(event.pointerId)) return;
          limb.releasePointerCapture(event.pointerId);
          game.classList.remove("is-dragging");
          if (limb.dataset.moved !== "true") {
            art.classList.add("is-playing");
            window.setTimeout(() => art.classList.remove("is-playing"), 520);
          }
          limb.style.transform = "";
          limb.dataset.moved = "false";
        };
        limb.addEventListener("pointerup", release);
        limb.addEventListener("pointercancel", release);

        limb.addEventListener("keydown", (event) => {
          if (event.key !== "Enter" && event.key !== " ") return;
          event.preventDefault();
          const pivot = limb.dataset.pivot.split(",").map(Number);
          const isArm = limb.id.includes("arm");
          limb.style.transformOrigin = `${pivot[0]}px ${pivot[1]}px`;
          limb.style.transform = `rotate(${isArm ? (limb.id.endsWith("left") ? -22 : 22) : (limb.id.endsWith("left") ? -12 : 12)}deg)`;
          window.setTimeout(() => { limb.style.transform = ""; }, 620);
        });
      });

      game.querySelector(".puppet-play")?.addEventListener("click", () => {
        art.classList.remove("is-dancing");
        void art.offsetWidth;
        art.classList.add("is-dancing", "is-playing");
        window.setTimeout(() => art.classList.remove("is-dancing", "is-playing"), 1500);
      });

      chooseProject(game.dataset.currentProject || "financial-health");
    })
    .catch(() => {
      mount.innerHTML = '<p class="puppet-load-error">The puppet is having a tiny backstage moment. Please try again.</p>';
    });
})();
