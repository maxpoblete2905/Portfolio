import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from '../../../firestore/firebase.service';
import { IconServicesTsService } from '../../../shared/services/icon.services.ts.service';

@Component({
  selector: 'portfolio-project-page',
  templateUrl: './projectPage.component.html',
  styleUrl: './projectPage.component.css',
})
export class ProjectPageComponent implements OnInit {
  public title: string = 'Proyect';
  public id: number = 0;
  public project: Project = {
    title: '',
    description: '',
    imageUrl: '',
    companyName: '',
    position: '',
    client: '',
    technologies: [],
    views: [],
  };

  private firestoreService: FirestoreService<Project>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private firestore: AngularFirestore,
    private router: Router,
    private iconServicesTsService: IconServicesTsService
  ) {
    this.firestoreService = new FirestoreService<Project>(this.firestore);
    this.firestoreService.setCollection('projects');
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.firestoreService.getDocumentById(id)))
      .subscribe((project) => {
        if (!project) {
          this.router.navigateByUrl('portfolio/projects');
          return;
        }

        this.project = project;
      });
  }

  getIconForName(tech: string): string {
    return this.iconServicesTsService.getIconForTechnology(tech);
  }

  public currentIndex: number = 0;

  nextImage(): void {
    if (this.currentIndex < this.project.views.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  previousImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.project.views.length - 1;
    }
  }
}
