import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconServicesTsService {
  constructor() { }
  getIconForTechnology(tech: string): string {
    switch (tech) {
    case 'Spring Boot':
    case 'Microservicios':
    case 'REST API':
      return 'fab fa-java';
    case 'Node js':
      return 'fa-brands fa-node';
    case 'Nest js':
      return 'fa-brands fa-node-js';
    case 'React':
      return 'fa-brands fa-react';
    case 'Angular':
      return 'fab fa-js';
    case 'MongoDB':
    case 'Firestore':
    case 'BigQuery':
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
    case 'PostgreSQL':
      return 'fa-sharp fa-solid fa-database';
    case 'SQL MySQL':
    case 'SQLServer':
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
      return 'fa-brands fa-google';
    case 'Azure':
      return 'fa-regular fa-cloud';
    default:
      return 'fas fa-code';
    }
  }

}
