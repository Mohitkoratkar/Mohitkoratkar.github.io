// Theme Toggle & Persistence
(function () {
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('mk_theme');
  if (saved === 'light') document.documentElement.classList.add('light');

  if (btn) {
    btn.addEventListener('click', () => {
      document.documentElement.classList.toggle('light');
      const theme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
      localStorage.setItem('mk_theme', theme);
      btn.setAttribute('aria-pressed', document.documentElement.classList.contains('light'));
    });
  }
})();

// Scroll Reveal Observer
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.scroll-reveal, .project-card, .cert-entry, .card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  reveals.forEach((el) => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
  });
});

// Cursor Spotlight Effect on Cards
document.addEventListener('mousemove', (e) => {
  document.querySelectorAll('.project-card, .card').forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});