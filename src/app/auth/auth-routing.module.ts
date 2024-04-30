import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { MantainerComponent } from './pages/mantainer/mantainer.component';

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
        path: 'mantainer',
        component: MantainerComponent
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
