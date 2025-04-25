export const projectData = [
  {
    id: 1,
    title: "Sistema de Gestión de Candidaturas",
    description: "Aplicación full-stack que permite a los usuarios gestionar y dar seguimiento a sus solicitudes de empleo, incluyendo información sobre empresas, estados y anotaciones.",
    longDescription: `
      Esta aplicación de gestión de candidaturas permite a los usuarios llevar un seguimiento detallado de los puestos de trabajo a los que han aplicado.
      
      Características principales:
      - Registro y seguimiento de candidaturas laborales
      - Gestión de estados de aplicación (Enviada, En proceso, Entrevista, Rechazada, Aceptada)
      - Almacenamiento de información de contacto de empresas
      - Sistema de notas y recordatorios para cada candidatura
      - Estadísticas y reportes sobre el proceso de búsqueda laboral
      - Interfaz intuitiva y responsive para uso web (versión móvil en desarrollo)
      
      El proyecto utiliza una arquitectura moderna con Spring Boot para el backend, React para el frontend, y está diseñado siguiendo los principios de microservicios.
    `,
    image: "././assets/images/projects/candidaturas.jpg", // Placeholder
    technologies: ["Java", "Spring Boot", "React", "MySQL", "REST API", "JWT", "Hibernate"],
    demoLink: null, // Si no hay demo desplegada aún
    repoLinks: [
      { 
        name: "Backend (Spring Boot)", 
        url: "https://github.com/GianBerninzon/job-tracker-api" 
      },
      { 
        name: "Frontend (React)", 
        url: "https://github.com/GianBerninzon/job-tracker-client" 
      }
    ],
    featured: true,
    completionDate: "2024-04"
  },
  {
    id: 2,
    title: "Portafolio Personal",
    description: "Mi portafolio profesional desarrollado con React y styled-components, con un diseño espacial animado y responsive para mostrar mis proyectos y habilidades.",
    longDescription: `
      Este portafolio web personal desarrollado con React incluye:
      
      - Diseño espacial con efecto de estrellas y cielo animado
      - Secciones para mostrar habilidades técnicas, proyectos y formación
      - Navegación intuitiva entre secciones
      - Animaciones suaves usando Framer Motion
      - Diseño completamente responsive para todo tipo de dispositivos
      - Sistema de rutas con React Router para navegación fluida
      
      El proyecto está estructurado siguiendo buenas prácticas de desarrollo, con componentes reutilizables y un sistema de estilos coherente.
    `,
    image: "././assets/images/projects/portfolio.jpg", // Placeholder
    technologies: ["React", "Styled Components", "Framer Motion", "React Router", "JavaScript"],
    demoLink: "https://gianberninzon.github.io/PortfolioReact/", // La URL de tu GitHub Pages
    repoLinks: [
      { 
        name: "Repositorio", 
        url: "https://github.com/GianBerninzon/PortfolioReact" 
      }
    ],
    featured: true,
    completionDate: "2025-04"
  }
];