document.addEventListener('DOMContentLoaded', () => {
  // Année dynamique footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Gestion modales
  const navButtons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.content-section');
  const closeButtons = document.querySelectorAll('.close-btn');

  // Ouvrir
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      sections.forEach(s => {
        s.classList.remove('active');
        setTimeout(() => { if (!s.classList.contains('active')) s.classList.add('hidden'); }, 400);
      });
      const target = document.getElementById(targetId);
      target.classList.remove('hidden');
      setTimeout(() => target.classList.add('active'), 50);
      
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Fermer (bouton)
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.closest('.content-section');
      section.classList.remove('active');
      setTimeout(() => section.classList.add('hidden'), 400);
      navButtons.forEach(b => b.classList.remove('active'));
    });
  });

  // Fermer (clic extérieur)
  sections.forEach(section => {
    section.addEventListener('click', (e) => {
      if (e.target === section) {
        section.classList.remove('active');
        setTimeout(() => section.classList.add('hidden'), 400);
        navButtons.forEach(b => b.classList.remove('active'));
      }
    });
  });

  // Fermer (Échap)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      sections.forEach(s => {
        if (!s.classList.contains('hidden')) {
          s.classList.remove('active');
          setTimeout(() => s.classList.add('hidden'), 400);
          navButtons.forEach(b => b.classList.remove('active'));
        }
      });
    }
  });
});