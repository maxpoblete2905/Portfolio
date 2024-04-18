import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from '../../../firestore/firebase.service';

@Component({
  selector: 'portfolio-projects-page',
  templateUrl: './projectsPage.component.html',
  styleUrls: ['./projectsPage.component.css'],
})

export class ProjectsPageComponent implements OnInit{
  title: string = 'proyectos';
  projects: Project[] = [];
  private firestoreService: FirestoreService<Project>;

  constructor(private firestore: AngularFirestore) {
    this.firestoreService = new FirestoreService<Project>(this.firestore);
    this.firestoreService.setCollection('projects');
  }

  ngOnInit(): void {
    this.firestoreService.getDocuments().subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
      }
    });
  }

}
