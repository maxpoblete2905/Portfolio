import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Project } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private collection: AngularFirestoreCollection<Project>;

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection<Project>('projects');
  }

  getProjects(): Observable<Project[]> {
    return this.collection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Project;
          const id = action.payload.doc.id;
          return { ...data, id };
        });
      }),
      catchError(error => {
        console.error('Error obteniendo datos de Firestore:', error);
        throw error;
      })
    );
  }

  addProject(project: Project): Observable<Project | undefined> {
    return from(this.collection.add(project)).pipe(
      switchMap(ref => {
        console.log('Proyecto agregado correctamente.');
        return this.collection.doc(ref.id).valueChanges();
      })
    );
  }

  updateProject(id: string, project: Project): Observable<void> {
    return from(this.collection.doc(id).update(project)).pipe(
      catchError(error => {
        console.error('Error actualizando proyecto en Firestore:', error);
        throw error;
      })
    );
  }

  deleteProject(id: string): Observable<void> {
    return from(this.collection.doc(id).delete()).pipe(
      catchError(error => {
        console.error('Error eliminando proyecto de Firestore:', error);
        throw error;
      })
    );
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return this.collection.doc(id).get().pipe(
      switchMap((snapshot) => {
        if (snapshot.exists) {
          const data = snapshot.data() as Project;
          return of(data);
        } else {
          console.error('No existe ningún proyecto con el ID proporcionado:', id);
          return of(undefined);
        }
      }),
      catchError(error => {
        console.error('Error obteniendo proyecto por ID:', error);
        throw error;
      })
    );
  }
}
