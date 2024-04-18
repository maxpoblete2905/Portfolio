import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { projectsMock } from '../../../portfolio/mock/project';
import { Project } from '../../../portfolio/interfaces';

@Component({
  selector: 'app-project-manager',
  templateUrl: './projectManager.component.html',
  styleUrls: ['./projectManager.component.css'], // Corrección de 'styleUrl' a 'styleUrls'
})
export class ProjectManagerComponent implements OnInit {
  projects = projectsMock;
  projectForm: FormGroup | null = null; // Cambio para usar FormGroup

  constructor(private fb: FormBuilder) {} // Inyección del FormBuilder

  ngOnInit(): void {
    this.projects = projectsMock; // Asegurarse de que los proyectos están cargados
  }

  initializeForm(project: Project | null = null): void {
    if (project) {
      // Si se pasa un proyecto, se inicializa el formulario para editar
      this.projectForm = this.fb.group({
        id: [project.id, Validators.required],
        title: [project.title, Validators.required],
        description: [project.description, Validators.required],
        companyName: [project.companyName, Validators.required],
        position: [project.position, Validators.required],
        client: [project.client, Validators.required],
        technologies: [project.technologies.join(', '), Validators.required], // Asumimos que technologies es un array
      });
    } else {
      // Formulario vacío para agregar nuevos proyectos
      this.projectForm = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        companyName: ['', Validators.required],
        position: ['', Validators.required],
        client: ['', Validators.required],
        technologies: ['', Validators.required],
      });
    }
  }

  onSubmit(): void {
    if (this.projectForm && this.projectForm.valid) {
      const formValue = this.projectForm.value;
      console.log('Form Submission:', formValue);
      // Aquí iría la lógica para agregar o actualizar el proyecto en el backend
      this.projectForm = null; // Cerrar formulario tras la operación
    }
  }

  deleteProject(id: string): void {
    console.log('Delete project with id:', id);
    // Lógica para eliminar el proyecto
    this.projects = this.projects.filter(project => '34' !== id);
  }

  editProject(project: Project): void {
    this.initializeForm(project); // Inicializa el formulario con los datos del proyecto para editar
  }


}
