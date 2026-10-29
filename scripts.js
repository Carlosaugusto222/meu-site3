/**
 * SAMUEL KIDS — Interações & Micro-animações da Vitrine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer para animações suaves ao rolar a página
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback para navegadores antigos
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
});
