import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListComponent } from './pages/list/list.component';
import { NewComponent } from './pages/new/new.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { EditPageComponent } from './pages/editPage/editPage.component';
import { SearchPageComponent } from './pages/searchPage/searchPage.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent,
    NewComponent,
    PortfolioComponent,
    EditPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
