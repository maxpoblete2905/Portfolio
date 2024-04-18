import { Component, OnInit } from '@angular/core';
import { Skill } from '../../interfaces';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../../../auth/services/auth.service';
import { FirestoreService } from '../../../firestore/firebase.service';

@Component({
  selector: 'portfolio-skills-page',
  templateUrl: './skillsPage.component.html',
  styleUrls: ['./skillsPage.component.css'],
})
export class SkillsPageComponent implements OnInit {
  title: string = 'Habilidades';
  skills: Skill[] = [];
  private firestoreService: FirestoreService<Skill>;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {
    this.firestoreService = new FirestoreService<Skill>(this.firestore);
    this.firestoreService.setCollection('skills');
  }

  ngOnInit(): void {
    console.log(this.authService.getUserData());
    this.firestoreService.getDocuments().subscribe({
      next: (skills: Skill[]) => {
        this.skills = skills;
      },
      error: (error: unknown) => {
        console.error('Error loading projects:', error);
      }
    });
  }

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
      return 'fas fa-code';
    }
  }
}
