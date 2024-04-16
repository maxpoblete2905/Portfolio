import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'portfolio-projects-page',
  templateUrl: './projectsPage.component.html',
  styleUrls: ['./projectsPage.component.css'],
})

export class ProjectsPageComponent implements OnInit{
  title: string = 'proyectos';
  projects: Project[] = [];

  constructor(private projectService: ProjectService){}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects)=> {
      this.projects = projects;
    });
  }

}
