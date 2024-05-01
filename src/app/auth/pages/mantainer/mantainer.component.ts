import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../../portfolio/interfaces';

@Component({
  selector: 'shared-mantainer',
  templateUrl: './mantainer.component.html',
  styleUrls: ['./mantainer.component.css'], // El nombre de la propiedad es styleUrls, no styleUrl
})
export class MantainerComponent {

  public projectForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.projectForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      position: ['', [Validators.required]],
      client: ['', [Validators.required]],
    });
  }

  get views() {
    return this.projectForm.get('views') as FormArray;
  }

  get technologies() {
    return this.projectForm.get('technologies') as FormArray;
  }

  createViewFormGroup() {
    return this.fb.group({
      src: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  createTechnologyControl() {
    return this.fb.control('', [Validators.required]);
  }

  addView() {
    this.views.push(this.createViewFormGroup());
  }

  addTechnology() {
    this.technologies.push(this.createTechnologyControl());
  }

  onSubmit() {
    if (this.projectForm.valid) {
      console.log(this.projectForm.value);
      const data: Project = {
        title: this.projectForm.value['title'],
        description: this.projectForm.value['description'],
        imageUrl: this.projectForm.value['imageUrl'],
        companyName: this.projectForm.value['companyName'],
        position: this.projectForm.value['position'],
        client: this.projectForm.value['client'],
        technologies: this.projectForm.value['technologies'],
        views: this.projectForm.value['views']
      };

      console.log(data);
    } else {
      // Si el formulario no es válido, puedes mostrar mensajes de error o hacer otras acciones
    }
  }
}
