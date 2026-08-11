/* ==========================================================================
   VICTOR GBAYESOLA — PORTFOLIO CORE ENGINE (RADNAABAZAR STYLE)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Lock scroll on load for preloader
  document.body.classList.add('preloading');
  window.scrollTo(0, 0);

  initLenisScroll();
  initPreloader();
  initThemeEngine();
  initLanguageEngine();
  initCursorGlow();
  initCursorFollower(); // Fancy.design cursor
  initFloatingEcosystem(); // Parallax floating UI in hero
  initStackedCards(); // GSAP ScrollTrigger Stacked Cards
  initAnimatedTestimonials(); // Interactive client reviews slider
  initNichesHoverSlider(); // Redesigned services hover slider
  initScrollRockAnimation(); // Floating lava rock animation
  initMusicVibeWidget();
  initMobileNavigation();
  initScrollIntersectionReveals();
  initTimelinePathing(); // Glowing career timeline progress line
  initInteractiveMarquee(); // Fancy.design marquee
  initTextScrambler(); // Hover text scrambler
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
    preloader_text: "hey there — let's build something",
    nav_about: "About",
    nav_projects: "Work",
    nav_habits: "Life Hub",
    nav_experience: "Experience",
    nav_contact: "Contact",
    
    hero_status: "Open to New Projects",
    hero_title: "I design digital products that <span class='accent-gradient'>look sharp, work hard, and grow fast</span>.",
    hero_subtitle: "Multidisciplinary designer blending user research, visual craft, and business thinking to build products people actually love using.",
    hero_location: "Lagos, Nigeria — Working Globally",
    hero_focus: "Design × Research × Strategy",
    hero_cta_projects: "See My Work",
    hero_cta_contact: "Start a Project",
    
    badge_mvps: "Designed & Shipped",
    
    about_subtitle: "What I Do",
    about_heading: "Three Disciplines. One Designer.",
    about_ux_title: "UX & Interface Design",
    about_ux_desc: "I craft pixel-perfect interfaces, scalable design systems, and thoughtful micro-interactions — the kind of details that turn first-time visitors into loyal users.",
    about_econ_title: "Research & Data",
    about_econ_desc: "I ground every design decision in real user data. Behavioral research, usability testing, and analytics help me build interfaces that perform — not just look good.",
    about_strategy_title: "Brand & Growth Strategy",
    about_strategy_desc: "From pitch decks that close rounds to brand systems that scale — I help founders translate complex ideas into visual stories investors and customers believe in.",
    
    projects_subtitle: "Selected Work",
    projects_title: "Case Studies",
    projects_hint: "Hover to preview each project.",
    
    project_1_title: "QuickBite",
    project_1_cat: "Mobile App — UX/UI",
    project_1_desc: "Redesigned the entire ordering experience for a fast-growing food delivery brand. Streamlined checkout, introduced smart rewards, and reduced user drop-off by 35%.",
    project_1_tool_1: "Product Design",
    project_1_tool_2: "Mobile UX",
    project_1_tool_3: "Prototyping",
    
    project_2_title: "Pulse Analytics",
    project_2_cat: "Dashboard — Data Viz",
    project_2_desc: "Built an interactive analytics dashboard that makes complex economic data accessible. Designed clear visual hierarchies for metrics, trends, and behavioral patterns.",
    project_2_tool_1: "Data Visualization",
    project_2_tool_2: "UX Research",
    project_2_tool_3: "Dashboard UI",
    
    project_3_title: "Ventura",
    project_3_cat: "Brand & Pitch Strategy",
    project_3_desc: "Created the complete brand identity and investor pitch materials for a venture-backed startup ecosystem. Helped secure seed-stage funding through strategic visual storytelling.",
    project_3_tool_1: "Brand Identity",
    project_3_tool_2: "Pitch Design",
    project_3_tool_3: "Visual Strategy",
    
    view_case: "View Case Study",
    
    habits_subtitle: "Beyond the Screen",
    habits_title: "How I Spend My Days",
    habits_desc: "Design is what I do. Here's who I am outside of it.",
    
    routine_title: "A Typical Day",
    routine_run: "Morning Run (5K)",
    routine_brew: "Espresso + Deep Work",
    routine_figma: "Design Sprints in Figma",
    routine_econ: "Research & Data Analysis",
    routine_guitar: "Guitar & Downtime",
    
    stats_title: "By the Numbers",
    stat_coffee: "Cups of Coffee This Year",
    stat_books: "Books Read (Goal: 24)",
    stat_figma: "Figma Components Shipped",
    stat_anime: "Episodes Watched",
    
    music_title: "Currently Playing",
    goals_title: "On the Roadmap",
    goal_1: "Become fluent in Spanish 🇪🇸",
    goal_2: "Ship a machine learning project 🐍",
    goal_3: "Solo trek through Kyoto 🇯🇵",
    
    exp_subtitle: "Experience",
    exp_title: "Where I've Been",
    role_1_desc: "Leading end-to-end product design for startups and venture-backed companies. Designing interfaces, building design systems, and crafting pitch decks that help founders raise.",
    role_2_desc: "Turned complex data into usable interfaces. Led UX research that improved dashboard usability and task completion rates by 42%.",
    role_3_desc: "Cut my teeth designing for fast-moving startups — wireframes, prototypes, user flows, and everything in between.",
    
    contact_subtitle: "Let's Talk",
    contact_title: "Have a project in mind?",
    contact_desc: "Whether you need a product designed from scratch, a brand system that scales, or a pitch deck that closes — I'd love to hear about it.",
    contact_name_placeholder: "Your Name",
    contact_email_placeholder: "Email Address",
    contact_message_placeholder: "Tell me about your project...",
    contact_submit: "Send Message",
    contact_success: "Got it! I'll get back to you within 24 hours.",
    
    marquee_cta: "LET'S TALK 💬",
    marquee_base: "DESIGN · STRATEGY · RESEARCH · BRANDING · ",
    cursor_view_case: "VIEW ↗",
    cursor_theme: "THEME ☀️",
    cursor_lang: "LANGUAGE 🌐",
    cursor_explore: "EXPLORE 🔍",
    cursor_write: "WRITE ✏️",
    cursor_send: "SEND 🚀",
    cursor_visit: "VISIT 🔗",
    cursor_talk: "LET'S GO 💬",
    
    metrics_tagline: "I don't just make things look good — I make them work. Research-driven design that moves metrics and grows brands.",
    metric_1_num: "50+",
    metric_1_title: "Products Shipped",
    metric_1_desc: "From first wireframe to production launch — complete visual systems designed to convert and scale.",
    metric_2_num: "100%",
    metric_2_title: "Pixel Precision",
    metric_2_desc: "Every layout, every interaction, every component — designed with obsessive attention to detail.",
    metric_3_num: "5+",
    metric_3_title: "Years in the Game",
    metric_3_desc: "Half a decade of partnering with ambitious founders to turn complex problems into elegant, user-friendly products.",
    
    expertise_sidebar_top: "WHAT I DO",
    expertise_sidebar_bottom: "End-to-end creative execution for digital products",
    service_1: "Web Design",
    service_2: "Web Development",
    service_3: "Brand Identity",
    service_4: "3D Design",
    service_5: "Art Direction",
    
    methodology_subtitle: "How I Work",
    methodology_title: "Every great product starts with a clear process. Here's mine.",
    phase_1_num: "01",
    phase_1_title: "Research & Discovery",
    phase_1_desc: "Before I touch Figma, I dig into the problem. User interviews, competitive analysis, data review — I build on evidence, not assumptions.",
    phase_2_num: "02",
    phase_2_title: "Design & Build",
    phase_2_desc: "I design responsive, component-driven systems from scratch. Clean layouts, intentional hierarchy, smooth interactions — every pixel earns its place.",
    phase_3_num: "03",
    phase_3_title: "Launch & Grow",
    phase_3_desc: "Good design is a growth lever. I help founders package their vision into pitch decks that raise, MVPs that convert, and brands that stick.",
    
    testimonials_subtitle: "Kind Words",
    testimonials_title: "Don't take my word for it.",
    review_1_quote: '"Victor redesigned our entire checkout flow and the results were immediate — 35% fewer drop-offs in the first month. He doesn\'t just design pretty screens, he solves real problems."',
    review_1_author: "Sarah Chen",
    review_1_role: "Co-Founder & COO, QuickBite",
    review_2_quote: '"Finding a designer who genuinely understands data is rare. Victor built us a dashboard that\'s not just beautiful — it\'s the most functional analytics tool our team has ever used."',
    review_2_author: "Marcus Vance",
    review_2_role: "VP of Product, Pulse Analytics",
    review_3_quote: '"Victor helped us close our seed round. His pitch deck design and brand system gave investors the confidence that our product was as strong as our vision."',
    review_3_author: "Elena Rostova",
    review_3_role: "Founder, Ventura Ecosystems",
    
    footer_copyright: "&copy; 2026 Victor Gbayesola. Designed with care, built with intent."
  },
  es: {
    preloader_text: "hey — vamos a crear algo grande",
    nav_about: "Sobre Mí",
    nav_projects: "Trabajo",
    nav_habits: "Mi Día a Día",
    nav_experience: "Trayectoria",
    nav_contact: "Contacto",
    
    hero_status: "Disponible para Nuevos Proyectos",
    hero_title: "Diseño productos digitales que <span class='accent-gradient'>se ven bien, funcionan mejor y crecen rápido</span>.",
    hero_subtitle: "Diseñador multidisciplinario que combina investigación de usuarios, diseño visual y pensamiento estratégico para crear productos que la gente realmente disfruta usar.",
    hero_location: "Lagos, Nigeria — Trabajo Global",
    hero_focus: "Diseño × Investigación × Estrategia",
    hero_cta_projects: "Ver Mi Trabajo",
    hero_cta_contact: "Iniciar un Proyecto",
    
    badge_mvps: "Diseñados y Lanzados",
    
    about_subtitle: "Lo Que Hago",
    about_heading: "Tres Disciplinas. Un Diseñador.",
    about_ux_title: "Diseño UX e Interfaces",
    about_ux_desc: "Creo interfaces pixel-perfect, sistemas de diseño escalables y micro-interacciones cuidadas — el tipo de detalles que convierten visitantes en usuarios leales.",
    about_econ_title: "Investigación y Datos",
    about_econ_desc: "Cada decisión de diseño está fundamentada en datos reales. Investigación de comportamiento, pruebas de usabilidad y analítica me ayudan a crear interfaces que rinden — no solo lucen bien.",
    about_strategy_title: "Marca y Estrategia de Crecimiento",
    about_strategy_desc: "Desde pitch decks que cierran rondas hasta sistemas de marca que escalan — ayudo a fundadores a traducir ideas complejas en historias visuales que inversores y clientes creen.",
    
    projects_subtitle: "Trabajo Selecto",
    projects_title: "Casos de Estudio",
    projects_hint: "Pasa el cursor para previsualizar cada proyecto.",
    
    project_1_title: "QuickBite",
    project_1_cat: "App Móvil — UX/UI",
    project_1_desc: "Rediseñé la experiencia completa de pedidos para una marca de comida en rápido crecimiento. Simplifiqué el checkout, introduje recompensas inteligentes y reduje el abandono un 35%.",
    project_1_tool_1: "Diseño de Producto",
    project_1_tool_2: "UX Móvil",
    project_1_tool_3: "Prototipado",
    
    project_2_title: "Pulse Analytics",
    project_2_cat: "Dashboard — Visualización",
    project_2_desc: "Construí un dashboard analítico interactivo que hace accesibles datos económicos complejos. Diseñé jerarquías visuales claras para métricas, tendencias y patrones.",
    project_2_tool_1: "Visualización de Datos",
    project_2_tool_2: "Investigación UX",
    project_2_tool_3: "Interfaz Dashboard",
    
    project_3_title: "Ventura",
    project_3_cat: "Marca y Estrategia de Pitch",
    project_3_desc: "Creé la identidad de marca completa y materiales de pitch para un ecosistema de startups respaldado por inversores. Ayudé a asegurar financiación pre-semilla con storytelling visual.",
    project_3_tool_1: "Identidad de Marca",
    project_3_tool_2: "Diseño de Pitch",
    project_3_tool_3: "Estrategia Visual",
    
    view_case: "Ver Caso de Estudio",
    
    habits_subtitle: "Más Allá de la Pantalla",
    habits_title: "Cómo Paso Mis Días",
    habits_desc: "El diseño es lo que hago. Esto es quién soy fuera de él.",
    
    routine_title: "Un Día Típico",
    routine_run: "Carrera Matutina (5K)",
    routine_brew: "Espresso + Trabajo Profundo",
    routine_figma: "Sprints de Diseño en Figma",
    routine_econ: "Investigación y Análisis",
    routine_guitar: "Guitarra y Descanso",
    
    stats_title: "En Números",
    stat_coffee: "Tazas de Café Este Año",
    stat_books: "Libros Leídos (Meta: 24)",
    stat_figma: "Componentes Figma Entregados",
    stat_anime: "Episodios Vistos",
    
    music_title: "Sonando Ahora",
    goals_title: "En la Hoja de Ruta",
    goal_1: "Hablar español con fluidez 🇪🇸",
    goal_2: "Lanzar un proyecto de machine learning 🐍",
    goal_3: "Trekking en solitario por Kioto 🇯🇵",
    
    exp_subtitle: "Experiencia",
    exp_title: "Mi Trayectoria",
    role_1_desc: "Liderando diseño de producto de principio a fin para startups y empresas respaldadas por venture capital. Interfaces, sistemas de diseño y pitch decks que ayudan a fundadores a levantar rondas.",
    role_2_desc: "Convertí datos complejos en interfaces utilizables. Lideré investigación UX que mejoró la usabilidad del dashboard y las tasas de completado un 42%.",
    role_3_desc: "Empecé diseñando para startups en rápido movimiento — wireframes, prototipos, flujos de usuario y todo lo intermedio.",
    
    contact_subtitle: "Hablemos",
    contact_title: "¿Tienes un proyecto en mente?",
    contact_desc: "Ya sea que necesites diseñar un producto desde cero, un sistema de marca que escale, o un pitch deck que cierre — me encantaría escucharte.",
    contact_name_placeholder: "Tu Nombre",
    contact_email_placeholder: "Correo Electrónico",
    contact_message_placeholder: "Cuéntame sobre tu proyecto...",
    contact_submit: "Enviar Mensaje",
    contact_success: "¡Recibido! Te responderé en menos de 24 horas.",
    
    marquee_cta: "¡HABLEMOS! 💬",
    marquee_base: "DISEÑO · ESTRATEGIA · INVESTIGACIÓN · MARCA · ",
    cursor_view_case: "VER ↗",
    cursor_theme: "TEMA ☀️",
    cursor_lang: "IDIOMA 🌐",
    cursor_explore: "EXPLORAR 🔍",
    cursor_write: "ESCRIBIR ✏️",
    cursor_send: "ENVIAR 🚀",
    cursor_visit: "VISITAR 🔗",
    cursor_talk: "¡VAMOS! 💬",
    
    metrics_tagline: "No solo hago que las cosas se vean bien — hago que funcionen. Diseño basado en investigación que mueve métricas y hace crecer marcas.",
    metric_1_num: "50+",
    metric_1_title: "Productos Lanzados",
    metric_1_desc: "Del primer wireframe al lanzamiento — sistemas visuales completos diseñados para convertir y escalar.",
    metric_2_num: "100%",
    metric_2_title: "Precisión Pixel",
    metric_2_desc: "Cada layout, cada interacción, cada componente — diseñado con atención obsesiva al detalle.",
    metric_3_num: "5+",
    metric_3_title: "Años en el Juego",
    metric_3_desc: "Media década colaborando con fundadores ambiciosos para convertir problemas complejos en productos elegantes y fáciles de usar.",
    
    expertise_sidebar_top: "LO QUE HAGO",
    expertise_sidebar_bottom: "Ejecución creativa integral para productos digitales",
    service_1: "Diseño Web",
    service_2: "Desarrollo Web",
    service_3: "Identidad de Marca",
    service_4: "Diseño 3D",
    service_5: "Dirección de Arte",
    
    methodology_subtitle: "Cómo Trabajo",
    methodology_title: "Todo gran producto empieza con un proceso claro. Este es el mío.",
    phase_1_num: "01",
    phase_1_title: "Investigación y Descubrimiento",
    phase_1_desc: "Antes de tocar Figma, profundizo en el problema. Entrevistas con usuarios, análisis competitivo, revisión de datos — construyo sobre evidencia, no suposiciones.",
    phase_2_num: "02",
    phase_2_title: "Diseño y Construcción",
    phase_2_desc: "Diseño sistemas responsivos basados en componentes desde cero. Layouts limpios, jerarquía intencional, interacciones fluidas — cada píxel se gana su lugar.",
    phase_3_num: "03",
    phase_3_title: "Lanzamiento y Crecimiento",
    phase_3_desc: "El buen diseño es una palanca de crecimiento. Ayudo a fundadores a empaquetar su visión en pitch decks que levantan rondas, MVPs que convierten y marcas que perduran.",
    
    testimonials_subtitle: "Testimonios",
    testimonials_title: "No me creas a mí — escúchalos a ellos.",
    review_1_quote: '"Victor rediseñó todo nuestro flujo de checkout y los resultados fueron inmediatos — 35% menos abandonos en el primer mes. No solo diseña pantallas bonitas, resuelve problemas reales."',
    review_1_author: "Sarah Chen",
    review_1_role: "Co-Fundadora y COO, QuickBite",
    review_2_quote: '"Encontrar un diseñador que realmente entienda datos es raro. Victor nos construyó un dashboard que no solo es hermoso — es la herramienta analítica más funcional que nuestro equipo ha usado."',
    review_2_author: "Marcus Vance",
    review_2_role: "VP de Producto, Pulse Analytics",
    review_3_quote: '"Victor nos ayudó a cerrar nuestra ronda semilla. Su diseño del pitch deck y sistema de marca dieron a los inversores la confianza de que nuestro producto era tan fuerte como nuestra visión."',
    review_3_author: "Elena Rostova",
    review_3_role: "Fundadora, Ventura Ecosystems",
    
    footer_copyright: "&copy; 2026 Victor Gbayesola. Diseñado con cuidado, construido con intención."
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
  
  // Clear any cached scramble texts so they are recaptured in the new language
  document.querySelectorAll('[data-scramble-original]').forEach(el => {
    el.removeAttribute('data-scramble-original');
  });
  
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
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
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
   3.5 FLOATING UI ECOSYSTEM (HERO PARALLAX)
   ========================================================================== */
function initFloatingEcosystem() {
  if (typeof gsap === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const elements = gsap.utils.toArray('.floating-ui-element');
  const heroSection = document.querySelector('.hero-section');
  if (!elements.length || !heroSection) return;

  // 1. Continuous breathing animation (subtle floating)
  elements.forEach((el, index) => {
    const yOffset = index % 2 === 0 ? 12 : -15;
    gsap.to(el, {
      y: yOffset,
      duration: 3 + (index * 0.5),
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });
  });

  // 2. Mouse Parallax Effect
  heroSection.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Normalized coordinates (-1 to 1)
    const moveX = (clientX - centerX) / centerX;
    const moveY = (clientY - centerY) / centerY;

    elements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed')) || 0.05;
      gsap.to(el, {
        x: moveX * 100 * speed * 50,
        yPercent: moveY * 100 * speed * 50,
        duration: 1.5,
        ease: "power2.out"
      });
    });
  });
}

/* ==========================================================================
   4. GSAP SCROLLTRIGGER STACKED CARDS
   ========================================================================== */
function initStackedCards() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  const cards = gsap.utils.toArray('.stacked-card');
  
  if (cards.length === 0) return;

  // We want to scale down card N as card N+1 scrolls up over it.
  cards.forEach((card, index) => {
    if (index === cards.length - 1) return; // Last card doesn't get covered

    const innerCard = card.querySelector('.card-inner');
    
    gsap.to(innerCard, {
      scale: 0.92,
      filter: "brightness(0.5)",
      ease: "none",
      scrollTrigger: {
        trigger: cards[index + 1],
        start: "top 75%", // Wait until the next card is substantially overlapping before shrinking
        end: `top top+=${120 + ((index + 1) * 40)}`, // Dynamically calculate the sticky top offset of the next card
        scrub: true
      }
    });
  });
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
  
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const originalText = btnText.textContent;

  if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
    btnText.textContent = "Please fill all fields";
    setTimeout(() => btnText.textContent = originalText, 2000);
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    return;
  }

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Animate button sending state
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.7';
  const currentLang = localStorage.getItem('lang') || 'en';
  btnText.textContent = currentLang === 'en' ? "Transmitting..." : "Transmitiendo...";
  
  // Instant Mailto Redirection (Requires no backend or API keys)
  const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n---\nSender: ${name}\nEmail: ${email}`);
  
  // Open the user's default email client (Gmail, Outlook, Mail, etc.)
  window.location.href = `mailto:gbayesolavictor@gmail.com?subject=${subject}&body=${body}`;

  // Fake a slight delay for the button animation before showing success
  setTimeout(() => {
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
  }, 800);
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
    const isActive = menu.classList.toggle('active');
    toggleBtn.classList.toggle('active', isActive);
    toggleBtn.setAttribute('aria-expanded', isActive);
    
    // Block main body scrolling when overlay is active
    document.body.style.overflow = isActive ? 'hidden' : '';
  });
  
  links.forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('active');
      menu.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      toggleBtn.classList.remove('active');
      menu.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
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
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
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
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
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
    setTimeout(dismissPreloader, 500);
  }

  function dismissPreloader() {
    preloader.classList.add('fade-out');
    document.body.classList.remove('preloading');
    if (window.lenisInstance) {
      window.lenisInstance.start();
    }
    const rock = document.getElementById('lava-rock-container');
    if (rock) {
      rock.style.opacity = document.documentElement.getAttribute('data-theme') === 'light' ? '0.12' : '0.8';
    }
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

/* ==========================================================================
   13. LENIS SMOOTH INERTIA SCROLL SYSTEM
   ========================================================================== */
window.lenisInstance = null;

function initLenisScroll() {
  if (typeof Lenis === 'undefined') return;

  window.lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  // Lock scroll during preloading
  window.lenisInstance.stop();

  function raf(time) {
    if (window.lenisInstance) {
      window.lenisInstance.raf(time);
    }
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

/* ==========================================================================
   14. INTERACTIVE HOVER TEXT SCRAMBLER (ORGNZM.STUDIO STYLE)
   ========================================================================== */
function initTextScrambler() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  
  const targets = document.querySelectorAll('.nav-item, .btn-primary, .btn-secondary, #submit-btn, .footer-links a, .direct-link');
  
  targets.forEach(target => {
    let textContainer = target;
    const innerSpan = target.querySelector('span[data-translate]');
    
    if (innerSpan) {
      textContainer = innerSpan;
    } else if (target.tagName === 'A' && target.querySelector('span')) {
      const span = target.querySelector('span');
      if (span) textContainer = span;
    }
    
    let interval = null;
    
    target.addEventListener('mouseenter', () => {
      const originalText = textContainer.getAttribute('data-scramble-original') || textContainer.textContent.trim();
      if (!textContainer.getAttribute('data-scramble-original')) {
        textContainer.setAttribute('data-scramble-original', originalText);
      }
      
      let iteration = 0;
      clearInterval(interval);
      
      interval = setInterval(() => {
        textContainer.textContent = originalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
        
        if (iteration >= originalText.length) {
          clearInterval(interval);
          textContainer.textContent = originalText;
        }
        
        iteration += 1 / 3;
      }, 30);
    });
  });
}

/* ==========================================================================
   15. INTERACTIVE TESTIMONIALS SLIDER
   ========================================================================== */
function initAnimatedTestimonials() {
  const imagesContainer = document.getElementById('anim-testim-images');
  const nameEl = document.getElementById('anim-testim-name');
  const desigEl = document.getElementById('anim-testim-desig');
  const quoteEl = document.getElementById('anim-testim-quote');
  const prevBtn = document.getElementById('anim-testim-prev');
  const nextBtn = document.getElementById('anim-testim-next');

  if (!imagesContainer || !nameEl) return;

  const testimonials = [
    {
      quote: "Victor's UI/UX redesign of our fintech app was a game-changer. He simplified complex financial data into an incredibly intuitive interface. Our user retention skyrocketed by 40%.",
      name: "Oluwaseun Adebayo",
      designation: "Founder & CEO at PayNaira",
      src: "assets/testim_oluwaseun.jpg"
    },
    {
      quote: "Victor transformed our complex checkout pipeline into a remarkably clean, high-fidelity experience. User drop-offs dropped by 35% in the first month.",
      name: "Sarah Chen",
      designation: "Co-Founder & COO at QuickBite Group",
      src: "assets/testim_sarah.jpg"
    },
    {
      quote: "His branding and visual strategy for our organic products gave us the premium feel we desperately needed. Sales doubled purely because of the new brand trust.",
      name: "Chiamaka Nwosu",
      designation: "Marketing Director at NatureEdge",
      src: "assets/testim_chiamaka.jpg"
    },
    {
      quote: "His ability to bridge quantitative behavioral research with visual dashboard systems is rare. The interface is clean, intuitive, and highly functional.",
      name: "Marcus Vance",
      designation: "VP of Product at Pulse Analytics",
      src: "assets/testim_marcus.jpg"
    },
    {
      quote: "Victor's design precision and strategic narrative helped us secure our seed funding. The investor pitch deck and visual MVP were masterfully executed.",
      name: "Elena Rostova",
      designation: "Founder at Ventura Ecosystems",
      src: "assets/testim_elena.jpg"
    }
  ];

  let active = 0;
  let autoplayInterval;

  // Generate Image Elements
  const imageElements = testimonials.map((testim, index) => {
    const img = document.createElement('img');
    img.src = testim.src;
    img.alt = testim.name;
    img.draggable = false;
    img.className = 'anim-testim-img';
    // Pre-calculate a random rotation for inactive state (-10 to 10 deg)
    img.dataset.rot = Math.floor(Math.random() * 21) - 10;
    imagesContainer.appendChild(img);
    return img;
  });

  function render() {
    // Render images
    imageElements.forEach((img, index) => {
      const isActive = index === active;
      if (isActive) {
        img.style.opacity = '1';
        img.style.transform = `scale(1) translateZ(0) rotateY(0) translateY(0)`;
        img.style.zIndex = '999';
      } else {
        img.style.opacity = '0.7';
        img.style.transform = `scale(0.95) translateZ(-100px) rotate(${img.dataset.rot}deg)`;
        img.style.zIndex = testimonials.length + 2 - index;
      }
    });

    // Render Text Wrapper Entrance
    const textWrap = document.getElementById('anim-testim-text-wrap');
    textWrap.style.opacity = '0';
    textWrap.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      nameEl.textContent = testimonials[active].name;
      desigEl.textContent = testimonials[active].designation;
      
      // Render Words (Staggered)
      quoteEl.innerHTML = '';
      const words = testimonials[active].quote.split(' ');
      words.forEach((word, index) => {
        const span = document.createElement('span');
        span.className = 'anim-testim-word';
        span.innerHTML = word + '&nbsp;';
        quoteEl.appendChild(span);
        
        // Trigger reflow and apply reveal class with stagger
        setTimeout(() => {
          span.classList.add('revealed');
        }, 20 * index);
      });

      textWrap.style.opacity = '1';
      textWrap.style.transform = 'translateY(0)';
    }, 200);
  }

  function handleNext() {
    active = (active + 1) % testimonials.length;
    render();
  }

  function handlePrev() {
    active = (active - 1 + testimonials.length) % testimonials.length;
    render();
  }

  prevBtn.addEventListener('click', () => {
    handlePrev();
    resetAutoplay();
  });
  
  nextBtn.addEventListener('click', () => {
    handleNext();
    resetAutoplay();
  });

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(handleNext, 5000);
  }

  // Initial render
  render();
  resetAutoplay();
}

/* ==========================================================================
   16. SCROLL-ANIMATED LAVA ROCK PARALLAX & BOBBING
   ========================================================================== */
function initScrollRockAnimation() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const container = document.getElementById('lava-rock-container');
  const rock = document.getElementById('lava-rock');
  if (!container || !rock) return;

  if (window.lenisInstance) {
    function tick() {
      if (!window.lenisInstance) return;
      
      const scroll = window.lenisInstance.scroll;
      
      // 1. Z-axis Rotation: Spin the rock slower/faster based on scroll position
      const targetRotation = scroll * 0.08;
      
      // 2. Parallax Shift: Slide the rock vertically slightly in opposite direction
      const targetTranslation = Math.sin(scroll * 0.0015) * 35;
      
      // 3. Passive Bobbing: Floating offset when stationary (harmonic sine wave)
      const bobbing = Math.cos(Date.now() * 0.0015) * 8;
      
      // 4. Fade Out on Scroll: Disappear as we scroll down
      const opacity = Math.max(0, 0.8 - (scroll / 1200));

      // Update styling
      rock.style.transform = `rotate(${targetRotation}deg) translateY(${targetTranslation + bobbing}px)`;
      container.style.opacity = opacity;
      
      requestAnimationFrame(tick);
    }
    
    requestAnimationFrame(tick);
  }
}

/* ==========================================================================
   17. SECTOR EXPERTISE / SERVICES SLIDER INTERACTION
   ========================================================================== */
function initNichesHoverSlider() {
  const container = document.querySelector('.niches-container-split');
  if (!container) return;

  const items = container.querySelectorAll('.niche-item');
  const imgs = container.querySelectorAll('.display-img');

  if (!items.length || !imgs.length) return;

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const targetIndex = item.getAttribute('data-service-index');

      items.forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      imgs.forEach((img, idx) => {
        if (String(idx) === targetIndex) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });
    });
  });
}

/* ==========================================================================
   18. GLOWING TIMELINE PATH PROGRESS
   ========================================================================== */
function initTimelinePathing() {
  const grid = document.querySelector('.experience-timeline-grid');
  const rows = document.querySelectorAll('.timeline-row');
  
  if (!grid || !rows.length) return;

  function updateTimeline() {
    const gridRect = grid.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // Growth boundaries
    const startTrigger = viewportHeight * 0.75;
    const endTrigger = viewportHeight * 0.25;
    
    const gridTop = gridRect.top;
    const gridHeight = gridRect.height;
    
    // Calculate progress fraction
    const scrollDist = startTrigger - gridTop;
    let progress = scrollDist / gridHeight;
    progress = Math.max(0, Math.min(1, progress));
    
    grid.style.setProperty('--timeline-progress', `${progress * 100}%`);
    
    // Light up nodes that the glowing line has reached
    rows.forEach(row => {
      const dot = row.querySelector('.marker-dot');
      if (!dot) return;
      
      const dotRect = dot.getBoundingClientRect();
      // If the dot is above the trigger line, illuminate it!
      if (dotRect.top < startTrigger) {
        row.classList.add('illuminated');
      } else {
        row.classList.remove('illuminated');
      }
    });
  }

  // Bind to Lenis scrolling for seamless updates
  if (window.lenisInstance) {
    window.lenisInstance.on('scroll', updateTimeline);
  } else {
    window.addEventListener('scroll', updateTimeline);
  }
  
  // Trigger initial check
  setTimeout(updateTimeline, 200);
}
/* ==========================================================================
   14. SKILLS TABS LOGIC
   ========================================================================== */
function initSkillsTabs() {
  const tabBtns = document.querySelectorAll('.skill-tab-btn');
  const tabPanes = document.querySelectorAll('.skill-pane');

  if (tabBtns.length === 0) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      // Add active to clicked
      btn.classList.add('active');
      const targetId = `pane-${btn.getAttribute('data-tab')}`;
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initSkillsTabs();
});
