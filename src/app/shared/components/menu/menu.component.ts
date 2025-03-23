import { Component } from '@angular/core';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {

  public images: string[] = ['assets/perfil.jpeg', 'assets/perfil.jpeg', 'assets/perfil.jpeg'];
  public sections = [
    { route: 'projects', name: 'Proyectos', icon: 'https://firebasestorage.googleapis.com/v0/b/portfolio-549f8.appspot.com/o/portfolio%2Ftecnologias%2Fprojects.png?alt=media&token=4ce67736-85ae-4090-b406-4c129c734635' },
    { route: 'skills', name: 'Habilidades', icon: 'https://firebasestorage.googleapis.com/v0/b/portfolio-549f8.appspot.com/o/portfolio%2Ftecnologias%2Fskills.png?alt=media&token=d2807831-2bef-4af7-84c1-e665ff43fb0b' },  // Habilidades con el color adecuado
    { route: 'education', name: 'Educación', icon: 'https://firebasestorage.googleapis.com/v0/b/portfolio-549f8.appspot.com/o/portfolio%2Ftecnologias%2Fgraduation.png?alt=media&token=2f511121-ac98-47aa-9994-058c8754447a' },  // Educación con el color adecuado
    { route: 'contact', name: 'Contactos', icon: 'https://cdn-icons-png.flaticon.com/128/732/732200.png' }
  ];
}
