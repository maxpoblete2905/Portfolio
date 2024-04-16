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


}
