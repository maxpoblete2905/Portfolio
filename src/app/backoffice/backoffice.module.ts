import { NgModule } from '@angular/core';
import { LayoutComponent } from './pages/layout/layout.component';
import { ProjectManagerComponent } from './pages/projectManager/projectManager.component';
import { CommonModule } from '@angular/common';
import { BackofficeRoutingModule } from './backoffice-routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
    ProjectManagerComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule
  ],
  exports: []
})
export class BackofficeModule { }
