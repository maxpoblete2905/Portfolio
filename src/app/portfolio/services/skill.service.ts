import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Skill } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private collection: AngularFirestoreCollection<Skill>;

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection<Skill>('skills');
  }

  getSkills(): Observable<Skill[]> {
    return this.collection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Skill;
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


  addSkill(project: Skill): Observable<Skill | undefined> {
    return from(this.collection.add(project)).pipe(
      switchMap(ref => {
        console.log('Proyecto agregado correctamente.');
        return this.collection.doc(ref.id).valueChanges();
      })
    );
  }

  updateSkill(id: string, project: Skill): Observable<void> {
    return from(this.collection.doc(id).update(project)).pipe(
      catchError(error => {
        console.error('Error actualizando proyecto en Firestore:', error);
        throw error;
      })
    );
  }

  deleteSkill(id: string): Observable<void> {
    return from(this.collection.doc(id).delete()).pipe(
      catchError(error => {
        console.error('Error eliminando proyecto de Firestore:', error);
        throw error;
      })
    );
  }

  getSkillById(id: string): Observable<Skill | undefined> {
    return this.collection.doc(id).get().pipe(
      switchMap((snapshot) => {
        if (snapshot.exists) {
          const data = snapshot.data() as Skill;
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
