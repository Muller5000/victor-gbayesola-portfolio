document.addEventListener('DOMContentLoaded', () => {
  // Check for user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Disable parallax on mobile devices for better touch scrolling performance
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  
  if (prefersReducedMotion || isMobile) return;

  const parallaxElements = document.querySelectorAll('.parallax-layer');
  let ticking = false;

  const updateParallax = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    parallaxElements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed')) || 0.1;
      
      // We calculate offset relative to the initial position
      // Using an offset ensures elements don't jump on load
      const yPos = scrollY * speed;
      
      el.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });

  // Run once on load
  updateParallax();
});
