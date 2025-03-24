import { Component, OnInit } from '@angular/core';
import { DarkMode, Skill } from '../../interfaces';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from '../../../firestore/firebase.service';
import { GlobalDataService } from '../../../firestore/global-data.service';

@Component({
  selector: 'portfolio-skills-page',
  templateUrl: './skillsPage.component.html',
  styleUrls: ['./skillsPage.component.css'],
})
export class SkillsPageComponent implements OnInit {
  private firestoreService: FirestoreService<Skill>;
  public title: string = 'Habilidades'
  public skills: Skill[] = [];
  public pathFirestore: string = 'skills'
  public technologyURL: Record<string, string> = {};
  public darkMode: boolean = true;

  constructor(
    private globalDataService: GlobalDataService,
    private firestore: AngularFirestore,

  ) {
    this.firestoreService = new FirestoreService<Skill>(this.firestore);
    this.firestoreService.setCollection(this.pathFirestore);
  }

  transform(value: string): string {
    return value ? value.split('_').join(' ').toLowerCase() : value.toLowerCase();
  }

  async ngOnInit(): Promise<void> {
    try {
      this.globalDataService.technologyURL$.subscribe(urls => {
        this.technologyURL = urls;
      });

      this.globalDataService.darkMode$.subscribe(darkMode => {
        this.darkMode = darkMode;
      });

      this.firestoreService.getDocuments().subscribe({
        next: (skills: Skill[]) => {
          this.skills = skills;
        },
        error: (error: unknown) => {
          console.error('Error cargando habilidades:', error);
        }
      });

    } catch (error) {
      console.error('Error al cargar tecnologías:', error);
    }
  }

}
