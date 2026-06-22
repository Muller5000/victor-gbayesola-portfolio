document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('mobile-open');
      
      // Prevent background scrolling when menu is open
      if (navMenu.classList.contains('mobile-open')) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    });

    // Close menu when links are clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('mobile-open');
        body.style.overflow = '';
      });
    });
  }

  // Header Scroll State
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Animated Counter Logic
  const statsElements = document.querySelectorAll('[data-target]');
  if (statsElements.length > 0) {
    const observerOptions = {
      root: null,
      threshold: 0.1
    };

    const countUp = (element) => {
      const targetStr = element.getAttribute('data-target');
      const suffix = targetStr.replace(/[0-9.]/g, ''); // Extract characters like K+, %, B+
      const targetVal = parseFloat(targetStr.replace(/[^0-9.]/g, ''));
      let startVal = 0;
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function: easeOutQuad
        const easedProgress = progress * (2 - progress);
        const currentVal = (startVal + (targetVal - startVal) * easedProgress);

        if (targetStr.includes('.')) {
          element.textContent = currentVal.toFixed(1) + suffix;
        } else {
          element.textContent = Math.floor(currentVal).toLocaleString() + suffix;
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, observerOptions);

    statsElements.forEach(stat => statsObserver.observe(stat));
  }

  // Dynamic Text Rotator
  const heroRotator = document.getElementById('hero-rotator');
  if (heroRotator) {
    const words = ['Save', 'Invest', 'Trade', 'Grow'];
    let currentIndex = 0;

    setInterval(() => {
      // Step 1: Fade out
      heroRotator.classList.add('fade-out');

      setTimeout(() => {
        // Step 2: Change text content and rotate index
        currentIndex = (currentIndex + 1) % words.length;
        heroRotator.textContent = words[currentIndex];
        
        // Setup for fade-in (slide from bottom)
        heroRotator.classList.remove('fade-out');
        heroRotator.classList.add('fade-in');

        // Force reflow
        heroRotator.offsetWidth;

        // Step 3: Fade in
        heroRotator.classList.remove('fade-in');
      }, 400); // Matches CSS transition duration
    }, 3000); // Rotate every 3 seconds
  }

  // Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (revealElements.length > 0) {
    const revealObserverOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before entering view
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target); // Reveal only once
        }
      });
    }, revealObserverOptions);

    revealElements.forEach(element => revealObserver.observe(element));
  }

  // Mouse Parallax for Hero Visual Deck
  const heroImageWrapper = document.querySelector('.hero-image-wrapper');
  if (heroImageWrapper) {
    const mainImg = heroImageWrapper.querySelector('.hero-main-img');
    const floatingCards = heroImageWrapper.querySelectorAll('.floating-card');
    
    // Only enable on desktop/non-touch devices to save performance
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isTouchDevice) {
      heroImageWrapper.addEventListener('mousemove', (e) => {
        const rect = heroImageWrapper.getBoundingClientRect();
        // Calculate cursor position relative to container center (-0.5 to 0.5)
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        // Shift main image slightly
        if (mainImg) {
          mainImg.style.transform = `translate3d(${x * 12}px, ${y * 12}px, 0) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
        }

        // Shift floating cards with different multipliers for depth
        floatingCards.forEach((card, index) => {
          const multiplier = (index + 1) * 18; // Staggered offsets for 3D parallax depth
          card.style.transform = `translate3d(${x * multiplier}px, ${y * multiplier}px, 0) scale(1.02)`;
        });
      });

      // Reset on mouse leave
      heroImageWrapper.addEventListener('mouseleave', () => {
        if (mainImg) {
          mainImg.style.transform = '';
        }
        floatingCards.forEach(card => {
          card.style.transform = '';
        });
      });
    }
  }
});

// Helper function to show Toast Alerts
function showToast(message, type = 'success') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    toastContainer.style.position = 'fixed';
    toastContainer.style.bottom = '24px';
    toastContainer.style.right = '24px';
    toastContainer.style.zIndex = '9999';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-success show`;
  toast.style.position = 'relative';
  toast.style.bottom = '0';
  toast.style.right = '0';
  toast.style.marginTop = '12px';
  toast.style.transform = 'translateY(100px)';
  toast.style.opacity = '0';
  toast.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#10b981"/>
    </svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation frame for transition
  setTimeout(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  }, 10);

  // Remove toast after duration
  setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}