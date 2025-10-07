// ========== CONFIGURACIÓN DE DATOS ==========
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
      title: "Página Web para Empresa de Reformas",
      description: "Desarrollé una página web institucional para una empresa de reformas domiciliarias en Perú, cuyo cliente final incluye colaboraciones con Leroy Merlin.",
      technologies: "HTML, CSS, JavaScript, Responsive Design",
      link: "https://h-curio.github.io/rserviciosbml/"
    },
    {
      title: "app-Tiempo-con-APis",
      description: "Aplicación full-stack desarrollada en el transcurso del curso de desarrollo de APIs.",
      technologies: "JavaScript, APIs, HTML,CSS",
      link: "https://github.com/H-curio/proyecto_conAPIs_tiempo.git"
    },
    {
      title: "Diccionario de JavaScript",
      description: "Aplicación Web desarrollada para los que desean incursionar en este mundo.",
      technologies: "JavaScript, HTML , CSS, Bootstrap",
      link: "En Proceso"
    },
    {
      title: "To-Do App",
      description: "Aplicación full-stack para organizar tareas diarias.",
      technologies: "React, Context API, LocalStorage",
      link: "https://github.com/H-curio/todo-app"
    },
  ],

  certifications: [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "12 de septiembre de 2025",
      image: "assets/certs/introduction-to-cybersecurity.png",
      skills: "Fundamentos de ciberseguridad, amenazas cibernéticas, protección en línea, oportunidades de carrera en seguridad.",
      verification: "ID: 634fb24a-e99c-4beb-a7b3-231202191d51<br><a href='https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/introduction-to-cybersecurity.html' target='_blank'>Verificar credencial</a>"
    },
    {
      title: "API Developer",
      issuer: "Edutin Academy",
      date: "octubre 2025",
      image: "assets/certs/certificado_cursoO_JSON.jpg",
      skills: "Desarrollo de APIs, seguridad en APIs, pruebas y documentación, conectividad y estructura.",
      verification: "Nota: 91/100"
    },
    {
      title: "Dominando NMAP: Escaneo de Redes",
      issuer: "Artistcode SAS",
      date: "6 de septiembre de 2025",
      image: "assets/certs/#6edc2db421bace01600a0c33ef66c98 (1).png",
      skills: "Escaneo de puertos y servicios, detección de sistemas operativos, escaneo agresivo vs pasivo, interpretación de resultados."
    },
    {
      title: "Penetration Testing: Estrategias y Técnicas",
      issuer: "Artistcode SAS",
      date: "6 de septiembre de 2025",
      image: "assets/certs/#11b9b8a8b812e741d1ca2da7480e10b (1).png",
      skills: "Metodologías de pentesting, uso de herramientas como Nmap y Metasploit, análisis de vulnerabilidades, informes de seguridad."
    },
    {
      title: "Uso y Administración de Sistemas Linux",
      issuer: "Artistcode SAS",
      date: "6 de septiembre de 2025",
      image: "assets/certs/#88df8bb4d705200129fef25106c2d56 (1).png",
      skills: "Comandos Linux, gestión de servicios, permisos de archivos, shell scripting."
    },
    {
      title: "Implementación y Optimización de Máquinas Virtuales",
      issuer: "Artistcode SAS",
      date: "6 de septiembre de 2025",
      image: "assets/certs/#917c66a08996d0b464512c946e7f4e4 (1).png",
      skills: "Virtualización, gestión de entornos virtuales, optimización de recursos."
    },
    {
      title: "Exploración Avanzada de Android V1",
      issuer: "Artistcode SAS",
      date: "6 de septiembre de 2025",
      image: "assets/certs/#d1fbba2b0dc0681bf3600327e73adf4.png",
      skills: "Análisis de apps Android, técnicas de hacking móvil, herramientas de seguridad."
    },
    {
      title: "Dominando Termux V1",
      issuer: "Artistcode SAS",
      date: "6 de septiembre de 2025",
      image: "assets/certs/#b10fb94713f4de3aab6b62b2a796487 (1).png",
      skills: "Termux como terminal en Android, instalación de herramientas de seguridad, automatización de tareas."
    },
    {
      title: "Extracción de Metadatos con FOCA",
      issuer: "Artistcode SAS",
      date: "6 de septiembre de 2025",
      image: "assets/certs/#ef76edcb50c934bf51125418ef329e7 (1).png",
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
      image: "assets/certs/pc leticia nivel intermedio 2016.jpg",
      skills: "Reparación avanzada de dispositivos, diagnóstico de fallas, uso de instrumentos de medición."
    },
    {
      title: "Electrónica Básica",
      issuer: "PC Leticia",
      date: "noviembre 2015",
      image: "assets/certs/pc leticia nivel intermedio 2015.jpg",
      skills: "Soldadura de microcomponentes, diagnóstico y reparación de placas, manejo de herramientas SMD."
    },
    {
      title: "Servicio de Recepción",
      issuer: "Ministerio de Educación - C.E.T.P.",
      date: "17 de junio de 2014",
      image: "assets/certs/servicio de recepcion 17 - junio del 2014.jpg",
      skills: "Protocolos de recepción, seguridad en eventos, atención al cliente."
    },
    {
      title: "Patrullas de Combate",
      issuer: "Ejército del Perú",
      date: "10 de enero de 2014",
      image: "assets/certs/patruya de cobate 10 ennero-2014.jpg",
      skills: "Tácticas de patrullaje, operaciones de combate, liderazgo bajo presión."
    },
    {
      title: "Monitor de Montaña",
      issuer: "Ejército del Perú",
      date: "25 de abril de 2014",
      image: "assets/certs/monitor montaña- 25 de Abril 2014.jpg",
      skills: "Operaciones en terreno agreste, supervivencia, inteligencia y contra inteligencia."
    },
    {
      title: "Protección a Personas Muy Importantes (PMI)",
      issuer: "Ejército del Perú",
      date: "30 de enero de 2013",
      image: "assets/certs/curso PMI -Proteccion a Personas muy Importantes-30 de enero-2013.jpg",
      skills: "Operaciones de protección, liderazgo táctico, uso de armas colativas."
    },
    {
      title: "Constancia de Servicio Militar",
      issuer: "Ejército del Perú",
      date: "2014",
      image: "assets/certs/culminacion del servicio miliar.jpg",
      skills: "Disciplina, trabajo en equipo, compromiso institucional."
    }
  ],

  contact: [
    { icon: '📧', text: 'liraacostamiguelangel@gmail.com', link: 'mailto:liraacostamiguelangel@gmail.com' },
    { icon: '💻', text: 'GitHub', link: 'https://github.com/H-curio' },
    { icon: '🔗', text: 'LinkedIn', link: 'https://www.linkedin.com/in/miguel-angel-lira-acosta-666651382' },
    { icon: '📍', text: 'Perú 🇵🇪', link: null }
  ]
};

// ========== CONFIGURACIÓN EDITABLE ==========
// Puedes cambiar estos valores en cualquier momento
const config = {
  certificationDate: new Date('2026-02-04T00:00:00'), // Fecha de certificación
  progress: {
    percent: 78,      // Cambia este número
    projects: 3       // Cambia este número
  }
};

// ========== RENDERIZADO DE CONTENIDO ==========
function renderSkills() {
  const container = document.getElementById('skills-container');
  data.skills.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `
      <i class="${skill.icon}"></i>
      <div>${skill.name}</div>
    `;
    container.appendChild(card);
  });
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  data.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>Tecnologías:</strong> ${project.technologies}</p>
      <a href="${project.link}" target="_blank">Ver en GitHub</a>
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
      link.innerHTML = `<span>${item.icon}</span> <a href="${item.link}" target="_blank">${item.text}</a>`;
    } else {
      link.innerHTML = `<span>${item.icon}</span> ${item.text}`;
    }
    container.appendChild(link);
  });
}

// ========== ACTUALIZAR STATUS ==========
document.getElementById('progress-percent').textContent = config.progress.percent;
document.getElementById('projects-completed').textContent = config.progress.projects;

// ========== CONTADOR DE TIEMPO ==========
function updateCountdown() {
  const now = new Date().getTime();
  const distance = config.certificationDate.getTime() - now;

  if (distance < 0) {
    document.getElementById('countdown').innerHTML = "<div class='countdown-item'><span class='countdown-number'>00</span><span class='countdown-label'>Certificado!</span></div>";
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

// Actualizar contador cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Ejecutar inmediatamente

// ========== EFECTO DE TERMINAL ESCRIBIENDO ========
const terminalText = document.getElementById('terminal-text');
const lines = [
  "> npm run dev",
  "> Building project...",
  "> Success! Server running at http://localhost:3000",
  "> Welcome, Miguel Angel.",
  "> Your mission: Build secure, user-centered software.",
  ""
];

let currentLineIndex = 0;
let currentCharIndex = 0;
let isTyping = true;

function typeLine() {
  if (isTyping) {
    if (currentCharIndex <= lines[currentLineIndex].length) {
      terminalText.textContent = lines.slice(0, currentLineIndex).join('\n') + '\n' + lines[currentLineIndex].substring(0, currentCharIndex);
      currentCharIndex++;
      setTimeout(typeLine, 50); // Velocidad de escritura
    } else {
      // Línea completa, esperar un poco
      setTimeout(() => {
        currentLineIndex++;
        currentCharIndex = 0;
        if (currentLineIndex >= lines.length) {
          // Reiniciar
          currentLineIndex = 0;
          terminalText.textContent = "";
          setTimeout(typeLine, 1000); // Esperar 1 segundo antes de reiniciar
        } else {
          typeLine();
        }
      }, 1000); // Esperar 1 segundo entre líneas
    }
  }
}

// Iniciar el efecto de terminal
typeLine();

// ========== MODAL ==========
function openModal(cert) {
  document.getElementById('modal-title').textContent = cert.title;
  document.getElementById('modal-details').innerHTML = 
    `<strong>Institución:</strong> ${cert.issuer}<br><strong>Fecha:</strong> ${cert.date}`;
  document.getElementById('modal-cert-image').src = cert.image;
  document.getElementById('modal-skills').innerHTML = 
    `<strong>Habilidades obtenidas:</strong><br>${cert.skills}`;
  document.getElementById('modal-verification').innerHTML = cert.verification || '';
  document.getElementById('certModal').style.display = 'block';
}

document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('certModal').style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target.id === 'certModal') {
    document.getElementById('certModal').style.display = 'none';
  }
});

// ========== NAVEGACIÓN SUAVE ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const target = document.querySelector(this.getAttribute('data-target'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// ========== ANIMACIÓN AL HACER SCROLL ==========
function checkScroll() {
  document.querySelectorAll('.section').forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', () => {
  renderSkills();
  renderProjects();
  renderCertifications();
  renderContact();
  checkScroll();

});

