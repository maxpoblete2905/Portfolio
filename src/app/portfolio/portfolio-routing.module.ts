import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { NewComponent } from './pages/new/new.component';
import { ListComponent } from './pages/list/list.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SearchPageComponent } from './pages/searchPage/searchPage.component';
import { EditPageComponent } from './pages/editPage/editPage.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'new',
        component: NewComponent
      },
      {
        path: 'search',
        component: SearchPageComponent
      },
      {
        path: 'edit/:id',
        component: EditPageComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: ':id',
        component: PortfolioComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
