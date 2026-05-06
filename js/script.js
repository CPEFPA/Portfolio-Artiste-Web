document.addEventListener('DOMContentLoaded', () => {
  
  // ===== CAROUSEL VIDÉO =====
  const slides = document.querySelectorAll('.video-slide');
  const indicatorsContainer = document.getElementById('indicators');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  // IDs des vidéos YouTube
  const videoIds = [
    'WtMJ1dGa5TE',
    '9loX_HS6YqE',
    'JwoV1-ykm9E',
    '4o_svjnJT2o',
    'xePAZ_nypxM'
  ];
  
  let currentSlide = 0;
  let carouselInterval;
  
  // Générer les indicateurs
  slides.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });
  
  const indicators = document.querySelectorAll('.indicator');
  
  // Charger l'image de miniature YouTube
  function loadVideoThumbnail(slide, videoId) {
    const thumbnailUrl = https://img.youtube.com/vi/\/maxresdefault.jpg;
    const img = new Image();
    img.onload = () => { slide.style.backgroundImage = \url(\)\; };
    img.onerror = () => { slide.style.backgroundImage = \url(https://img.youtube.com/vi/\/hqdefault.jpg)\; };
    img.src = thumbnailUrl;
  }
  
  // Initialiser les miniatures
  slides.forEach((slide, index) => {
    loadVideoThumbnail(slide, videoIds[index]);
  });
  
  // Fonction pour changer de slide
  function goToSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    indicators.forEach(i => i.classList.remove('active'));
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    currentSlide = index;
  }
  
  // Navigation
  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }
  
  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
  }
  
  // Auto-play carousel
  function startCarousel() { carouselInterval = setInterval(nextSlide, 5000); }
  function stopCarousel() { clearInterval(carouselInterval); }
  
  // Événements
  nextBtn.addEventListener('click', () => { stopCarousel(); nextSlide(); startCarousel(); });
  prevBtn.addEventListener('click', () => { stopCarousel(); prevSlide(); startCarousel(); });
  
  const carousel = document.getElementById('videoCarousel');
  carousel.addEventListener('mouseenter', stopCarousel);
  carousel.addEventListener('mouseleave', startCarousel);
  
  // Touch swipe pour mobile
  let touchStartX = 0; let touchEndX = 0;
  carousel.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; stopCarousel(); });
  carousel.addEventListener('touchend', (e) => { touchEndX = e.changedTouches[0].screenX; handleSwipe(); startCarousel(); });
  
  function handleSwipe() {
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchEndX - touchStartX > 50) prevSlide();
  }
  
  startCarousel();
  
  // ===== NAVIGATION & MODALES =====
  const navButtons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.content-section');
  const closeButtons = document.querySelectorAll('.close-btn');
  
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      sections.forEach(section => {
        section.classList.remove('active');
        setTimeout(() => { if (!section.classList.contains('active')) section.classList.add('hidden'); }, 400);
      });
      const targetSection = document.getElementById(targetId);
      targetSection.classList.remove('hidden');
      setTimeout(() => { targetSection.classList.add('active'); }, 50);
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.closest('.content-section');
      section.classList.remove('active');
      setTimeout(() => { section.classList.add('hidden'); }, 400);
      navButtons.forEach(b => b.classList.remove('active'));
    });
  });
  
  sections.forEach(section => {
    section.addEventListener('click', (e) => {
      if (e.target === section) {
        section.classList.remove('active');
        setTimeout(() => { section.classList.add('hidden'); }, 400);
        navButtons.forEach(b => b.classList.remove('active'));
      }
    });
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      sections.forEach(section => {
        if (!section.classList.contains('hidden')) {
          section.classList.remove('active');
          setTimeout(() => { section.classList.add('hidden'); }, 400);
          navButtons.forEach(b => b.classList.remove('active'));
        }
      });
    }
  });
});
