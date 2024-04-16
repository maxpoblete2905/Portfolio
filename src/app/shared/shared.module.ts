import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeadComponent } from './components/head/head.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Error404pageComponent } from './pages/error404page/error404page.component';
import { ImagePerfilComponent } from './components/imagePerfil/imagePerfil.component';
import { DescriptionsComponent } from './components/descriptions/descriptions.component';

@NgModule({
  declarations: [
    Error404pageComponent,
    SidebarComponent,
    HeadComponent,
    ImagePerfilComponent,
    DescriptionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    Error404pageComponent,
    SidebarComponent,
    HeadComponent,
    ImagePerfilComponent,
    DescriptionsComponent
  ]
})
export class SharedModule { }
