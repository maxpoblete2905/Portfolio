import { Component, OnInit } from '@angular/core';
import { Skill } from '../../interfaces';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../../../auth/services/auth.service';
import { FirestoreService } from '../../../firestore/firebase.service';
import { IconServicesTsService } from '../../../shared/services/icon.services.ts.service';

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
    private authService: AuthService,
    private iconServicesTsService: IconServicesTsService,
  ) {
    this.firestoreService = new FirestoreService<Skill>(this.firestore);
    this.firestoreService.setCollection('skills');
  }

  ngOnInit(): void {
    this.firestoreService.getDocuments().subscribe({
      next: (skills: Skill[]) => {
        this.skills = skills;
      },
      error: (error: unknown) => {
        console.error('Error loading projects:', error);
      }
    });
  }

  getIconForName(tech: string): string {
    return this.iconServicesTsService.getIconForTechnology(tech);
  }
}
