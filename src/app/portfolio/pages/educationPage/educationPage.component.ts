import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-education-page',
  templateUrl: './educationPage.component.html',
  styleUrls: ['./educationPage.component.css'],
})
export class EducationPageComponent {
  title: string = 'Educación';

  // Array de educación
  educations = [
    {
      institution: 'Intituto Profacional AIEP',
      startYear: 2016,
      endYear: 2018,
      title: 'Programador computacional.',
      description: 'Especialización en desarrollo de software y sistemas de información.'
    },
    {
      institution: 'Intituto Profacional AIEP',
      startYear: 2019,
      endYear: 2020,
      title: 'Analista de sistamas.',
      description: 'Capacitación técnica en mantenimiento de redes y soporte informático.'
    }
  ];

  // Array de certificaciones
  certifications = [
    {
      name: 'Certificado Microsoft',
      year: 2019
    },
    {
      name: 'AWS Certified Solutions Architect – Associate',
      year: 2021
    }
  ];
}
