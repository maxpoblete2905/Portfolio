import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeadComponent } from './components/head/head.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ImagePerfilComponent } from './components/imagePerfil/imagePerfil.component';
import { DescriptionsComponent } from './components/descriptions/descriptions.component';
import { TitleComponent } from './components/title/title.component';
import { SocialNetworksComponent } from './components/socialNetworks/socialNetworks.component';
import { MenuComponent } from './components/menu/menu.component';
import { ImageviewerComponent } from './components/imageviewer/imageviewer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { ContactInformationComponent } from './components/contactInformation/contactInformation.component';
import { DownloadCvComponent } from './components/download-cv/download-cv.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeadComponent,
    ImagePerfilComponent,
    DescriptionsComponent,
    TitleComponent,
    SocialNetworksComponent,
    MenuComponent,
    ImageviewerComponent,
    InputComponent,
    ContactInformationComponent,
    DownloadCvComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    SidebarComponent,
    HeadComponent,
    ImagePerfilComponent,
    DescriptionsComponent,
    TitleComponent,
    SocialNetworksComponent,
    MenuComponent,
    ImageviewerComponent,
    InputComponent,
    ContactInformationComponent
  ]
})
export class SharedModule { }
