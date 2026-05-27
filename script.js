const translations = {
  es: {
    navProfile: "Perfil",
    navStack: "Stack",
    navLabs: "Labs",
    navProjects: "Proyectos",
    navCerts: "Certificaciones",
    navContact: "Contacto",
    heroEyebrow: "PORTFOLIO TÉCNICO MULTIDISCIPLINARIO",
    heroTitle: "Security, Systems & Development Portfolio",
    heroSubtitle: "Pentesting • OSINT • Linux • Full Stack • IoT • NFC/RFID",
    heroText:
      "Perfil técnico en formación con enfoque práctico en ciberseguridad, investigación OSINT, sistemas Linux, desarrollo web, hardware, IoT y documentación de laboratorios reales.",
    btnLabs: "Ver labs",
    btnCerts: "Certificaciones",
    identityRole: "Technical Security Learner",
    focusLabel: "Enfoque",
    profileLabel: "PERFIL TÉCNICO",
    profileTitle:
      "Una ruta técnica construida con práctica, disciplina y laboratorio.",
    profileP1:
      "Mi base viene de la disciplina militar: presión, constancia, orden, análisis y resolución de problemas. Hoy aplico esa mentalidad en tecnología.",
    profileP2:
      "Estoy orientando mi perfil hacia ciberseguridad, OSINT, Linux, desarrollo web, IoT, hardware y NFC/RFID. Mi enfoque no es aparentar experiencia avanzada, sino demostrar progreso real mediante proyectos, documentación y laboratorios.",
    profileP3:
      "Este portfolio funciona como mi bitácora técnica: aquí organizo cursos, certificaciones, pruebas, writeups, herramientas y proyectos que voy construyendo paso a paso.",
    stackLabel: "STACK ORGANIZADO",
    stackTitle: "Áreas técnicas y herramientas",
    labsLabel: "WORKSPACE TÉCNICO",
    labsTitle: "Repositorios/laboratorios que voy a construir",
    labsIntro:
      "Estos repositorios funcionan como rutas de práctica. Al terminar esta reorganización, iré subiendo pruebas, proyectos, writeups y documentación técnica.",
    projectsLabel: "PROYECTOS Y PRÁCTICAS",
    projectsTitle: "Proyectos, writeups y prácticas actuales",
    certsLabel: "FORMACIÓN",
    certsTitle: "Certificaciones y entrenamiento",
    featuredCerts: "Certificaciones destacadas",
    trainingCerts: "Cursos y entrenamiento complementario",
    contactLabel: "CONTACTO",
    contactTitle: "Conecta conmigo",
    statusLearning: "Learning Mode:",
    statusFocus: "Actualmente enfocado en:",
    statusAvailable: "Disponible para:",
    statusBoardLabel: "ESTADO TÉCNICO",
    statusBoardTitle: "Enfoque actual y progreso público",
    statusBoardIntro: "Resumen visual de las áreas en las que estoy avanzando. Estos valores se actualizan manualmente cuando agrego proyectos, writeups o certificaciones.",
    activityNote: "Referencia visual tipo bitácora: commits, prácticas, documentación, cursos y laboratorios que iré actualizando conforme avance.",
    rights: "Todos los derechos reservados.",
    footerNote:
      "Portfolio técnico personal construido para documentar aprendizaje, laboratorios y proyectos.",
  },
  en: {
    navProfile: "Profile",
    navStack: "Stack",
    navLabs: "Labs",
    navProjects: "Projects",
    navCerts: "Certifications",
    navContact: "Contact",
    heroEyebrow: "MULTIDISCIPLINARY TECHNICAL PORTFOLIO",
    heroTitle: "Security, Systems & Development Portfolio",
    heroSubtitle: "Pentesting • OSINT • Linux • Full Stack • IoT • NFC/RFID",
    heroText:
      "Technical learner with a practical focus on cybersecurity, OSINT research, Linux systems, web development, hardware, IoT and real lab documentation.",
    btnLabs: "View labs",
    btnCerts: "Certifications",
    identityRole: "Technical Security Learner",
    focusLabel: "Focus",
    profileLabel: "TECHNICAL PROFILE",
    profileTitle:
      "A technical path built through practice, discipline and labs.",
    profileP1:
      "My foundation comes from military discipline: pressure, consistency, order, analysis and problem-solving. Today I apply that mindset to technology.",
    profileP2:
      "I am shaping my profile around cybersecurity, OSINT, Linux, web development, IoT, hardware and NFC/RFID. My focus is not to pretend advanced experience, but to show real progress through projects, documentation and labs.",
    profileP3:
      "This portfolio works as my technical logbook: here I organize courses, certifications, tests, writeups, tools and projects that I build step by step.",
    stackLabel: "ORGANIZED STACK",
    stackTitle: "Technical areas and tools",
    labsLabel: "TECHNICAL WORKSPACE",
    labsTitle: "Repositories/labs I am going to build",
    labsIntro:
      "These repositories work as practice routes. After this reorganization, I will upload tests, projects, writeups and technical documentation.",
    projectsLabel: "PROJECTS AND PRACTICE",
    projectsTitle: "Current projects, writeups and practice",
    certsLabel: "TRAINING",
    certsTitle: "Certifications and training",
    featuredCerts: "Featured certifications",
    trainingCerts: "Complementary courses and training",
    contactLabel: "CONTACT",
    contactTitle: "Connect with me",
    statusLearning: "Learning Mode:",
    statusFocus: "Currently focused on:",
    statusAvailable: "Available for:",
    statusBoardLabel: "TECHNICAL STATUS",
    statusBoardTitle: "Current focus and public progress",
    statusBoardIntro: "Visual summary of the areas I am progressing in. These values are manually updated when I add projects, writeups or certifications.",
    activityNote: "Logbook-style visual reference: commits, practice, documentation, courses and labs that I will update as I progress.",
    rights: "All rights reserved.",
    footerNote:
      "Personal technical portfolio built to document learning, labs and projects.",
  },
};

const heroTags = [
  "Pentesting",
  "OSINT",
  "Linux",
  "Full Stack",
  "IoT",
  "NFC/RFID",
  "NetHunter",
  "Python",
  "Networking",
];

// ===== STATUS EDITABLE =====
// Cambia SOLO esta sección cuando quieras actualizar tu estado público.
const statusData = {
  learningMode: "ON",
  focusedOn: ["OSINT", "Pentesting", "Linux", "IoT", "NFC/RFID", "Full Stack", "Python Automation", "Networking"],
  availableFor: ["Prácticas", "Colaboraciones", "Proyectos web", "Documentación técnica", "Laboratorios", "Freelance básico"],
  focusedOnEn: ["OSINT", "Pentesting", "Linux", "IoT", "NFC/RFID", "Full Stack", "Python Automation", "Networking"],
  availableForEn: ["Internships", "Collaborations", "Web projects", "Technical documentation", "Labs", "Basic freelance"]
};


// ===== STATUS OCTAGONAL EDITABLE =====
// Cambia estos valores para actualizar los bloques octagonales del portfolio.
const statusOctagons = [
  { title: "Pentesting", value: "Activo", progress: 62, icon: "fa-shield-halved", color: "red", note: "Nmap · Labs · Reports" },
  { title: "OSINT", value: "Activo", progress: 70, icon: "fa-fingerprint", color: "cyan", note: "CSI · Metadatos · Investigación" },
  { title: "Linux", value: "Base fuerte", progress: 58, icon: "fa-brands fa-linux", color: "green", note: "Terminal · VM · NetHunter" },
  { title: "IoT / NFC", value: "Laboratorio", progress: 45, icon: "fa-microchip", color: "yellow", note: "ESP32 · RFID · Hardware" },
  { title: "Full Stack", value: "En práctica", progress: 38, icon: "fa-code", color: "blue", note: "HTML · CSS · JS · APIs" },
  { title: "Python", value: "En ruta", progress: 25, icon: "fa-brands fa-python", color: "blue", note: "Automatización · Scripts" },
];

const activityHeatmap = [
  1,0,2,3,1,0,4,2,1,0,3,2,4,1,0,2,3,5,1,0,
  2,4,1,0,3,2,5,4,1,0,2,3,1,4,2,0,3,5,2,1,
  0,2,4,3,1,0,2,5,3,1,4,2,0,3,2,5,4,1,2,0
];

const stats = [
  { icon: "fa-chart-line", value: "8+", label: "Proyectos" },
  { icon: "fa-terminal", value: "15+", label: "Labs & Writeups" },
  { icon: "fa-trophy", value: "25+", label: "Certificaciones" },
  { icon: "fa-clock", value: "1200+", label: "Horas de estudio" },
];
const skillCategories = [
  "Todas",
  "Pentesting / OSINT",
  "Linux / Systems",
  "Full Stack",
  "IoT / Hardware",
  "Mobile Security",
  "Tools",
];
const skills = [
  {
    name: "Cybersecurity",
    icon: "fa-shield-halved",
    cat: "Pentesting / OSINT",
    color: "red",
  },
  {
    name: "Nmap",
    icon: "fa-satellite-dish",
    cat: "Pentesting / OSINT",
    color: "red",
  },
  {
    name: "OSINT",
    icon: "fa-magnifying-glass-chart",
    cat: "Pentesting / OSINT",
    color: "cyan",
  },
  {
    name: "FOCA",
    icon: "fa-fingerprint",
    cat: "Pentesting / OSINT",
    color: "cyan",
  },
  {
    name: "Pentesting Labs",
    icon: "fa-bug",
    cat: "Pentesting / OSINT",
    color: "red",
  },
  {
    name: "Security Reports",
    icon: "fa-file-shield",
    cat: "Pentesting / OSINT",
    color: "red",
  },
  {
    name: "Linux",
    icon: "fa-brands fa-linux",
    cat: "Linux / Systems",
    color: "green",
  },
  {
    name: "Bash",
    icon: "fa-square-terminal",
    cat: "Linux / Systems",
    color: "green",
  },
  {
    name: "Virtualización",
    icon: "fa-cubes",
    cat: "Linux / Systems",
    color: "blue",
  },
  {
    name: "Networking",
    icon: "fa-network-wired",
    cat: "Linux / Systems",
    color: "green",
  },
  {
    name: "HTML",
    icon: "fa-brands fa-html5",
    cat: "Full Stack",
    color: "orange",
  },
  {
    name: "CSS",
    icon: "fa-brands fa-css3-alt",
    cat: "Full Stack",
    color: "blue",
  },
  {
    name: "JavaScript",
    icon: "fa-brands fa-js",
    cat: "Full Stack",
    color: "yellow",
  },
  {
    name: "React Basics",
    icon: "fa-brands fa-react",
    cat: "Full Stack",
    color: "cyan",
  },
  {
    name: "Python",
    icon: "fa-brands fa-python",
    cat: "Full Stack",
    color: "blue",
  },
  { name: "SQL Basics", icon: "fa-database", cat: "Full Stack", color: "blue" },
  { name: "REST APIs", icon: "fa-cloud", cat: "Full Stack", color: "cyan" },
  {
    name: "ESP32",
    icon: "fa-microchip",
    cat: "IoT / Hardware",
    color: "yellow",
  },
  {
    name: "ESP32-CAM",
    icon: "fa-camera",
    cat: "IoT / Hardware",
    color: "yellow",
  },
  {
    name: "RFID / NFC",
    icon: "fa-id-card",
    cat: "IoT / Hardware",
    color: "yellow",
  },
  {
    name: "UART / TTL",
    icon: "fa-plug",
    cat: "IoT / Hardware",
    color: "yellow",
  },
  {
    name: "Electronics",
    icon: "fa-screwdriver-wrench",
    cat: "IoT / Hardware",
    color: "yellow",
  },
  {
    name: "Mobile Repair",
    icon: "fa-mobile-screen",
    cat: "IoT / Hardware",
    color: "yellow",
  },
  {
    name: "NetHunter",
    icon: "fa-mobile-retro",
    cat: "Mobile Security",
    color: "purple",
  },
  {
    name: "Termux / Kali",
    icon: "fa-terminal",
    cat: "Mobile Security",
    color: "purple",
  },
  {
    name: "Git & GitHub",
    icon: "fa-brands fa-github",
    cat: "Tools",
    color: "white",
  },
  {
    name: "WordPress",
    icon: "fa-brands fa-wordpress",
    cat: "Tools",
    color: "blue",
  },
  {
    name: "Bootstrap",
    icon: "fa-brands fa-bootstrap",
    cat: "Tools",
    color: "purple",
  },
  { name: "Figma", icon: "fa-brands fa-figma", cat: "Tools", color: "purple" },
];
const repos = [
  {
    name: "linux-labs",
    icon: "fa-brands fa-linux",
    color: "green",
    text: "Prácticas de terminal, permisos, servicios, redes, virtualización y administración básica de sistemas.",
  },
  {
    name: "esp32-projects",
    icon: "fa-microchip",
    color: "yellow",
    text: "Proyectos con ESP32, sensores, ESP32-CAM, streaming, automatización e IoT local.",
  },
  {
    name: "osint-notes",
    icon: "fa-magnifying-glass-chart",
    color: "red",
    text: "Notas, metodología, metadatos, fuentes abiertas, herramientas y reportes OSINT.",
  },
  {
    name: "rfid-research",
    icon: "fa-id-card",
    color: "cyan",
    text: "Investigación y documentación sobre RFID/NFC, LF/HF, Chameleon Ultra y análisis controlado.",
  },
  {
    name: "nethunter-labs",
    icon: "fa-dragon",
    color: "purple",
    text: "Prácticas con Kali NetHunter, Termux, Android, networking móvil y herramientas portátiles.",
  },
  {
    name: "python-automation",
    icon: "fa-brands fa-python",
    color: "blue",
    text: "Scripts para automatizar tareas, manejo de archivos, APIs, reportes y pequeñas utilidades.",
  },
  {
    name: "networking-labs",
    icon: "fa-network-wired",
    color: "green",
    text: "Laboratorios de redes, Nmap, protocolos, tráfico, direccionamiento y documentación de resultados.",
  },
];
const projectCategories = [
  "Todos",
  "Pentesting",
  "OSINT",
  "Web",
  "IoT / Hardware",
  "Mobile",
  "Networking",
];
const projects = [
  {
    title: "DarkHole-V2 Pentesting Writeup",
    cat: "Pentesting",
    status: "Writeup",
    tags: ["Pentesting", "Report"],
    url: "https://github.com/H-curio/DarkHole-V2-Pentesting-Writeup--H-curio",
    desc: "Documentación de práctica sobre enumeración, análisis y reporte técnico.",
  },
  {
    title: "LupinOne Pentest Report",
    cat: "Pentesting",
    status: "Reporte",
    tags: ["Pentesting", "Writeup"],
    url: "https://github.com/H-curio/LupinOne-Pentest-Report",
    desc: "Informe técnico de pentesting sobre la máquina LupinOne.",
  },
  {
    title: "Redmi Note10Pro NetHunter",
    cat: "Mobile",
    status: "Lab",
    tags: ["NetHunter", "Android"],
    url: "https://github.com/H-curio/Redmi-Note10Pro-NetHunter-H-curio",
    desc: "Laboratorio móvil con Kali NetHunter, Android y herramientas portátiles.",
  },
  {
    title: "H-curio DevGuru Pentesting",
    cat: "Pentesting",
    status: "Lab",
    tags: ["DevGuru", "Security"],
    url: "https://github.com/H-curio/H-curio_DevGuru-Pentesting",
    desc: "Laboratorio DevGuru orientado a práctica y documentación.",
  },
  {
    title: "Portfolio H-curio",
    cat: "Web",
    status: "Activo",
    tags: ["HTML", "CSS", "JS"],
    url: "https://github.com/H-curio/H-curio.github.io",
    desc: "Portfolio técnico personal y bitácora de evolución.",
  },
  {
    title: "Clima & Temperatura",
    cat: "Web",
    status: "Finalizado",
    tags: ["API", "JavaScript", "CSS"],
    url: "https://h-curio.github.io/proyecto_conAPIs_tiempo/",
    desc: "Proyecto de consumo de API para consultar clima y temperatura.",
  },
  {
    title: "Reformas Profesionales Sevilla",
    cat: "Web",
    status: "Finalizado",
    tags: ["HTML", "CSS", "JS"],
    url: "https://h-curio.github.io/rserviciosbml/",
    desc: "Web institucional responsive para empresa de reformas y contacto directo.",
  },
  {
    title: "Family Pool",
    cat: "Web",
    status: "Proyecto",
    tags: ["HTML", "CSS"],
    url: "https://github.com/H-curio/Family-Pool",
    desc: "Proyecto web/regalo para amigos emprendedores.",
  },
  {
    title: "To-Do App",
    cat: "Web",
    status: "Práctica",
    tags: ["React", "LocalStorage"],
    url: "https://github.com/H-curio/todo-app",
    desc: "Aplicación de tareas para practicar estado, componentes y persistencia local.",
  },
  {
    title: "Calculadora IMC",
    cat: "Web",
    status: "Práctica",
    tags: ["JavaScript", "Bootstrap"],
    url: "https://github.com/H-curio/imc-calculator",
    desc: "Herramienta simple para practicar lógica, DOM y retroalimentación visual.",
  },
  {
    title: "linux-labs",
    cat: "Networking",
    status: "Pendiente",
    tags: ["Linux", "Labs"],
    url: "https://github.com/H-curio/linux-labs",
    desc: "Ruta de prácticas de Linux, permisos, servicios y redes.",
  },
  {
    title: "esp32-projects",
    cat: "IoT / Hardware",
    status: "Pendiente",
    tags: ["ESP32", "IoT"],
    url: "https://github.com/H-curio/esp32-projects",
    desc: "Repositorio para documentar proyectos ESP32, sensores y automatización.",
  },
  {
    title: "osint-notes",
    cat: "OSINT",
    status: "Pendiente",
    tags: ["OSINT", "Notas"],
    url: "https://github.com/H-curio/osint-notes",
    desc: "Notas y metodología para investigación OSINT y análisis de metadatos.",
  },
  {
    title: "rfid-research",
    cat: "IoT / Hardware",
    status: "Pendiente",
    tags: ["RFID", "NFC"],
    url: "https://github.com/H-curio/rfid-research",
    desc: "Documentación controlada sobre RFID/NFC, Chameleon Ultra y hardware.",
  },
  {
    title: "nethunter-labs",
    cat: "Mobile",
    status: "Pendiente",
    tags: ["NetHunter", "Termux"],
    url: "https://github.com/H-curio/nethunter-labs",
    desc: "Prácticas móviles con Kali NetHunter y herramientas Android.",
  },
  {
    title: "python-automation",
    cat: "Web",
    status: "Pendiente",
    tags: ["Python", "Automation"],
    url: "https://github.com/H-curio/python-automation",
    desc: "Scripts para automatización, APIs, archivos y reportes simples.",
  },
  {
    title: "networking-labs",
    cat: "Networking",
    status: "Pendiente",
    tags: ["Nmap", "Networking"],
    url: "https://github.com/H-curio/networking-labs",
    desc: "Prácticas de redes, protocolos, Nmap y documentación de resultados.",
  },
];
const certCategories = [
  "Todas",
  "Destacadas",
  "OSINT",
  "Cybersecurity",
  "Pentesting",
  "Linux",
  "Systems",
  "Mobile",
  "Development",
  "UX",
  "Hardware",
  "Military",
];
const certifications = [
  {
    title: "CSI Linux Certified Investigator",
    issuer: "CSI Linux / Linux Academy",
    date: "Mayo 2026",
    cat: "OSINT",
    featured: true,
    logo: "assets/certs/csi_linux_certified_investigator.png",
    image: "assets/certs/csi_linux_certified_investigator.png",
    icon: "fa-user-secret",
    skills:
      "Cyber investigations, OSINT, análisis digital y metodología de investigación.",
  },
  {
    title: "Introduction to Cyber Investigations",
    issuer: "CSI Linux / Linux Academy",
    date: "Mayo 2026",
    cat: "OSINT",
    featured: true,
    logo: "assets/certs/introduction_to_cyber_investigations.png",
    image: "assets/certs/introduction_to_cyber_investigations.png",
    icon: "fa-fingerprint",
    skills:
      "Introducción a investigaciones cyber, OSINT, evidencias y fundamentos de análisis.",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Septiembre 2025",
    cat: "Cybersecurity",
    featured: true,
    logo: "assets/certs/cisco_intro_cibersegurity.png",
    image: "assets/certs/cisco_intro_cibersegurity.png",
    icon: "fa-shield-halved",
    skills:
      "Fundamentos de ciberseguridad, amenazas, protección en línea y conceptos base.",
  },
  {
    title: "Preparation Practice Exam eJPTv2",
    issuer: "Udemy",
    date: "Completado",
    cat: "Pentesting",
    featured: true,
    logo: null,
    image: null,
    icon: "fa-bug",
    skills:
      "Preparación práctica para eJPTv2, metodología y evaluación de conocimientos.",
  },
  {
    title: "Dominando NMAP: Escaneo de Redes",
    issuer: "Artistcode SAS",
    date: "Septiembre 2025",
    cat: "Cybersecurity",
    featured: false,
    logo: "assets/certs/dominando_nmap.png",
    image: "assets/certs/dominando_nmap.png",
    icon: "fa-satellite-dish",
    skills:
      "Escaneo de puertos, servicios, detección de sistemas e interpretación de resultados.",
  },
  {
    title: "Penetration Testing: Estrategias y Técnicas",
    issuer: "Artistcode SAS",
    date: "Septiembre 2025",
    cat: "Pentesting",
    featured: false,
    logo: "assets/certs/penetration_testing.png",
    image: "assets/certs/penetration_testing.png",
    icon: "fa-bug",
    skills:
      "Metodologías de pentesting, herramientas, vulnerabilidades e informes.",
  },
  {
    title: "Uso y Administración de Sistemas Linux",
    issuer: "Artistcode SAS",
    date: "Septiembre 2025",
    cat: "Linux",
    featured: false,
    logo: "assets/certs/linux_admin.png",
    image: "assets/certs/linux_admin.png",
    icon: "fa-brands fa-linux",
    skills: "Comandos Linux, permisos, servicios y administración básica.",
  },
  {
    title: "Implementación y Optimización de Máquinas Virtuales",
    issuer: "Artistcode SAS",
    date: "Septiembre 2025",
    cat: "Systems",
    featured: false,
    logo: "assets/certs/maquinas_virtuales.png",
    image: "assets/certs/maquinas_virtuales.png",
    icon: "fa-server",
    skills: "Virtualización, gestión de recursos y entornos de práctica.",
  },
  {
    title: "Extracción de Metadatos con FOCA",
    issuer: "Artistcode SAS",
    date: "Septiembre 2025",
    cat: "OSINT",
    featured: false,
    logo: "assets/certs/foca.png",
    image: "assets/certs/foca.png",
    icon: "fa-fingerprint",
    skills: "Metadatos, FOCA, análisis de documentos e información sensible.",
  },
  {
    title: "Dominando Termux V1",
    issuer: "Artistcode SAS",
    date: "Septiembre 2025",
    cat: "Mobile",
    featured: false,
    logo: "assets/certs/termux_v1.png",
    image: "assets/certs/termux_v1.png",
    icon: "fa-terminal",
    skills: "Terminal Android, herramientas móviles y automatización básica.",
  },
  {
    title: "Exploración Avanzada de Android V1",
    issuer: "Artistcode SAS",
    date: "Septiembre 2025",
    cat: "Mobile",
    featured: false,
    logo: "assets/certs/android_v1.png",
    image: "assets/certs/android_v1.png",
    icon: "fa-mobile-screen",
    skills: "Android, análisis básico y herramientas de seguridad móvil.",
  },
  {
    title: "API Developer",
    issuer: "Edutin Academy",
    date: "Octubre 2025",
    cat: "Development",
    featured: true,
    logo: "assets/certs/certificado_cursoO_JSON.jpg",
    image: "assets/certs/certificado_cursoO_JSON.jpg",
    icon: "fa-cloud",
    skills: "APIs, estructura, conectividad, pruebas y documentación.",
  },
  {
    title: "JavaScript Essentials",
    issuer: "Cisco / JS Institute",
    date: "Diciembre 2025",
    cat: "Development",
    featured: true,
    logo: "assets/certs/javascript-essentials-1.png",
    image: "assets/certs/javascript-essentials-1.png",
    icon: "fa-brands fa-js",
    skills: "Fundamentos de JavaScript y lógica de programación.",
  },
  {
    title: "Diseño y Experiencia de Usuario UX",
    issuer: "Fundación Romero",
    date: "Febrero 2026",
    cat: "UX",
    featured: false,
    logo: "assets/certs/ux1.png",
    image: "assets/certs/ux1.png",
    icon: "fa-brands fa-figma",
    skills: "Fundamentos UX, usuario, diseño y experiencia.",
  },
  {
    title: "Design Thinking",
    issuer: "UPC / Fundación Romero",
    date: "Febrero 2026",
    cat: "UX",
    featured: false,
    logo: "assets/certs/thinking.png",
    image: "assets/certs/thinking.png",
    icon: "fa-lightbulb",
    skills: "Ideación, empatía, prototipado y solución de problemas.",
  },
  {
    title: "Electrónica Básica",
    issuer: "PC Leticia",
    date: "Noviembre 2015",
    cat: "Hardware",
    featured: false,
    logo: "assets/certs/pc_leticia_basico_2015.jpg",
    image: "assets/certs/pc_leticia_basico_2015.jpg",
    icon: "fa-microchip",
    skills: "Electrónica básica, diagnóstico y herramientas.",
  },
  {
    title: "Electrónica Nivel Intermedio",
    issuer: "PC Leticia",
    date: "Febrero 2016",
    cat: "Hardware",
    featured: false,
    logo: "assets/certs/pc_leticia_intermedio_2016.jpg",
    image: "assets/certs/pc_leticia_intermedio_2016.jpg",
    icon: "fa-screwdriver-wrench",
    skills: "Diagnóstico, reparación y análisis de dispositivos.",
  },
  {
    title: "Patrullas de Combate",
    issuer: "Ejército del Perú",
    date: "Enero 2014",
    cat: "Military",
    featured: false,
    logo: "assets/certs/patrullas_combate_2014.jpg",
    image: "assets/certs/patrullas_combate_2014.jpg",
    icon: "fa-person-military-rifle",
    skills: "Disciplina, liderazgo, resistencia y trabajo bajo presión.",
  },
  {
    title: "Monitor de Montaña",
    issuer: "Ejército del Perú",
    date: "Abril 2014",
    cat: "Military",
    featured: false,
    logo: "assets/certs/monitor_montaña_2014.jpg",
    image: "assets/certs/monitor_montaña_2014.jpg",
    icon: "fa-mountain",
    skills: "Supervivencia, orientación y trabajo en terreno complejo.",
  },
  {
    title: "Protección a Personas Muy Importantes PMI",
    issuer: "Ejército del Perú",
    date: "Enero 2013",
    cat: "Military",
    featured: false,
    logo: "assets/certs/curso_pmi_2013.jpg",
    image: "assets/certs/curso_pmi_2013.jpg",
    icon: "fa-user-shield",
    skills: "Protección, protocolo, disciplina y análisis de riesgo.",
  },
];
const contacts = [
  {
    name: "Email",
    value: "liraacostamiguelangel@gmail.com",
    url: "mailto:liraacostamiguelangel@gmail.com",
    icon: "fa-envelope",
    color: "blue",
  },
  {
    name: "GitHub",
    value: "github.com/H-curio",
    url: "https://github.com/H-curio",
    icon: "fa-brands fa-github",
    color: "white",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/miguel-angel-lira-acosta-666651382",
    url: "https://www.linkedin.com/in/miguel-angel-lira-acosta-666651382",
    icon: "fa-brands fa-linkedin-in",
    color: "blue",
  },
  {
    name: "WhatsApp",
    value: "+34 602 63 86 53",
    url: "https://wa.me/34602638653",
    icon: "fa-brands fa-whatsapp",
    color: "green",
  },
  {
    name: "Ubicación",
    value: "Sevilla, España · Remoto",
    url: "#",
    icon: "fa-location-dot",
    color: "green",
  },
];
let currentLang = "es",
  activeSkill = "Todas",
  activeProject = "Todos",
  activeCert = "Todas";
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
function colorClass(c) {
  return `tone-${c || "blue"}`;
}
function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach((el) => {
    const k = el.dataset.i18n;
    if (t[k]) el.textContent = t[k];
  });
  $$(".lang-btn").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === lang),
  );
  renderStatus();
}
function renderTags() {
  $("#heroTags").innerHTML = heroTags.map((t) => `<span>${t}</span>`).join("");
}
function renderStats() {
  $("#statsGrid").innerHTML = stats
    .map(
      (s) =>
        `<article class="stat"><i class="fa-solid ${s.icon}"></i><strong>${s.value}</strong><span>${s.label}</span></article>`,
    )
    .join("");
}
function renderFilters(container, list, active, cb) {
  const el = $(container);
  el.innerHTML = list
    .map(
      (x) =>
        `<button class="filter ${x === active ? "active" : ""}" data-value="${x}">${x}</button>`,
    )
    .join("");
  el.querySelectorAll("button").forEach((btn) =>
    btn.addEventListener("click", () => cb(btn.dataset.value)),
  );
}
function renderSkills() {
  renderFilters("#skillFilters", skillCategories, activeSkill, (v) => {
    activeSkill = v;
    renderSkills();
  });
  const items = skills.filter(
    (s) => activeSkill === "Todas" || s.cat === activeSkill,
  );
  $("#skillsGrid").innerHTML = items
    .map(
      (s) =>
        `<article class="skill ${colorClass(s.color)}"><i class="${s.icon.includes("fa-brands") ? s.icon : "fa-solid " + s.icon}"></i><strong>${s.name}</strong><small>${s.cat}</small></article>`,
    )
    .join("");
}
function renderRepos() {
  $("#repoGrid").innerHTML = repos
    .map(
      (r) =>
        `<article class="repo ${colorClass(r.color)}"><i class="${r.icon.includes("fa-brands") ? r.icon : "fa-solid " + r.icon}"></i><h3>${r.name}</h3><p>${r.text}</p><div><small>Pendiente de documentar</small><a href="https://github.com/H-curio/${r.name}" target="_blank" rel="noopener">Abrir repo <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div></article>`,
    )
    .join("");
}
function renderProjects() {
  renderFilters("#projectFilters", projectCategories, activeProject, (v) => {
    activeProject = v;
    renderProjects();
  });
  const items = projects.filter(
    (p) => activeProject === "Todos" || p.cat === activeProject,
  );
  $("#projectsGrid").innerHTML = items
    .map(
      (p) =>
        `<article class="project"><div class="project-top"><span>${p.cat}</span><b>${p.status}</b></div><h3>${p.title}</h3><p>${p.desc}</p><div class="chip-row">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div><a href="${p.url}" target="_blank" rel="noopener">Ver proyecto <i class="fa-solid fa-arrow-up-right-from-square"></i></a></article>`,
    )
    .join("");
}
function catColor(cat) {
  return (
    {
      OSINT: "cyan",
      Cybersecurity: "red",
      Pentesting: "red",
      Linux: "green",
      Systems: "blue",
      Mobile: "purple",
      Development: "blue",
      UX: "purple",
      Hardware: "yellow",
      Military: "white",
    }[cat] || "blue"
  );
}
function logoHTML(cert) {
  if (!cert.logo) {
    return `<i class="${cert.icon.includes("fa-brands") ? cert.icon : "fa-solid " + cert.icon}"></i>`;
  }
  return `<img src="${cert.logo}" alt="${cert.title}" onerror="this.remove(); this.parentElement.classList.add('fallback'); this.parentElement.innerHTML='<i class=&quot;${cert.icon.includes("fa-brands") ? cert.icon : "fa-solid " + cert.icon}&quot;></i>';">`;
}
function certCard(c) {
  return `<article class="cert ${colorClass(catColor(c.cat))}" data-title="${c.title}"><div class="cert-logo">${logoHTML(c)}</div><div class="cert-info"><h4>${c.title}</h4><p>${c.issuer}</p><small>${c.date} · ${c.cat}</small></div><span class="cert-badge">${c.cat}</span></article>`;
}
function renderCerts() {
  renderFilters("#certFilters", certCategories, activeCert, (v) => {
    activeCert = v;
    renderCerts();
  });
  let filtered = certifications.filter(
    (c) =>
      activeCert === "Todas" ||
      (activeCert === "Destacadas" ? c.featured : c.cat === activeCert),
  );
  $("#featuredCertGrid").innerHTML =
    filtered
      .filter((c) => c.featured)
      .map(certCard)
      .join("") || '<p class="empty">Sin resultados destacados.</p>';
  $("#trainingCertGrid").innerHTML =
    filtered
      .filter((c) => !c.featured)
      .map(certCard)
      .join("") || '<p class="empty">Sin resultados complementarios.</p>';
  document
    .querySelectorAll(".cert")
    .forEach((card) =>
      card.addEventListener("click", () => openCert(card.dataset.title)),
    );
}
function openCert(title) {
  const c = certifications.find((x) => x.title === title);
  if (!c) return;
  $("#modalTitle").textContent = c.title;
  $("#modalIssuer").textContent = `${c.issuer} · ${c.date} · ${c.cat}`;
  $("#modalLogo").className = `modal-logo ${colorClass(catColor(c.cat))}`;
  $("#modalLogo").innerHTML = logoHTML(c);
  if (c.image) {
    $("#modalMedia").innerHTML = `<img src="${c.image}" alt="${c.title}" onerror="this.parentElement.innerHTML='<div class=placeholder>Imagen no encontrada en assets/certs</div>'">`;
  } else {
    $("#modalMedia").innerHTML = `<div class="placeholder"><i class="${c.icon.includes("fa-brands") ? c.icon : "fa-solid " + c.icon}"></i><br>Certificado registrado sin imagen local.<br><small>Puedes agregarla luego en assets/certs y actualizar script.js</small></div>`;
  }
  $("#modalBody").innerHTML =
    `<p><strong>Área:</strong> ${c.cat}</p><p><strong>Contenido / habilidades:</strong><br>${c.skills}</p>`;
  $("#certModal").classList.add("open");
}

function renderOctagons() {
  const grid = document.getElementById("octagonGrid");
  if (grid) {
    grid.innerHTML = statusOctagons.map((item) => {
      const iconClass = item.icon.includes("fa-brands") ? item.icon : "fa-solid " + item.icon;
      return `<article class="octagon-card ${colorClass(item.color)}" style="--p:${item.progress}">
        <div class="octagon-shell">
          <div class="octagon-core">
            <i class="${iconClass}"></i>
            <strong>${item.progress}%</strong>
          </div>
        </div>
        <div class="octagon-info">
          <h3>${item.title}</h3>
          <p>${item.value}</p>
          <small>${item.note}</small>
        </div>
      </article>`;
    }).join("");
  }

  const bars = document.getElementById("activityBars");
  if (bars) {
    bars.innerHTML = activityHeatmap.map((level, index) =>
      `<span class="activity-cell l${level}" title="Actividad ${index + 1}: nivel ${level}"></span>`
    ).join("");
  }
}

function renderContacts() {
  $("#contactLinks").innerHTML = contacts
    .map(
      (c) =>
        `<a class="contact ${colorClass(c.color)}" href="${c.url}" target="${c.url === "#" ? "_self" : "_blank"}" rel="noopener"><i class="${c.icon.includes("fa-brands") ? c.icon : "fa-solid " + c.icon}"></i><div><strong>${c.name}</strong><span>${c.value}</span></div></a>`,
    )
    .join("");
}
function renderStatus() {
  const focus = currentLang === "en" ? statusData.focusedOnEn : statusData.focusedOn;
  const available = currentLang === "en" ? statusData.availableForEn : statusData.availableFor;
  const learning = document.getElementById("statusLearningValue");
  const focusEl = document.getElementById("statusFocusValue");
  const availEl = document.getElementById("statusAvailableValue");
  if (learning) learning.textContent = statusData.learningMode;
  if (focusEl) focusEl.innerHTML = focus.map(x => `<span class="status-chip">${x}</span>`).join(" ");
  if (availEl) availEl.innerHTML = available.map(x => `<span class="status-chip soft">${x}</span>`).join(" ");
}

function terminal() {
  const lines = [
    "> whoami",
    "miguel@technical-portfolio",
    "> focus --areas",
    "pentesting osint linux iot nfc fullstack",
    "> status",
    "learning_mode=ON",
  ];
  let i = 0,
    txt = "";
  setInterval(() => {
    txt += lines[i] + "\n";
    $("#terminalText").textContent = txt;
    i = (i + 1) % lines.length;
    if (i === 0) txt = "";
  }, 900);
}
function reveal() {
  const obs = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("show");
      }),
    { threshold: 0.12 },
  );
  $$(".reveal,.section-card").forEach((el) => obs.observe(el));
}
function nav() {
  $("#menuBtn").addEventListener("click", () =>
    $("#mainNav").classList.toggle("open"),
  );
  $$(".main-nav a").forEach((a) =>
    a.addEventListener("click", () => $("#mainNav").classList.remove("open")),
  );
}
window.addEventListener("load", () => {
  renderTags();
  renderStats();
  renderOctagons();
  renderSkills();
  renderRepos();
  renderProjects();
  renderCerts();
  renderContacts();
  renderStatus();
  setLanguage("es");
  terminal();
  reveal();
  nav();
  $("#modalClose").addEventListener("click", () =>
    $("#certModal").classList.remove("open"),
  );
  $("#certModal").addEventListener("click", (e) => {
    if (e.target.id === "certModal") $("#certModal").classList.remove("open");
  });
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("lang-btn"))
      setLanguage(e.target.dataset.lang);
  });
});
