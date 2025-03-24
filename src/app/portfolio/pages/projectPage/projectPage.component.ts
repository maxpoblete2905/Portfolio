import { Component, OnInit } from '@angular/core';
import { DarkMode, Project } from '../../interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from '../../../firestore/firebase.service';
import { IconServicesTsService } from '../../../shared/services/icon.services.ts.service';
import { GlobalDataService } from '../../../firestore/global-data.service';

@Component({
  selector: 'portfolio-project-page',
  templateUrl: './projectPage.component.html',
  styleUrl: './projectPage.component.css',
})
export class ProjectPageComponent implements OnInit {
  public title: string = 'Proyect';
  public id: number = 0;
  private firebaseDarkMode: FirestoreService<DarkMode>;
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
  public currentIndex: number = 0;
  public technologyURL: Record<string, string> = {};
  public darkMode: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private firestore: AngularFirestore,
    private router: Router,
    private globalDataService: GlobalDataService,

  ) {
    this.firestoreService = new FirestoreService<Project>(this.firestore);
    this.firestoreService.setCollection('projects');
    this.firebaseDarkMode = new FirestoreService<DarkMode>(this.firestore);
    this.firebaseDarkMode.setCollection('style');
  }

  transform(value: string): string {
    return value ? value.split('_').join(' ') : value;
  }

  ngOnInit(): void {

    this.globalDataService.technologyURL$.subscribe(urls => {
      this.technologyURL = urls;
    });

    this.globalDataService.darkMode$.subscribe(darkMode => {
      this.darkMode = darkMode;
    });

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
