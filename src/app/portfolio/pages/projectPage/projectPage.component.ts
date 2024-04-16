import {  Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'portfolio-project-page',
  templateUrl: './projectPage.component.html',
  styleUrl: './projectPage.component.css',
})
export class ProjectPageComponent implements OnInit {

  public title: string = 'Proyect';
  public id: number = 0;
  public project!:Project;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id })=>this.projectService.getProjectById(id))
      )
      .subscribe((i) => {

        this.project = i as Project;
        console.log(i);

      });  }


  getIconForTechnology(tech: string): string {
    switch (tech) {
    case 'Spring Boot':
      return 'fab fa-java';
    case 'Microservicios':
    case 'REST API':
    case 'Node.js':
    case 'Nest.js':
      return 'fab fa-node-js';
    case 'React':
    case 'Angular':
    case 'Vue.js':
      return 'fab fa-js';
    case 'MongoDB':
    case 'Firestore':
      return 'fas fa-database';
    case 'Bootstrap':
    case 'Tailwind CSS':
    case 'Material UI':
    case 'Ant Design':
      return 'fab fa-css3-alt';
    case 'Storybook':
    case 'Angular Material':
    case 'PrimeNG':
      return 'fas fa-book-open';
    case 'SQL MySQL':
    case 'SQLServer':
    case 'PostgreSQL':
      return 'fas fa-database';
    case 'Patrones de diseño':
      return 'fas fa-paint-brush';
    case 'Sistema de diseño':
      return 'fas fa-layer-group';
    case 'Docker':
      return 'fab fa-docker';
    case 'Git':
    case 'Github':
    case 'Gitlab':
      return 'fab fa-git-alt';
    case 'Git flow':
    case 'Trunk base':
      return 'fas fa-code-branch';
    case 'Google Cloud Platform (GCP)':
    case 'Azure':
      return 'fab fa-cloud';
    default:
      return 'fas fa-code'; // Icono predeterminado
    }
  }

}
