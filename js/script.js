document.addEventListener('DOMContentLoaded', () => {
  const videoBg = document.getElementById('videoBg');
  
  if (videoBg) {
    videoBg.addEventListener('loadedmetadata', async () => {
      try { await videoBg.play(); } catch (e) { console.log('Autoplay bloqué'); }
    });
    videoBg.addEventListener('error', () => {
      const fallback = videoBg.querySelector('.bg-fallback');
      if (fallback) { videoBg.style.display = 'none'; fallback.style.display = 'block'; }
    });
  }
  
  document.getElementById('year').textContent = new Date().getFullYear();
  
  const navButtons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.content-section');
  const closeButtons = document.querySelectorAll('.close-btn');
  
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sections.forEach(s => { s.classList.remove('active'); setTimeout(() => { if (!s.classList.contains('active')) s.classList.add('hidden'); }, 400); });
      const target = document.getElementById(btn.dataset.target);
      target.classList.remove('hidden');
      setTimeout(() => target.classList.add('active'), 50);
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.closest('.content-section');
      section.classList.remove('active');
      setTimeout(() => section.classList.add('hidden'), 400);
      navButtons.forEach(b => b.classList.remove('active'));
    });
  });
  
  sections.forEach(section => {
    section.addEventListener('click', (e) => {
      if (e.target === section) {
        section.classList.remove('active');
        setTimeout(() => section.classList.add('hidden'), 400);
        navButtons.forEach(b => b.classList.remove('active'));
      }
    });
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      sections.forEach(s => { if (!s.classList.contains('hidden')) { s.classList.remove('active'); setTimeout(() => s.classList.add('hidden'), 400); navButtons.forEach(b => b.classList.remove('active')); } });
    }
  });
});
