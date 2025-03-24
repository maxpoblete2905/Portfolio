import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  // Datos globales
  private technologyURLSource = new BehaviorSubject<Record<string, string>>({});
  private darkModeSource = new BehaviorSubject<boolean>(true);

  // Observables para que otros componentes se suscriban
  public technologyURL$ = this.technologyURLSource.asObservable();
  public darkMode$ = this.darkModeSource.asObservable();

  constructor() { }

  // Métodos para actualizar los datos
  setTechnologyURL(techURLs: Record<string, string>) {
    this.technologyURLSource.next(techURLs);
  }

  setDarkMode(darkMode: boolean) {
    this.darkModeSource.next(darkMode);
  }
}
