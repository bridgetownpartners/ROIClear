(function () {
  const mainLogo   = document.getElementById('main-logo');
  const topBarLogo = document.getElementById('top-bar-logo');
  const topBar     = document.getElementById('top-bar');

  if (!mainLogo || !topBarLogo || !topBar) return;

  function updateLogoVisibility() {
    const logoRect  = mainLogo.getBoundingClientRect();
    const barHeight = topBar.offsetHeight;

    if (logoRect.bottom <= barHeight + 8) {
      topBarLogo.classList.add('visible');
    } else {
      topBarLogo.classList.remove('visible');
    }
  }

  // Run once on load
  updateLogoVisibility();

  // Scroll (throttled)
  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateLogoVisibility();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Resize / orientation change
  window.addEventListener('resize', updateLogoVisibility);
  window.addEventListener('orientationchange', updateLogoVisibility);

  // IntersectionObserver as extra safety
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          topBarLogo.classList.add('visible');
        } else {
          const logoRect = mainLogo.getBoundingClientRect();
          if (logoRect.bottom > topBar.offsetHeight + 8) {
            topBarLogo.classList.remove('visible');
          }
        }
      });
    }, { root: null, rootMargin: '0px', threshold: 0 });

    observer.observe(mainLogo);
  }
})();