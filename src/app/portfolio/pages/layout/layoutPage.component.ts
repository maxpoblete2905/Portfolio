import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from '../../../firestore/firebase.service';
import { FileData, StorageService } from '../../../firestore/storage.service';
import { DarkMode } from '../../interfaces';
import { GlobalDataService } from '../../../firestore/global-data.service';

@Component({
  selector: 'portfolio-layout-page',
  templateUrl: './layoutPage.component.html',
  styleUrls: ['./layoutPage.component.css'],
})
export class LayoutPageComponent implements OnInit {
  private firebaseDarkMode: FirestoreService<DarkMode>;
  public technologyStorageList: FileData[] = [];
  public technologyURL: Record<string, string> = {};
  public darkMode: boolean = true;

  constructor(
    private firestore: AngularFirestore,
    private storageService: StorageService,
    private globalDataService: GlobalDataService
  ) {
    this.firebaseDarkMode = new FirestoreService<DarkMode>(this.firestore);
    this.firebaseDarkMode.setCollection('style');
  }

  async ngOnInit(): Promise<void> {
    try {
      this.firebaseDarkMode.getDocuments().subscribe({
        next: (data: DarkMode[]) => {
          this.darkMode = data[0].isStyleOne;
          this.globalDataService.setDarkMode(this.darkMode); // Actualizamos el servicio con el estado de dark mode
        },
        error: (error: unknown) => {
          console.error('Error cargando estilo:', error);
        }
      });

      this.technologyStorageList = await this.cargarTodasLasTecnologias('portfolio/tecnologias');
      const techMap: Record<string, string> = {};

      this.technologyStorageList.forEach(({ name, url }) => {
        const techName = name.split('.')[0];
        techMap[techName] = url;
      });

      this.technologyURL = techMap;
      this.globalDataService.setTechnologyURL(techMap); // Actualizamos el servicio con las URLs de tecnologías

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
