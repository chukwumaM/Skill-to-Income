/* =====================================================
   Decipher Academy Landing Page JavaScript
   Vanilla JavaScript only — no frameworks required
   ===================================================== */

// Wait until the HTML is ready before selecting elements.
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal");

  // If IntersectionObserver is unavailable, show everything immediately.
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  // Reveal each section gently as it enters the viewport.
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
});
