import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../firestore/firebase.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface PersonalInformation {
  value: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'shared-persona-information',
  templateUrl: './personaInformation.component.html',
  styleUrls: ['./personaInformation.component.css'],
})
export class PersonaInformationComponent implements OnInit {
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
      },
    });
  }

  realizarAccion(seleccion: string): void {
    switch (seleccion) {
    case 'phone':
      window.location.href = 'tel:+920055404';
      break;
    case 'whatsapp':
      window.open('https://web.whatsapp.com/', '_blank');
      break;
    case 'email':
      window.location.href = 'mailto:max.poblete2905@gmail.com';
      break;
    }
  }
}
