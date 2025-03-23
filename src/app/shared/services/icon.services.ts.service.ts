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
        return 'https://cdn-icons-png.flaticon.com/128/919/919854.png';
      case 'Node js':
      case 'Nest js':
        return 'https://cdn-icons-png.flaticon.com/128/919/919825.png';
      case 'React':
        return 'https://cdn-icons-png.flaticon.com/128/919/919851.png';
      case 'Angular':
        return 'https://cdn-icons-png.flaticon.com/128/226/226269.png';
      case 'MongoDB':
      case 'Firestore':
      case 'BigQuery':
        return 'https://cdn-icons-png.flaticon.com/128/919/919836.png';
      case 'PostgreSQL':
        return 'https://cdn-icons-png.flaticon.com/128/919/919853.png';
      case 'Docker':
        return 'https://cdn-icons-png.flaticon.com/128/919/919853.png';
      case 'Git':
      case 'Github':
      case 'Gitlab':
        return 'https://cdn-icons-png.flaticon.com/128/919/919847.png';
      case 'AWS':
        return 'https://cdn-icons-png.flaticon.com/128/919/919828.png';
      case 'Azure':
        return 'https://cdn-icons-png.flaticon.com/128/919/919829.png';
      default:
        return 'https://cdn-icons-png.flaticon.com/128/1260/1260667.png';
    }
  }
}
