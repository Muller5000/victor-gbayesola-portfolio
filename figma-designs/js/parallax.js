document.addEventListener('DOMContentLoaded', () => {
  // Check for user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Disable parallax on mobile devices for better touch scrolling performance
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  
  if (prefersReducedMotion || isMobile) return;

  const parallaxElements = document.querySelectorAll('.parallax-layer');
  let ticking = false;

  // Store initial positions
  const elementsData = Array.from(parallaxElements).map(el => {
    // Get position relative to document top
    const rect = el.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;
    return {
      el,
      speed: parseFloat(el.getAttribute('data-speed')) || 0.1,
      initialTop: absoluteTop,
      height: rect.height
    };
  });

  const updateParallax = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    elementsData.forEach(data => {
      // Calculate how far the element is from the center of the viewport
      // If it's at the center, offset is 0.
      const elementCenter = data.initialTop + (data.height / 2);
      const viewportCenter = scrollY + (windowHeight / 2);
      const distanceFromCenter = viewportCenter - elementCenter;
      
      // Calculate yPos based on distance from viewport center
      const yPos = distanceFromCenter * data.speed;
      
      data.el.style.transform = `translate3d(0, ${yPos}px, 0)`;
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
