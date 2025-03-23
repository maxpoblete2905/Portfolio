import { Component } from '@angular/core';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {

  public images: string[] = ['assets/perfil.jpeg', 'assets/perfil.jpeg', 'assets/perfil.jpeg'];
  public sections = [
    { route: 'projects', name: 'Proyectos', icon: 'https://cdn-icons-png.flaticon.com/128/1260/1260667.png' },
    { route: 'skills', name: 'Habilidades', icon: 'https://cdn-icons-png.flaticon.com/128/1040/1040209.png' },  // Habilidades con el color adecuado
    { route: 'education', name: 'Educación', icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135753.png' },  // Educación con el color adecuado
    { route: 'contact', name: 'Contactos', icon: 'https://cdn-icons-png.flaticon.com/128/732/732200.png' }
  ];
}
