import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconServicesTsService {
  constructor() {}

  getIconForTechnology(tech: string): string {
    switch (tech) {
      // Backend y APIs
      case 'Spring Boot':
        return 'https://cdn-icons-png.flaticon.com/128/919/919854.png';
      case 'Microservicios':
      case 'REST API':
        return 'https://cdn-icons-png.flaticon.com/128/2965/2965330.png';

      // Node.js y Frameworks
      case 'Node js':
        return 'https://cdn-icons-png.flaticon.com/128/919/919825.png';
      case 'Nest js':
        return 'https://d33wubrfki0l68.cloudfront.net/44c8e8a34a09eec0b4502f2a8dd74a838fa64b58/f1f29/img/logo-small.svg';

      // Frontend Frameworks
      case 'React':
        return 'https://cdn-icons-png.flaticon.com/128/1126/1126012.png';
      case 'Angular':
        return 'https://cdn-icons-png.flaticon.com/128/226/226269.png';

      // Bases de Datos
      case 'MongoDB':
        return 'https://cdn-icons-png.flaticon.com/128/5968/5968342.png';
      case 'Firestore':
        return 'https://upload.wikimedia.org/wikipedia/commons/3/38/Firebase_Logo.svg'; // Ícono oficial de Firestore
      case 'BigQuery':
        return 'https://upload.wikimedia.org/wikipedia/commons/4/46/Google-cloud-bigquery-logo.png';
      case 'PostgreSQL':
        return 'https://cdn-icons-png.flaticon.com/128/5968/5968342.png';
      case 'SQL MySQL':
        return 'https://cdn-icons-png.flaticon.com/128/919/919836.png';
      case 'SQLServer':
        return 'https://cdn-icons-png.flaticon.com/128/5815/5815802.png';

      // Diseño UI / CSS Frameworks
      case 'Bootstrap':
        return 'https://cdn-icons-png.flaticon.com/128/5968/5968672.png';
      case 'Tailwind CSS':
        return 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg';
      case 'Material UI':
        return 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg';
      case 'Ant Design':
        return 'https://cdn-icons-png.flaticon.com/128/10044/10044894.png';

      // Librerías de componentes
      case 'Storybook':
        return 'https://cdn-icons-png.flaticon.com/128/5968/5968771.png'; // Storybook corregido
      case 'Angular Material':
        return 'https://angular.io/assets/images/logos/angular/angular.png';
      case 'PrimeNG':
        return 'https://primeng.org/assets/images/primeng.svg';

      // DevOps / Control de versiones
      case 'Docker':
        return 'https://cdn-icons-png.flaticon.com/128/919/919853.png';
      case 'Git':
        return 'https://cdn-icons-png.flaticon.com/128/2111/2111288.png';
      case 'Github':
        return 'https://cdn-icons-png.flaticon.com/128/733/733609.png';
      case 'Gitlab':
        return 'https://cdn-icons-png.flaticon.com/128/5968/5968853.png';
      case 'Git flow':
      case 'Trunk base':
        return 'https://cdn-icons-png.flaticon.com/128/4926/4926624.png';

      // Cloud Providers
      case 'Google Cloud Platform (GCP)':
        return 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg';
      case 'Azure':
        return 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg';
      case 'AWS':
        return 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg';

      // Otros
      case 'Patrones de diseño':
        return 'https://cdn-icons-png.flaticon.com/128/1039/1039490.png';
      case 'Sistema de diseño':
        return 'https://cdn-icons-png.flaticon.com/128/1041/1041916.png';

      // Default
      default:
        return 'https://cdn-icons-png.flaticon.com/128/1260/1260667.png';
    }
  }
}
