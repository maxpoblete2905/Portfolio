import { Component } from '@angular/core';

export interface Skill {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
}


@Component({
  selector: 'portfolio-skills-page',
  templateUrl: './skillsPage.component.html',
  styleUrls: ['./skillsPage.component.css'],
})
export class SkillsPageComponent {
  title: string = 'Habilidades';
  skills: Skill[] = [
    {
      icon: 'fas fa-cogs',
      title: 'Spring Boot / Microservicios / REST API',
      description: 'Experiencia en el desarrollo de aplicaciones utilizando Spring Boot para la creación de microservicios y REST APIs.',
      technologies: ['Spring Boot', 'Microservicios', 'REST API'],
    },
    {
      icon: 'fab fa-react',
      title: 'Ts / React / Angular / Node / Nest',
      description: 'Conocimientos avanzados en TypeScript, React, Angular, Node.js y Nest.js para el desarrollo de aplicaciones web.',
      technologies: ['TypeScript', 'React', 'Angular', 'Node.js', 'Nest.js'],
    },
    {
      icon: 'fas fa-database',
      title: 'MongoDB / Firestore',
      description: 'Experiencia en bases de datos NoSQL como MongoDB y Firestore para almacenamiento de datos.',
      technologies: ['MongoDB', 'Firestore'],
    },
    {
      icon: 'fab fa-bootstrap',
      title: 'Bootstrap / Tailwind / MUI / Storybook',
      description: 'Habilidad en el uso de herramientas como Bootstrap, Tailwind CSS, Material UI y Storybook para el desarrollo de interfaces de usuario.',
      technologies: ['Bootstrap', 'Tailwind CSS', 'Material UI', 'Storybook'],
    },
    {
      icon: 'fas fa-database',
      title: 'SQL MySQL / SQLServer / PostgreSQL',
      description: 'Experiencia en el manejo de bases de datos relacionales como MySQL, SQLServer y PostgreSQL.',
      technologies: ['SQL MySQL', 'SQLServer', 'PostgreSQL'],
    },
    {
      icon: 'fas fa-object-group',
      title: 'Patrones de diseño / Sistema de diseño',
      description: 'Conocimientos en patrones de diseño y desarrollo de sistemas de diseño para crear interfaces coherentes y escalables.',
      technologies: ['Patrones de diseño', 'Sistema de diseño'],
    },
    {
      icon: 'fab fa-docker',
      title: 'Docker',
      description: 'Experiencia en el uso de Docker para la creación, implementación y gestión de contenedores de aplicaciones.',
      technologies: ['Docker'],
    },
    {
      icon: 'fab fa-git-alt',
      title: 'Git / Github / Gitlab / Git flow / trunk base',
      description: 'Habilidad en el uso de sistemas de control de versiones como Git y plataformas como Github y Gitlab, junto con metodologías de flujo de trabajo como Git flow y trunk based development.',
      technologies: ['Git', 'Github', 'Gitlab', 'Git flow', 'Trunk base'],
    },
    {
      icon: 'fab fa-google',
      title: 'Cloud GCP / Azure',
      description: 'Experiencia en el uso de plataformas en la nube como Google Cloud Platform (GCP) y Microsoft Azure para el desarrollo y despliegue de aplicaciones en la nube.',
      technologies: ['Google Cloud Platform (GCP)', 'Azure'],
    },
  ];

  getIconForTechnology(tech: string): string {
    switch (tech) {
    case 'Spring Boot':
      return 'fab fa-java';
    case 'Microservicios':
    case 'REST API':
    case 'Node.js':
    case 'Nest.js':
      return 'fab fa-node-js';
    case 'React':
    case 'Angular':
    case 'Vue.js':
      return 'fab fa-js';
    case 'MongoDB':
    case 'Firestore':
      return 'fas fa-database';
    case 'Bootstrap':
    case 'Tailwind CSS':
    case 'Material UI':
    case 'Ant Design':
      return 'fab fa-css3-alt';
    case 'Storybook':
    case 'Angular Material':
    case 'PrimeNG':
      return 'fas fa-book-open';
    case 'SQL MySQL':
    case 'SQLServer':
    case 'PostgreSQL':
      return 'fas fa-database';
    case 'Patrones de diseño':
      return 'fas fa-paint-brush';
    case 'Sistema de diseño':
      return 'fas fa-layer-group';
    case 'Docker':
      return 'fab fa-docker';
    case 'Git':
    case 'Github':
    case 'Gitlab':
      return 'fab fa-git-alt';
    case 'Git flow':
    case 'Trunk base':
      return 'fas fa-code-branch';
    case 'Google Cloud Platform (GCP)':
    case 'Azure':
      return 'fab fa-cloud';
    default:
      return 'fas fa-code'; // Icono predeterminado
    }
  }



}
