import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { ProjectManagerComponent } from './pages/projectManager/projectManager.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [

      {
        path: 'project-manager',
        component: ProjectManagerComponent,
        // canActivate: [true]
      },
      {
        path: '**',
        redirectTo: 'project-manager'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
