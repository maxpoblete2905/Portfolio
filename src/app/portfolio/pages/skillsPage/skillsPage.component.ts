import { Component, OnInit } from '@angular/core';
import { DarkMode, Skill } from '../../interfaces';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from '../../../firestore/firebase.service';
import { FileData, StorageService } from '../../../firestore/storage.service';

@Component({
  selector: 'portfolio-skills-page',
  templateUrl: './skillsPage.component.html',
  styleUrls: ['./skillsPage.component.css'],
})
export class SkillsPageComponent implements OnInit {
  public title: string = 'Habilidades';
  public skills: Skill[] = [];
  private firestoreService: FirestoreService<Skill>;
  public technologyStorageList: FileData[] = [];
  public technologyURL: Record<string, string> = {};
  public pathStorage: string = 'portfolio/tecnologias';
  public pathFirestore: string = 'skills'
  private firebaseDarkMode: FirestoreService<DarkMode>;
  public darkMode: boolean = true;

  constructor(
    private firestore: AngularFirestore,
    private storageService: StorageService
  ) {
    this.firestoreService = new FirestoreService<Skill>(this.firestore);
    this.firebaseDarkMode = new FirestoreService<DarkMode>(this.firestore);

    this.firestoreService.setCollection(this.pathFirestore);
    this.firebaseDarkMode.setCollection('style');
  }

  async ngOnInit(): Promise<void> {
    try {
      this.firebaseDarkMode.getDocuments().subscribe({
        next: (data: DarkMode[]) => {
          console.log(data)
          this.darkMode = data[0].isStyleOne
        },
        error: (error: unknown) => {
          console.error('Error cargando habilidades:', error);
        }
      });
      this.technologyStorageList = await this.cargarTodasLasTecnologias(this.pathStorage);
      const techMap = new Map<string, string>();

      // Convertimos la lista en un mapa para búsqueda rápida
      this.technologyStorageList.forEach(({ name, url }) => {
        const techName = name.split('.')[0]; // Obtener nombre sin extensión
        techMap.set(techName, url);
      });

      this.firestoreService.getDocuments().subscribe({
        next: (skills: Skill[]) => {
          this.skills = skills;

          // Asignar URLs basándose en el mapa
          this.skills.forEach(skill => {
            skill.technologies.forEach(tech => {
              if (techMap.has(tech)) {
                this.technologyURL[tech] = techMap.get(tech)!;
              }
            });
          });
        },
        error: (error: unknown) => {
          console.error('Error cargando habilidades:', error);
        }
      });

    } catch (error) {
      console.error('Error al cargar tecnologías:', error);
    }
  }

  private async cargarTodasLasTecnologias(path: string): Promise<FileData[]> {
    try {
      return await this.storageService.getAllFileUrls(path);
    } catch (error) {
      console.error('Error obteniendo archivos de tecnologías:', error);
      return [];
    }
  }
}
