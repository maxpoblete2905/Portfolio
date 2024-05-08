import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-experience-page',
  templateUrl: './experiencePage.component.html',
  styleUrl: './experiencePage.component.css',
})
export class ExperiencePageComponent {
  title: string = 'Experiencias';

  colaboradorInfo = [
    {
      title: 'Colaborador en el desarrollo y diseño de Interfaz de Usuario:',
      content: [
        'Implementé principios de diseño centrados en el usuario para mejorar la usabilidad y la experiencia del usuario.',
        'Colaboré estrechamente con el equipo de diseño para traducir los requisitos del cliente en interfaces de usuario intuitivas y atractivas.'
      ]
    },
    {
      title: 'Colaborador en el desarrollo de backend, API Rest y Microservicios:',
      content: [
        'Desarrollé soluciones backend robustas y escalables utilizando tecnologías modernas como [nombre de la tecnología].',
        'Contribuí al diseño y la implementación de APIs RESTful y microservicios, garantizando la interoperabilidad y la eficiencia del sistema.'
      ]
    },
    {
      title: 'Colaborador y administrador de bases de datos:',
      content: [
        'Gestioné eficientemente bases de datos [nombre de la base de datos] para garantizar la integridad, seguridad y rendimiento de los datos.',
        'Colaboré en el diseño de esquemas de bases de datos optimizados para satisfacer los requisitos del sistema y las necesidades del negocio.'
      ]
    },
    {
      title: 'Colaborador en el desarrollo de test unitarios y pruebas de integración:',
      content: [
        'Implementé pruebas unitarias exhaustivas para validar el funcionamiento individual de los componentes del software.',
        'Contribuí al desarrollo e implementación de pruebas de integración automatizadas, garantizando la calidad y la estabilidad del sistema en su conjunto.'
      ]
    },
    {
      title: 'Experiencia con servicios Cloud de Firestore:',
      content: [
        'Desarrollé aplicaciones utilizando servicios Cloud de Firestore para gestionar bases de datos en la nube de manera eficiente y escalable.',
        'Implementé funcionalidades avanzadas como consultas en tiempo real y sincronización de datos para mejorar la experiencia del usuario.'
      ]
    },
    {
      title: 'Experiencia con microservicios:',
      content: [
        'Participé en el diseño, desarrollo y despliegue de arquitecturas basadas en microservicios para crear sistemas modulares y escalables.',
        'Utilicé tecnologías como Docker y Kubernetes para gestionar y orquestar contenedores, asegurando la alta disponibilidad y el rendimiento del sistema.'
      ]
    },
    {
      title: 'Experiencia con sistema de diseño en Storybook:',
      content: [
        'Contribuí al desarrollo de un sistema de diseño utilizando Storybook, permitiendo la creación y documentación de componentes de manera modular y reutilizable.',
        'Colaboré con el equipo para establecer y mantener un conjunto coherente de componentes y estilos, mejorando la consistencia y eficiencia en el desarrollo.'
      ]
    }
  ];
}

