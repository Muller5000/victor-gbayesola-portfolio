/* ==========================================================================
   VICTOR GBAYESOLA — PORTFOLIO CORE ENGINE (RADNAABAZAR STYLE)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Lock scroll on load for preloader
  document.body.classList.add('preloading');
  window.scrollTo(0, 0);

  initPreloader();
  initThemeEngine();
  initLanguageEngine();
  initCursorGlow();
  initCursorFollower(); // Fancy.design cursor
  initHorizontalScroll();
  initMusicVibeWidget();
  initMobileNavigation();
  initScrollIntersectionReveals();
  initInteractiveMarquee(); // Fancy.design marquee
  initArcticParticles(); // Igloo.inc ice drift particles
});

/* ==========================================================================
   1. STATE-PERSISTING THEME CONTROLLER
   ========================================================================== */
function initThemeEngine() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;
  
  // Set default theme state
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
  });
}

/* ==========================================================================
   2. ENGLISH / SPANISH (EN/ES) TRANSLATIONS ENGINE
   ========================================================================== */
const TRANSLATIONS = {
  en: {
    preloader_text: "hello, welcome to my world",
    nav_about: "About",
    nav_projects: "Projects",
    nav_habits: "Life Hub",
    nav_experience: "Experience",
    nav_contact: "Contact",
    
    hero_status: "Available for Selective Projects",
    hero_title: "Creative designer shaping <span class='accent-gradient'>high-fidelity</span> digital solutions.",
    hero_subtitle: "Bridging UX design, mathematical economic research, and venture strategy into memorable interfaces.",
    hero_location: "Based in Lagos, Nigeria",
    hero_focus: "Quantitative & Aesthetic Balance",
    hero_cta_projects: "View Selected Cases",
    hero_cta_contact: "Let's Connect",
    
    badge_mvps: "Designed & Shipped",
    
    about_subtitle: "Specializations",
    about_heading: "Integrated Core Pillars",
    about_ux_title: "Creative UX/UI Design",
    about_ux_desc: "High-fidelity interfaces, modular design systems, dynamic layouts, micro-interactions, and visual storytelling optimized for absolute user conversion.",
    about_econ_title: "Quantitative Analysis",
    about_econ_desc: "Applying mathematical economic modeling, user behavior metrics analysis, market trends, and data analysis to justify creative product architecture.",
    about_ent_title: "Venture Growth Strategy",
    about_ent_desc: "Structuring high-impact business pitch decks, organizing go-to-market pipelines, framing core MVPs, and aligning strategic product scaling.",
    
    projects_subtitle: "Selected Works",
    projects_title: "Design Alchemist Cases",
    projects_hint: "Hover over project cards to pause and inspect.",
    
    project_1_title: "QuickBite",
    project_1_cat: "UX/UI & Mobile App",
    project_1_desc: "A high-fidelity mobile food ordering application designed for a premium fast-food brand, optimizing rapid checkout, smart rewards, and gamified ordering.",
    project_1_tool_1: "UX/UI Design",
    project_1_tool_2: "Mobile App",
    project_1_tool_3: "Interaction",
    
    project_2_title: "Pulse Analytics",
    project_2_cat: "Research & Economics",
    project_2_desc: "Comprehensive macro-economic data parsing interface rendering interactive metrics, statistical trends, and behavioral charts.",
    project_2_tool_1: "Data Modeling",
    project_2_tool_2: "UX Research",
    project_2_tool_3: "Dashboard",
    
    project_3_title: "Ventura",
    project_3_cat: "Branding & Venture Strategy",
    project_3_desc: "Strategic growth, visual branding, investor pitch structures, and comprehensive identity systems built for a high-impact startup ecosystem.",
    project_3_tool_1: "Venture Strategy",
    project_3_tool_2: "Brand System",
    project_3_tool_3: "Investor Pitch",
    
    view_case: "View Case Study",
    
    habits_subtitle: "Gamified Lifestyle",
    habits_title: "Daily Routine & Quantified Life",
    habits_desc: "A look inside my daily patterns, micro-habits, and metrics.",
    
    routine_title: "Daily Focus Schedule",
    routine_run: "Morning Run (5K)",
    routine_brew: "Double Espresso Brew",
    routine_figma: "High-Fi Figma Sync",
    routine_econ: "Economic Data Modeling",
    routine_guitar: "Acoustic Guitar Session",
    
    stats_title: "Quantified Stats",
    stat_coffee: "Coffee Brewed This Year",
    stat_books: "Books Read Goal",
    stat_figma: "Figma Assets Built",
    stat_anime: "Anime / Series Watched",
    
    music_title: "Vibe / Currently Listening",
    goals_title: "Future Milestones",
    goal_1: "Master Conversational Spanish 🇪🇸",
    goal_2: "Deploy Complex Neural Networks 🐍",
    goal_3: "Embark on a Solo Kyoto Trek 🇯🇵",
    
    exp_subtitle: "Career Path",
    exp_title: "Professional Trajectory",
    role_1_desc: "Architecting high-fidelity mockups, framing pitch-deck structures, and aligning macro-economic trends with interactive fintech and consumer software designs.",
    role_2_desc: "Bridged quantitative economic regression charts with user dashboard components, increasing general platform analytics usability by 42%.",
    role_3_desc: "Designed high-fidelity web mockups, structured micro-interactions, and framed strategic digital expansion campaigns for high-growth local startups.",
    
    contact_subtitle: "Get In Touch",
    contact_title: "Initiate a Collaboration",
    contact_desc: "Looking to scale a product, discuss behavioral economics data, or require an aesthetic design system? Leave a message below.",
    contact_name_placeholder: "Your Name",
    contact_email_placeholder: "Email Address",
    contact_message_placeholder: "Describe your project or inquiry...",
    contact_submit: "Send Secure Inquiry",
    contact_success: "Message sent successfully! I will reach out in 24 hours.",
    
    marquee_cta: "LET'S TALK 💬",
    marquee_base: "DESIGN · STRATEGY · RESEARCH · BRANDING · ",
    cursor_view_case: "VIEW CASE ↗",
    cursor_theme: "THEME ☀️",
    cursor_lang: "LANGUAGE 🌐",
    cursor_explore: "EXPLORE 🔍",
    cursor_write: "WRITE ✏️",
    cursor_send: "SEND 🚀",
    cursor_visit: "VISIT 🔗",
    cursor_talk: "TALK! 💬",
    
    footer_copyright: "&copy; 2026 Victor Gbayesola. Curated with absolute designer precision."
  },
  es: {
    preloader_text: "hola, bienvenido a mi mundo",
    nav_about: "Sobre Mí",
    nav_projects: "Proyectos",
    nav_habits: "Estilo de Vida",
    nav_experience: "Trayectoria",
    nav_contact: "Contacto",
    
    hero_status: "Disponible para Proyectos Selectos",
    hero_title: "Diseñador creativo dando forma a soluciones digitales de <span class='accent-gradient'>alta fidelidad</span>.",
    hero_subtitle: "Fusionando diseño UX, investigación económica matemática y estrategia de startups en interfaces memorables.",
    hero_location: "Residente en Lagos, Nigeria",
    hero_focus: "Equilibrio Cuantitativo y Estético",
    hero_cta_projects: "Ver Proyectos",
    hero_cta_contact: "Hablemos",
    
    badge_mvps: "Diseñados y Lanzados",
    
    about_subtitle: "Especialidades",
    about_heading: "Pilares Profesionales",
    about_ux_title: "Diseño UX/UI Creativo",
    about_ux_desc: "Interfaces de alta fidelidad, sistemas de diseño modulares, microinteracciones y narrativas visuales optimizadas para la conversión absoluta del usuario.",
    about_econ_title: "Análisis Cuantitativo",
    about_econ_desc: "Aplicando modelos económicos matemáticos, análisis de métricas de comportamiento del usuario, tendencias de mercado y análisis de datos.",
    about_ent_title: "Estrategia de Startups",
    about_ent_desc: "Estructurando pitch decks comerciales de alto impacto, organizando pipelines de go-to-market, estructurando MVPs y escalamiento estratégico.",
    
    projects_subtitle: "Trabajos Selectos",
    projects_title: "Casos de Alquimia",
    projects_hint: "Coloca el cursor sobre las tarjetas para pausar e inspeccionar.",
    
    project_1_title: "QuickBite",
    project_1_cat: "UX/UI y App Móvil",
    project_1_desc: "Una aplicación móvil premium de pedidos de comida diseñada para una marca de comida rápida en crecimiento, que optimiza el flujo de pago y rachas de recompensas.",
    project_1_tool_1: "Diseño UX/UI",
    project_1_tool_2: "Producto Móvil",
    project_1_tool_3: "Diseño Estético",
    
    project_2_title: "Pulse Analytics",
    project_2_cat: "Investigación y Economía",
    project_2_desc: "Interfaz integral de análisis de datos macroeconómicos que presenta métricas interactivas, tendencias estadísticas y gráficos de comportamiento.",
    project_2_tool_1: "Modelado de Datos",
    project_2_tool_2: "Investigación UX",
    project_2_tool_3: "Dashboard",
    
    project_3_title: "Ventura",
    project_3_cat: "Branding y Estrategia",
    project_3_desc: "Crecimiento estratégico, branding visual, estructuras de pitch para inversores y sistemas de identidad construidos para un ecosistema de startups.",
    project_3_tool_1: "Estrategia",
    project_3_tool_2: "Identidad Visual",
    project_3_tool_3: "Pitch de Inversor",
    
    view_case: "Ver Caso de Estudio",
    
    habits_subtitle: "Vida Gamificada",
    habits_title: "Rutina Diaria y Vida Cuantificada",
    habits_desc: "Una mirada dentro de mis patrones diarios, microhábitos y métricas cuantificadas.",
    
    routine_title: "Horario de Enfoque Diario",
    routine_run: "Carrera Matutina (5K)",
    routine_brew: "Preparación de Espresso Doble",
    routine_figma: "Sincronización Figma de Alta Fidelidad",
    routine_econ: "Modelado de Datos Económicos",
    routine_guitar: "Sesión de Guitarra Acústica",
    
    stats_title: "Estadísticas Cuantificadas",
    stat_coffee: "Espressos Preparados Este Año",
    stat_books: "Meta de Libros Leídos",
    stat_figma: "Componentes Figma Creados",
    stat_anime: "Capítulos de Anime Vistos",
    
    music_title: "Sintonía / Escuchando Ahora",
    goals_title: "Próximos Hitos",
    goal_1: "Dominar el Español Conversacional 🇪🇸",
    goal_2: "Implementar Redes Neuronales Complejas 🐍",
    goal_3: "Embarcarse en un Trekking Solo en Kioto 🇯🇵",
    
    exp_subtitle: "Carrera Profesional",
    exp_title: "Trayectoria de Impacto",
    role_1_desc: "Diseñando maquetas de alta fidelidad, estructurando pitch decks y alineando tendencias macroeconómicas con software interactivo fintech.",
    role_2_desc: "Vinculé gráficos de regresión económica con interfaces web de paneles de control, incrementando la usabilidad de la plataforma en un 42%.",
    role_3_desc: "Diseñé maquetas web de alta fidelidad, estructuré microinteracciones y formulé campañas de expansión digital para startups locales.",
    
    contact_subtitle: "Contacto",
    contact_title: "Iniciar una Colaboración",
    contact_desc: "¿Buscas escalar un producto, discutir datos macroeconómicos o necesitas un sistema de diseño estético? Deja un mensaje abajo.",
    contact_name_placeholder: "Nombre Completo",
    contact_email_placeholder: "Correo Electrónico",
    contact_message_placeholder: "Cuéntame sobre tu proyecto o consulta...",
    contact_submit: "Enviar Consulta Segura",
    contact_success: "¡Mensaje enviado con éxito! Me pondré en contacto en 24 horas.",
    
    marquee_cta: "¡HABLEMOS! 💬",
    marquee_base: "DISEÑO · ESTRATEGIA · INVESTIGACIÓN · BRANDING · ",
    cursor_view_case: "VER CASO ↗",
    cursor_theme: "TEMA ☀️",
    cursor_lang: "IDIOMA 🌐",
    cursor_explore: "EXPLORAR 🔍",
    cursor_write: "ESCRIBIR ✏️",
    cursor_send: "ENVIAR 🚀",
    cursor_visit: "VISITAR 🔗",
    cursor_talk: "¡HABLAR! 💬",
    
    footer_copyright: "&copy; 2026 Victor Gbayesola. Curado con absoluta precisión de diseñador."
  }
};

function initLanguageEngine() {
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  
  // Toggle active language switch pills
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`lang-${lang}`);
  if (activeBtn) activeBtn.classList.add('active');
  
  // Query all translatable nodes
  const nodes = document.querySelectorAll('[data-translate]');
  nodes.forEach(node => {
    const key = node.getAttribute('data-translate');
    const translation = TRANSLATIONS[lang][key];
    
    if (translation) {
      // If translation has HTML code inside, use innerHTML
      if (translation.includes('<')) {
        node.innerHTML = translation;
      } else {
        node.textContent = translation;
      }
      
      // Update form placeholders if input or label
      if (node.tagName === 'LABEL') {
        const inputId = node.getAttribute('for');
        const input = document.getElementById(inputId);
        if (input) {
          input.setAttribute('placeholder', ' ');
        }
      }
    }
  });

  // Update dynamic translations inside interactive marquee
  updateInteractiveMarqueeContent();

  // Highlight active link in header if applicable
  updateActiveNavigationItem();

  // Make hero title characters elastic bouncy
  const heroHeadline = document.getElementById('hero-headline');
  if (heroHeadline) {
    makeTextBouncy(heroHeadline);
  }
}

/* ==========================================================================
   3. HIGH-PERFORMANCE MOUSE GLOW TRACKER (60FPS THROTTLED)
   ========================================================================== */
function initCursorGlow() {
  const glowElement = document.getElementById('cursor-glow');
  if (!glowElement) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  let isMoving = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (!isMoving) {
      glowElement.style.opacity = '1';
      isMoving = true;
      requestAnimationFrame(updateGlowPosition);
    }
  });

  function updateGlowPosition() {
    // Soft interpolation for micro-fluid glide inertia
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
    
    glowElement.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    
    // Continue animating if mouse coordinates are not perfectly aligned
    if (Math.abs(mouseX - currentX) > 0.1 || Math.abs(mouseY - currentY) > 0.1) {
      requestAnimationFrame(updateGlowPosition);
    } else {
      isMoving = false;
    }
  }
}

/* ==========================================================================
   4. CINEMATIC AUTOMATIC HORIZONTAL SCROLL SLIDER
   ========================================================================== */
function initHorizontalScroll() {
  const section = document.getElementById('projects');
  const track = document.getElementById('projects-slide-track');
  if (!section || !track) return;

  let translate = 0;
  let direction = 1; // 1 = right, -1 = left
  let isHovered = false;
  let isIntersecting = false;
  let animationId = null;

  // Track hover status
  track.addEventListener('mouseenter', () => { isHovered = true; });
  track.addEventListener('mouseleave', () => { isHovered = false; });
  
  // Track touch/mobile status
  track.addEventListener('touchstart', () => { isHovered = true; });
  track.addEventListener('touchend', () => { isHovered = false; });

  function autoGlide() {
    if (isIntersecting && !isHovered) {
      const trackWidth = track.scrollWidth;
      const containerWidth = section.offsetWidth;
      // Subtract container width to get scrollable distance, add 40px for margin
      const maxScroll = trackWidth - containerWidth + 40;

      if (maxScroll > 0) {
        // Ultra-smooth slow cinematic scroll (0.5px per frame)
        translate += 0.5 * direction;

        if (translate >= maxScroll) {
          translate = maxScroll;
          direction = -1; // Glide back left
        } else if (translate <= 0) {
          translate = 0;
          direction = 1; // Glide right
        }

        track.style.transform = `translate3d(-${translate}px, 0, 0)`;
      }
    }
    
    // Only continue RAF loop if visible
    if (isIntersecting) {
      animationId = requestAnimationFrame(autoGlide);
    }
  }

  // Intersection Observer to stop the loop when off-screen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isIntersecting = entry.isIntersecting;
      if (isIntersecting) {
        if (!animationId) {
          animationId = requestAnimationFrame(autoGlide);
        }
      } else {
        if (animationId) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
      }
    });
  }, { threshold: 0.05 });

  observer.observe(section);
}

/* ==========================================================================
   5. INTERACTIVE MUSIC PLAYER BENTO WIDGET
   ========================================================================== */
function initMusicVibeWidget() {
  const playPauseBtn = document.querySelector('.play-pause-btn');
  const vinylDisc = document.querySelector('.vinyl-disc');
  const visualizerBars = document.querySelectorAll('.music-bars-anim span');
  
  if (!playPauseBtn || !vinylDisc) return;
  
  let isPlaying = true; // Spinning by default
  
  playPauseBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    
    if (isPlaying) {
      // Play / Spin
      playPauseBtn.className = 'fa-solid fa-pause play-pause-btn';
      vinylDisc.classList.add('spinning');
      visualizerBars.forEach(bar => bar.style.animationPlayState = 'running');
    } else {
      // Pause
      playPauseBtn.className = 'fa-solid fa-play play-pause-btn';
      vinylDisc.classList.remove('spinning');
      visualizerBars.forEach(bar => bar.style.animationPlayState = 'paused');
    }
  });
}

/* ==========================================================================
   6. CONTACT FORM CONTROLLER
   ========================================================================== */
function handleFormSubmit(event) {
  event.preventDefault();
  
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = submitBtn.querySelector('span');
  const successAlert = document.getElementById('form-success');
  
  if (!form || !submitBtn) return;
  
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const message = document.getElementById('contact-message').value;

  // Animate button sending state
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.7';
  const originalText = btnText.textContent;
  const currentLang = localStorage.getItem('lang') || 'en';
  btnText.textContent = currentLang === 'en' ? "Transmitting..." : "Transmitiendo...";
  
  // Real API post request to node backend
  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, message })
  })
  .then(response => {
    if (!response.ok) throw new Error('API submission failed');
    return response.json();
  })
  .then(data => {
    successAlert.style.display = 'flex';
    form.reset();
    
    // Restore button values
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    btnText.textContent = originalText;
    
    // Automatically fade out success state after 4 seconds
    setTimeout(() => {
      successAlert.style.opacity = '0';
      setTimeout(() => {
        successAlert.style.display = 'none';
        successAlert.style.opacity = '1';
      }, 500);
    }, 4000);
  })
  .catch(err => {
    console.error("Transmission error:", err);
    btnText.textContent = currentLang === 'en' ? "Error!" : "¡Error!";
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
      btnText.textContent = originalText;
    }, 2000);
  });
}

/* ==========================================================================
   7. MOBILE NAVIGATION DRAMA
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const menu = document.getElementById('main-navigation');
  const links = document.querySelectorAll('.nav-item');
  
  if (!toggleBtn || !menu) return;
  
  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    menu.classList.toggle('active');
    
    // Block main body scrolling when overlay is active
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
  });
  
  links.forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('active');
      menu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ==========================================================================
   8. ACTIVE NAV LINK ON SCROLL (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollIntersectionReveals() {
  const sections = document.querySelectorAll('.grid-section, .projects-section-horizontal');
  const navItems = document.querySelectorAll('.nav-item');
  
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // strict viewport trigger window
    threshold: 0
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(item => {
          const href = item.getAttribute('href').substring(1);
          if (href === id) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);
  
  sections.forEach(sec => observer.observe(sec));
}

function updateActiveNavigationItem() {
  // Force sync visual states on language shift
  const hash = window.location.hash;
  if (!hash) return;
  
  document.querySelectorAll('.nav-item').forEach(item => {
    if (item.getAttribute('href') === hash) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

/* ==========================================================================
   9. DYNAMIC TEXT CURSOR FOLLOWER (FANCY.DESIGN STYLE)
   ========================================================================== */
function initCursorFollower() {
  const follower = document.getElementById('cursor-follower');
  const textEl = follower ? follower.querySelector('.cursor-text') : null;
  if (!follower || !textEl) return;

  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;
  let isActive = false;
  let isMoving = false;

  // Track coordinates
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (!isActive) {
      follower.classList.add('active');
      isActive = true;
    }
    
    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(updateFollowerPosition);
    }
  });

  // Hide cursor when leaving window bounds
  document.addEventListener('mouseleave', () => {
    follower.classList.remove('active');
    isActive = false;
  });

  function updateFollowerPosition() {
    // Smooth fluid glide trailing behind actual cursor
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    
    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
    
    if (Math.abs(mouseX - followerX) > 0.1 || Math.abs(mouseY - followerY) > 0.1) {
      requestAnimationFrame(updateFollowerPosition);
    } else {
      isMoving = false;
    }
  }

  // Bind hover triggers to DOM elements
  bindCursorHoverEvents();
}

function bindCursorHoverEvents() {
  const follower = document.getElementById('cursor-follower');
  const textEl = follower ? follower.querySelector('.cursor-text') : null;
  if (!follower || !textEl) return;

  function getTranslation(key) {
    const lang = localStorage.getItem('lang') || 'en';
    return TRANSLATIONS[lang][key] || "";
  }

  // Hover mapping definitions
  const hoverMappings = [
    { selector: '.project-slide-card', key: 'cursor_view_case', type: 'expanded' },
    { selector: '.bento-card', key: 'cursor_explore', type: 'expanded' },
    { selector: '.habit-card', key: 'cursor_explore', type: 'expanded' },
    { selector: '.theme-toggle-btn', key: 'cursor_theme', type: 'expanded' },
    { selector: '.lang-btn', key: 'cursor_lang', type: 'expanded' },
    { selector: '#marquee-banner', key: 'cursor_talk', type: 'expanded' },
    { selector: '#submit-btn', key: 'cursor_send', type: 'expanded' },
    { selector: '.direct-link, .footer-links a, .brand-logo', key: 'cursor_visit', type: 'expanded' },
    { selector: 'input, textarea', key: 'cursor_write', type: 'small-expand' }
  ];

  // Helper to attach event listeners
  hoverMappings.forEach(map => {
    document.querySelectorAll(map.selector).forEach(el => {
      el.addEventListener('mouseenter', () => {
        const textValue = getTranslation(map.key);
        textEl.textContent = textValue;
        
        follower.className = 'cursor-follower active'; // reset classes
        follower.classList.add(map.type);
      });
      
      el.addEventListener('mouseleave', () => {
        follower.className = 'cursor-follower active'; // back to default dot
        textEl.textContent = '';
      });
      
      // Dynamic update helper if hovered while language toggles
      el.addEventListener('mousemove', () => {
        if (follower.classList.contains('expanded') || follower.classList.contains('small-expand')) {
          const textValue = getTranslation(map.key);
          if (textEl.textContent !== textValue) {
            textEl.textContent = textValue;
          }
        }
      });
    });
  });
}

/* ==========================================================================
   10. INTERACTIVE MARQUEE BANNER (FANCY.DESIGN STYLE)
   ========================================================================== */
function initInteractiveMarquee() {
  const banner = document.getElementById('marquee-banner');
  const track = document.getElementById('marquee-track');
  if (!banner || !track) return;

  let isHovered = false;

  banner.addEventListener('mouseenter', () => {
    isHovered = true;
    updateInteractiveMarqueeContent();
  });

  banner.addEventListener('mouseleave', () => {
    isHovered = false;
    updateInteractiveMarqueeContent();
  });
  
  // Also support touch inputs
  banner.addEventListener('touchstart', () => {
    isHovered = true;
    updateInteractiveMarqueeContent();
  });
  banner.addEventListener('touchend', () => {
    isHovered = false;
    updateInteractiveMarqueeContent();
  });

  // Initial population
  updateInteractiveMarqueeContent();

  // Intersection Observer to pause animation when offscreen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        track.style.animationPlayState = 'running';
      } else {
        track.style.animationPlayState = 'paused';
      }
    });
  }, { threshold: 0.01 });

  observer.observe(banner);
}

function updateInteractiveMarqueeContent() {
  const banner = document.getElementById('marquee-banner');
  const track = document.getElementById('marquee-track');
  if (!banner || !track) return;

  const isHovered = banner.matches(':hover') || banner.classList.contains('touching'); // fallback
  const lang = localStorage.getItem('lang') || 'en';
  
  let labelText = TRANSLATIONS[lang]['marquee_base'];
  if (banner.matches(':hover')) {
    labelText = TRANSLATIONS[lang]['marquee_cta'] + " · ";
  }

  // Populate track with repeated elements to ensure smooth infinite loop coverage
  track.innerHTML = '';
  const repeatCount = 20; // safe loop width fill
  for (let i = 0; i < repeatCount; i++) {
    const item = document.createElement('span');
    item.className = 'marquee-item';
    item.innerHTML = labelText;
    track.appendChild(item);
  }
}

function scrollToContact() {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ==========================================================================
   11. ARCTIC FLOATING ICE CRYSTALS ENGINE (IGLOO.INC STYLE)
   ========================================================================== */
function initArcticParticles() {
  const container = document.getElementById('arctic-particles');
  const footer = document.querySelector('.app-footer');
  if (!container || !footer) return;

  let particlesCreated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        container.style.display = 'block';
        if (!particlesCreated) {
          createParticles();
          particlesCreated = true;
        }
      } else {
        container.style.display = 'none';
      }
    });
  }, { threshold: 0.01 });

  observer.observe(footer);

  function createParticles() {
    const particleCount = 20;
    const containerWidth = container.offsetWidth || window.innerWidth;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'ice-crystal';

      // Randomize ice crystal parameters
      const size = Math.random() * 4 + 2; // 2px to 6px
      const startX = Math.random() * containerWidth;
      const driftX = (Math.random() - 0.5) * 80; // random side drift
      const duration = Math.random() * 8 + 6; // 6s to 14s drift time
      const delay = Math.random() * -12; // negative delay to start pre-populated!
      const maxOpacity = Math.random() * 0.4 + 0.15; // 0.15 to 0.55 opacity

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${startX}px`;
      
      // Set custom CSS variables for keyframe animations
      particle.style.setProperty('--drift-duration', `${duration}s`);
      particle.style.setProperty('--drift-delay', `${delay}s`);
      particle.style.setProperty('--drift-x', `${driftX}px`);
      particle.style.setProperty('--max-opacity', maxOpacity);

      container.appendChild(particle);
    }
  }

  // Handle resizing of containment bounds
  window.addEventListener('resize', () => {
    if (!particlesCreated) return;
    const crystals = container.querySelectorAll('.ice-crystal');
    const width = container.offsetWidth || window.innerWidth;
    crystals.forEach(c => {
      c.style.left = `${Math.random() * width}px`;
    });
  });
}

/* ==========================================================================
   12. TYPEWRITER PRELOADER & ELASTIC TYPOGRAPHY SYSTEMS
   ========================================================================== */

function initPreloader() {
  const preloader = document.getElementById('preloader');
  const typewriterText = document.getElementById('typewriter-text');
  if (!preloader || !typewriterText) return;

  const lang = localStorage.getItem('lang') || 'en';
  const textToType = TRANSLATIONS[lang] ? TRANSLATIONS[lang]['preloader_text'] : TRANSLATIONS['en']['preloader_text'];
  
  typewriterText.innerHTML = '';
  let index = 0;

  function typeCharacter() {
    if (index < textToType.length) {
      const char = textToType[index];
      const charSpan = document.createElement('span');
      charSpan.className = 'preloader-char';
      
      if (char === ' ') {
        charSpan.innerHTML = '&nbsp;';
      } else {
        charSpan.textContent = char;
      }
      
      typewriterText.appendChild(charSpan);
      index++;
      // Premium typing pacing
      setTimeout(typeCharacter, 60);
    } else {
      // Typing finished, wait, then trigger elastic staggered letter bounce
      setTimeout(triggerPreloaderBounceWave, 250);
    }
  }

  function triggerPreloaderBounceWave() {
    const chars = typewriterText.querySelectorAll('.preloader-char');
    chars.forEach((char, i) => {
      char.style.animationDelay = `${i * 0.03}s`;
      char.classList.add('bounce');
    });

    // Stagger slide up transition of preloader overlay screen after bounce completes
    setTimeout(dismissPreloader, 1300);
  }

  function dismissPreloader() {
    preloader.classList.add('fade-out');
    document.body.classList.remove('preloading');
  }

  // Initiate typewriter
  setTimeout(typeCharacter, 400);
}

/**
 * Parses an element's DOM recursively, wrapping raw text words in word spans, 
 * and characters in character spans. Preserves structural wrapper markup such as styling tags.
 * This prevents text split layouts from breaking words across multiple lines.
 */
function makeTextBouncy(element) {
  if (!element) return;

  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      const parts = text.split(/(\s+)/);
      const fragment = document.createDocumentFragment();
      
      parts.forEach(part => {
        if (part === '') return;
        if (/^\s+$/.test(part)) {
          fragment.appendChild(document.createTextNode(part));
        } else {
          const wordSpan = document.createElement('span');
          wordSpan.className = 'bouncy-word';
          
          for (let i = 0; i < part.length; i++) {
            const char = part[i];
            const charSpan = document.createElement('span');
            charSpan.className = 'bouncy-char';
            charSpan.textContent = char;
            wordSpan.appendChild(charSpan);
          }
          fragment.appendChild(wordSpan);
        }
      });
      return fragment;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const childNodes = Array.from(node.childNodes);
      node.innerHTML = '';
      childNodes.forEach(child => {
        node.appendChild(processNode(child));
      });
      return node;
    }
    return node;
  }
  
  const childNodes = Array.from(element.childNodes);
  element.innerHTML = '';
  childNodes.forEach(child => {
    element.appendChild(processNode(child));
  });
}
