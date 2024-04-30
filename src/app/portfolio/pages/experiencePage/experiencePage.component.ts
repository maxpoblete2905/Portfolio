import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-experience-page',
  templateUrl: './experiencePage.component.html',
  styleUrl: './experiencePage.component.css',
})
export class ExperiencePageComponent {
  title: string = 'Mis Experiencias';

  proyectos = [
    {
      nombre: 'Mantenedor de Variables',
      descripcion: 'Esta aplicación facilita la gestión de variables críticas en entornos de producción.',
      logros: [
        'Concepción y desarrollo de la arquitectura completa.',
        'Implementación de sistemas robustos para la autenticación.',
        'Creación de una interfaz de usuario fluida y amigable.'
      ]
    },
    {
      nombre: 'Recomendador Dinámico para la Producción de Papel',
      descripcion: 'Una solución avanzada que mejora la eficiencia en la producción de papel.',
      logros: [
        'Análisis exhaustivo de datos operacionales en tiempo real.',
        'Desarrollo de algoritmos de recomendación sofisticados.',
        'Trabajo conjunto con el equipo de producción.'
      ]
    },
    {
      nombre: 'Simulador Dinámico de Escenarios de Producción',
      descripcion: 'Herramienta interactiva diseñada para optimizar procesos operativos.',
      logros: [
        'Diseño y desarrollo de un simulador de escenarios.',
        'Implementación de visualizaciones interactivas.',
        'Colaboración con ingenieros de procesos.'
      ]
    }
  ];
}
