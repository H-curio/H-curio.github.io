// ========== TRADUCCIONES ==========
const translations = {
  es: {
    heroTitle: "Bienvenido. Próximamente seré certificado oficialmente como Software Developer",
    heroText: "Exmilitar peruano con disciplina, liderazgo y resolución de problemas bajo presión. Hoy, canalizo esa misma energía en el desarrollo de software, construyendo soluciones robustas, seguras y centradas en el usuario.",
    location: "📍 Disponible en Sevilla y remoto",
    aboutTitle: "About",
    aboutText1: "Mi formación en las Fuerzas Especiales del Ejército del Perú me enseñó disciplina, liderazgo y resolución de problemas bajo presión. Hoy, aplico esas habilidades en el desarrollo de software, con un enfoque en código limpio, seguridad y escalabilidad.",
    aboutText2: "Actualmente curso la carrera de <strong>Software Development</strong> en <strong>4Geeks Academy</strong>, donde aprendo tecnologías modernas como HTML, CSS, JavaScript, React, Python y bases de datos.",
    aboutText3: "Mi objetivo: construir soluciones tecnológicas robustas, seguras y centradas en el usuario, llevando la mentalidad de ‘misión cumplida’ al mundo del código.",
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    projectsIntro: "Explora mis proyectos personales y reales. Cada uno refleja mi compromiso con la calidad y la solución de problemas reales.",
    certsTitle: "Certifications",
    certsIntro: "Ordenadas de más reciente a más antigua. Haz clic en cualquier certificado para ver detalles.",
    contactTitle: "Contact",
    contactIntro: "¿Quieres trabajar conmigo? ¡Hablemos!",
    btnProjects: "Ver Proyectos",
    btnCerts: "Ver Certificaciones",
    countdownHeader: "Tiempo hasta mi certificación oficial",
    progressStatus: "Progress",
    projectsCompleted: "Projects completed",
    status: "Status",
    active: "Active"
  },
  en: {
    heroTitle: "Welcome. I will soon be officially certified as a Software Developer",
    heroText: "Peruvian ex-military with discipline, leadership, and problem-solving skills under pressure. Today, I channel that same energy into software development, building robust, secure, and user-centered solutions.",
    location: "📍 Available in Seville and remote",
    aboutTitle: "About",
    aboutText1: "My training in the Peruvian Army Special Forces taught me discipline, leadership, and problem-solving under pressure. Today, I apply those skills to software development, with a focus on clean code, security, and scalability.",
    aboutText2: "I'm currently studying <strong>Software Development</strong> at <strong>4Geeks Academy</strong>, where I'm learning modern technologies like HTML, CSS, JavaScript, React, Python, and databases.",
    aboutText3: "My goal: to build robust, secure, and user-centered technological solutions, bringing the 'mission accomplished' mindset into the world of code.",
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    projectsIntro: "Explore my personal and real-world projects. Each one reflects my commitment to quality and solving real problems.",
    certsTitle: "Certifications",
    certsIntro: "Sorted from most recent to oldest. Click any certificate to see details.",
    contactTitle: "Contact",
    contactIntro: "Want to work with me? Let's talk!",
    btnProjects: "View Projects",
    btnCerts: "View Certifications",
    countdownHeader: "Time until my official certification",
    progressStatus: "Progress",
    projectsCompleted: "Projects completed",
    status: "Status",
    active: "Active"
  }
};

// ========== DATOS DE PROYECTOS Y CERTIFICADOS (sin traducir por ahora) ==========
const data = {
  skills: [
    { icon: 'fab fa-html5', name: 'HTML5' },
    { icon: 'fab fa-css3-alt', name: 'CSS3' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fab fa-react', name: 'React.js' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fab fa-flask', name: 'Flask' },
    { icon: 'fas fa-database', name: 'SQL' },
    { icon: 'fab fa-git-alt', name: 'Git & GitHub' },
    { icon: 'fab fa-linux', name: 'Linux' },
    { icon: 'fas fa-shield-alt', name: 'Pentesting' },
    { icon: 'fas fa-plug', name: 'APIs REST' },
    { icon: 'fas fa-key', name: 'JWT' },
    { icon: 'fab fa-wordpress', name: 'WordPress' },
    { icon: 'fas fa-microchip', name: 'Electrónica' },
    { icon: 'fas fa-mobile-alt', name: 'Reparación Móvil' }
  ],

  projects: [
    {
      title: "Reformas Profesionales en Sevilla",
      description: "Web institucional para empresa de reformas con servicios 24/7, emergencias y materiales Leroy Merlin. Incluye sección de testimonios y presupuesto express.",
      technologies: "HTML5, CSS3, JavaScript, Responsive Design",
      link: "https://h-curio.github.io/rserviciosbml/  ",
      status: "Finalizado",
      type: "Web Institucional"
    },
    {
      title: "Aplicación del Clima y Temperatura",
      description: "Muestra tiempo y temperatura en tiempo real de distintos países usando API externa. Proyecto del curso de APIs REST.",
      technologies: "JavaScript, Fetch API, HTML, CSS",
      link: "https://h-curio.github.io/proyecto_conAPIs_tiempo/",
      status: "Finalizado",
      type: "API / Consumo de Datos"
    },
    {
      title: "To-Do App",
      description: "Aplicación para organizar tareas diarias con persistencia local.",
      technologies: "React, Context API, LocalStorage",
      link: "https://github.com/H-curio/todo-app  ",
      status: "Finalizado",
      type: "Aplicación Interactiva"
    },
    {
      title: "Calculadora de IMC",
      description: "Herramienta para calcular el Índice de Masa Corporal con retroalimentación visual.",
      technologies: "JavaScript, Bootstrap",
      link: "https://github.com/H-curio/imc-calculator  ",
      status: "Finalizado",
      type: "Utilidad"
    },
    {
      title: "JS Mastery – Academia Interactiva de JavaScript",
      description: "Plataforma educativa con diccionario de métodos, ejercicios interactivos y consola integrada.",
      technologies: "HTML5, CSS3, JavaScript, LocalStorage",
      link: "#js-academy",
      status: "En desarrollo",
      type: "Educación / Herramienta Dev"
    },
    {
      title: "Lazos & Grabados – Tienda de Bisutería Artesanal",
      description: "E-commerce frontend para bisutería personalizada con opciones de grabado láser o manual.",
      technologies: "HTML5, CSS3, JavaScript, Carrito en LocalStorage",
      link: "#bisuteria",
      status: "En desarrollo",
      type: "E-commerce / Artesanía"
    }
  ],

  certifications: [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "12 de septiembre de 2025",
      images: [
        "assets/certs/introduction-to-cybersecurity.png",
        "assets/certs/cisco_intro_cibersegurity.png",
        "assets/certs/introduction-too-cybersecurity.png"
      ],
      skills: "Fundamentos de ciberseguridad, amenazas cibernéticas, protección en línea,.",
      verification: "ID: 634fb24a-e99c-4beb-a7b3-231202191d51<br><a href='https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/introduction-to-cybersecurity.html  ' target='_blank'>Verificar credencial</a>"
    },
    {
      title: "API Developer",
      issuer: "Edutin Academy",
      date: "octubre 2025",
      images: [
        "assets/certs/certificado_cursoO_JSON.jpg",
        "assets/certs/puntos_certificadojso"
      ],
      skills: "Desarrollo de APIs, seguridad en APIs, pruebas y documentación, conectividad y estructura.",
      verification: "Nota: 91/100"
    },
    {
      title: "Dominando NMAP: Escaneo de Redes",
      issuer: "Artistcode SAS",
      date: "6 de septiembre de 2025",
      image: "assets/certs/dominando_nmap.png",
      skills: "Escaneo de puertos y servicios, detección de sistemas operativos, escaneo agresivo vs pasivo, interpretación de resultados."
    },
    {
      title: "Penetration Testing: Estrategias y Técnicas",
      issuer: "Artistcode SAS",
      date: "6 de septiembre de 2025",
      image: "assets/certs/penetration_testing.png",
      skills: "Metodologías de pentesting, uso de herramientas como Nmap y Metasploit, análisis de vulnerabilidades, informes de seguridad."
    },
    {
      title: "Uso y Administración de Sistemas Linux",
      issuer: "Artistcode SAS",
      date: "6 de septiembre de 2025",
      image: "assets/certs/linux_admin.png",
      skills: "Comandos Linux, gestión de servicios, permisos de archivos, shell scripting."
    },
    {
      title: "Implementación y Optimización de Máquinas Virtuales",
      issuer: "Artistcode SAS",
      date: "6 de septiembre de 2025",
      image: "assets/certs/maquinas_virtuales.png",
      skills: "Virtualización, gestión de entornos virtuales, optimización de recursos."
    },
    {
      title: "Exploración Avanzada de Android V1",
      issuer: "Artistcode SAS",
      date: "6 de septiembre de 2025",
      image: "assets/certs/android_v1.png",
      skills: "Análisis de apps Android, técnicas de hacking móvil, herramientas de seguridad."
    },
    {
      title: "Dominando Termux V1",
      issuer: "Artistcode SAS",
      date: "6 de septiembre de 2025",
      image: "assets/certs/termux_v1.png",
      skills: "Termux como terminal en Android, instalación de herramientas de seguridad, automatización de tareas."
    },
    {
      title: "Extracción de Metadatos con FOCA",
      issuer: "Artistcode SAS",
      date: "6 de septiembre de 2025",
      image: "assets/certs/foca.png",
      skills: "Extracción de metadatos, uso de FOCA, análisis forense digital, detección de información sensible."
    },
    {
      title: "STOP THE BLEED® Course",
      issuer: "American College of Surgeons",
      date: "15 de septiembre de 2021",
      image: "assets/certs/trauma.png",
      skills: "Control de hemorragias, primeros auxilios en emergencias, manejo de DEA, RCP."
    },
    {
      title: "Electrónica Nivel Intermedio",
      issuer: "PC Leticia",
      date: "febrero 2016",
      image: "assets/certs/pc_leticia_intermedio_2016.jpg",
      skills: "Reparación avanzada de dispositivos, diagnóstico de fallas, uso de instrumentos de medición."
    },
    {
      title: "Electrónica Básica",
      issuer: "PC Leticia",
      date: "noviembre 2015",
      image: "assets/certs/pc_leticia_basico_2015.jpg",
      skills: "Soldadura de microcomponentes, diagnóstico y reparación de placas, manejo de herramientas SMD."
    },
    {
      title: "Servicio de Recepción",
      issuer: "Ministerio de Educación - C.E.T.P.",
      date: "17 de junio de 2014",
      image: "assets/certs/servicio_recepcion_2014",
      skills: "Protocolos de recepción, seguridad en eventos, atención al cliente."
    },
    {
      title: "Patrullas de Combate",
      issuer: "Ejército del Perú",
      date: "10 de enero de 2014",
      image: "assets/certs/patrullas_combate_2014.jpg",
      skills: "Tácticas de patrullaje, operaciones de combate, liderazgo bajo presión."
    },
    {
      title: "Monitor de Montaña",
      issuer: "Ejército del Perú",
      date: "25 de abril de 2014",
      image: "assets/certs/monitor_montaña_2014.jpg",
      skills: "Operaciones en terreno agreste, supervivencia, inteligencia y contra inteligencia."
    },
    {
      title: "Protección a Personas Muy Importantes (PMI)",
      issuer: "Ejército del Perú",
      date: "30 de enero de 2013",
      image: "assets/certs/curso_pmi_2013.jpg",
      skills: "Operaciones de protección, liderazgo táctico, uso de armas colativas."
    },
    {
      title: "Constancia de Servicio Militar",
      issuer: "Ejército del Perú",
      date: "2014",
      image: "assets/certs/culminacion_servicio_militar.jpg",
      skills: "Disciplina, trabajo en equipo, compromiso institucional."
    }
  ],

  contact: [
    { icon: '📧', text: 'liraacostamiguelangel@gmail.com', link: 'mailto:liraacostamiguelangel@gmail.com' },
    { icon: '💻', text: 'GitHub', link: 'https://github.com/H-curio  ' },
    { icon: '🔗', text: 'LinkedIn', link: 'https://www.linkedin.com/in/miguel-angel-lira-acosta-666651382  ' },
    { icon: '📱', text: '+34 602 63 86 53', link: 'https://wa.me/34602638653  ' }
  ]
};

// ========== CONFIGURACIÓN DINÁMICA ==========
const config = {
  bootcampStart: new Date('2024-09-01'),
  certificationDate: new Date('2026-02-04')
};

function calculateProgress() {
  const now = new Date();
  const total = config.certificationDate - config.bootcampStart;
  const elapsed = now - config.bootcampStart;
  const percent = Math.min(100, Math.max(0, Math.round((elapsed / total) * 100)));
  const projectsCompleted = Math.min(6, Math.floor(percent / 15));
  return { percent, projectsCompleted };
}

// ========== FUNCIÓN PARA CAMBIAR IDIOMA ==========
let currentLang = 'es';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Actualizar textos principales
  document.getElementById('hero-title').textContent = t.heroTitle;
  document.querySelector('.hero-content p').innerHTML = t.heroText;
  document.querySelector('.location-badge').textContent = t.location;
  document.getElementById('about-title').textContent = t.aboutTitle;
  const aboutTexts = document.querySelectorAll('.about-text p');
  aboutTexts[0].innerHTML = t.aboutText1;
  aboutTexts[1].innerHTML = t.aboutText2;
  aboutTexts[2].innerHTML = t.aboutText3;
  document.getElementById('skills-title').textContent = t.skillsTitle;
  document.getElementById('projects-title').textContent = t.projectsTitle;
  document.querySelector('#projects .container p').textContent = t.projectsIntro;
  document.getElementById('certs-title').textContent = t.certsTitle;
  document.querySelector('#certs .container p').textContent = t.certsIntro;
  document.getElementById('contact-title').textContent = t.contactTitle;
  document.querySelector('#contact .container p').textContent = t.contactIntro;
  document.querySelector('[data-target="#projects"]').textContent = t.btnProjects;
  document.querySelector('[data-target="#certs"]').textContent = t.btnCerts;
  document.querySelector('.countdown-header').textContent = t.countdownHeader;

  // Actualizar progreso
  const progress = calculateProgress();
  document.getElementById('progress-percent').textContent = progress.percent;
  document.getElementById('projects-completed').textContent = progress.projectsCompleted;

  // Actualizar botones de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ========== RENDERIZADO (sin cambios) ==========
function renderSkills() {
  const container = document.getElementById('skills-container');
  data.skills.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `<i class="${skill.icon}"></i><div>${skill.name}</div>`;
    container.appendChild(card);
  });
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  data.projects.forEach(project => {
    const statusClass = project.status === "Finalizado" ? "finalizado" : "en-desarrollo";
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>Tecnologías:</strong> ${project.technologies}</p>
      <div class="project-meta">
        <span class="status ${statusClass}">${project.status}</span>
        <span class="type">${project.type}</span>
      </div>
      <a href="${project.link}" target="_blank" rel="noopener">Ver proyecto</a>
    `;
    container.appendChild(card);
  });
}

function renderCertifications() {
  const container = document.getElementById('certs-container');
  data.certifications.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.innerHTML = `
      <h3>${cert.title}</h3>
      <span class="issuer">${cert.issuer}</span>
      <span class="date">${cert.date}</span>
    `;
    card.addEventListener('click', () => openModal(cert));
    container.appendChild(card);
  });
}

function renderContact() {
  const container = document.getElementById('contact-links');
  data.contact.forEach(item => {
    const link = document.createElement('div');
    link.className = 'contact-link';
    if (item.link) {
      link.innerHTML = `<span>${item.icon}</span> <a href="${item.link}" target="_blank" rel="noopener">${item.text}</a>`;
    } else {
      link.innerHTML = `<span>${item.icon}</span> ${item.text}`;
    }
    container.appendChild(link);
  });
}

// ========== RESTO DE FUNCIONES (contador, terminal, modal, etc.) ==========
function updateCountdown() {
  const now = new Date().getTime();
  const distance = config.certificationDate.getTime() - now;
  if (distance < 0) {
    document.getElementById('countdown').innerHTML = "<div class='countdown-item'><span class='countdown-number'>Certificado!</span></div>";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

const terminalText = document.getElementById('terminal-text');
const lines = ["> npm run dev", "> Building project...", "> Success! Server running at http://localhost:3000", "> Welcome, Miguel Angel.", "> Your mission: Build secure, user-centered software.", ""];
let currentLineIndex = 0;
let currentCharIndex = 0;
function typeLine() {
  if (currentCharIndex <= lines[currentLineIndex].length) {
    terminalText.textContent = lines.slice(0, currentLineIndex).join('\n') + '\n' + lines[currentLineIndex].substring(0, currentCharIndex);
    currentCharIndex++;
    setTimeout(typeLine, 50);
  } else {
    setTimeout(() => {
      currentLineIndex++;
      currentCharIndex = 0;
      if (currentLineIndex >= lines.length) {
        currentLineIndex = 0;
        terminalText.textContent = "";
        setTimeout(typeLine, 1000);
      } else {
        typeLine();
      }
    }, 1000);
  }
}
typeLine();


document.querySelector('.close').addEventListener('click', () => document.getElementById('certModal').style.display = 'none');
window.addEventListener('click', (e) => { if (e.target.id === 'certModal') document.getElementById('certModal').style.display = 'none'; });
function openModal(cert) {
  const modal = document.getElementById('certModal');
  const track = document.getElementById('carousel-track');

  track.innerHTML = '';

  if (Array.isArray(cert.images)) {
    cert.images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = cert.title;
      track.appendChild(img);
    });
  } else if (cert.image) {
    const img = document.createElement('img');
    img.src = cert.image;
    img.alt = cert.title;
    track.appendChild(img);
  }

  // Mostrar detalles
  document.getElementById('modal-title').textContent = cert.title;
  document.getElementById('modal-details').innerHTML = `
    <strong>Institución:</strong> ${cert.issuer}<br>
    <strong>Fecha:</strong> ${cert.date}
  `;
  document.getElementById('modal-skills').innerHTML = `
    <strong>Habilidades obtenidas:</strong><br>${cert.skills}
  `;
  document.getElementById('modal-verification').innerHTML = cert.verification || '';

  // Mostrar modal
  modal.style.display = 'block';

  // Lógica del carrusel
  const images = track.querySelectorAll('img');
  let currentIndex = 0;

  function updateCarousel() {
  const slideWidth = track.querySelector('img')?.clientWidth || 600;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}


  document.querySelector('.carousel-btn.prev').onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  };

  document.querySelector('.carousel-btn.next').onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  };

  updateCarousel();
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
  });
});
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const target = document.querySelector(this.getAttribute('data-target'));
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
  });
});

function checkScroll() {
  document.querySelectorAll('.section').forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) section.classList.add('visible');
  });
}
window.addEventListener('scroll', checkScroll);

// ========== INICIALIZAR TODO ==========
window.addEventListener('load', () => {
  renderSkills();
  renderProjects();
  renderCertifications();
  renderContact();
  checkScroll();
  setLanguage(currentLang); // ← Esto aplica el idioma al cargar
});

// ========== EVENTO PARA CAMBIAR IDIOMA ==========
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('lang-btn')) {
    setLanguage(e.target.dataset.lang);
  }

});
