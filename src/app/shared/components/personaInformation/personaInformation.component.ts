import {  Component } from '@angular/core';
import { FirestoreService } from '../../../firestore/firebase.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface PersonalInformation {
  value: string
  label: string
  icon: string
}

@Component({
  selector: 'shared-persona-information',
  templateUrl: './personaInformation.component.html',
  styleUrl: './personaInformation.component.css',
})
export class PersonaInformationComponent {
  private firestoreService: FirestoreService<PersonalInformation>;
  personalInformation: PersonalInformation[] = [];


  constructor(private firestore: AngularFirestore) {
    this.firestoreService = new FirestoreService<PersonalInformation>(this.firestore);
    this.firestoreService.setCollection('personal-Information');
  }

  ngOnInit(): void {
    this.firestoreService.getDocuments().subscribe({
      next: (personal) => {
        this.personalInformation = personal;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
      }
    });
  }

}
