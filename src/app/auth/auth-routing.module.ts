import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AddPageComponent } from './pages/addPage/addPage.component';
import { ListPageComponent } from './pages/listPage/listPage.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [

      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'add',
        component: AddPageComponent
      },
      {
        path: 'list',
        component: ListPageComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
