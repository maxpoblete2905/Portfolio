import { Component, Input, input, OnInit } from '@angular/core';
import { FirestoreService } from '../../../firestore/firebase.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PersonalInformation } from '../../../portfolio/interfaces/personal.interfece';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  public images: string[] = ['assets/perfil.jpeg', 'assets/perfil.jpeg', 'assets/perfil.jpeg'];
  private firestoreService: FirestoreService<PersonalInformation>;
  public name: string = '';
  public description: string = '';
  public university_title: string = '';
  public update: string = '';

  constructor(
    private firestore: AngularFirestore,
  ) {
    this.firestoreService = new FirestoreService<PersonalInformation>(this.firestore);
    this.firestoreService.setCollection('personal-information');
  }

  public sections = [
    { route: 'projects', name: 'Proyectos', icon: 'fas fa-code' },
    { route: 'skills', name: 'Habilidades', icon: 'fas fa-pencil-alt' },
    { route: 'experience', name: 'Experiencia', icon: 'fas fa-briefcase' },
    { route: 'education', name: 'Educación', icon: 'fas fa-graduation-cap' },
    { route: 'contact', name: 'Contactos', icon: 'fas fa-envelope' },
  ];


  ngOnInit(): void {
    this.firestoreService.getDocuments().subscribe({
      next: (personalInformation) => {
        this.name = personalInformation[0].name.toUpperCase();
        this.description = personalInformation[0].description
        this.university_title = personalInformation[0].university_title
        this.update = personalInformation[0].update
      },
      error: (error) => {
        console.error('Error loading projects:', error);
      }
    });
  }
}
