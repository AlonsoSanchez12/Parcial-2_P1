import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from '../pages/pages.routing';




@NgModule({
  declarations: [
    SidebarComponent,
    HeadbarComponent,
    BreadcrumbsComponent,

  ],
  exports: [
    SidebarComponent,
    HeadbarComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule, RouterModule, PagesRoutingModule
  ]
})
export class SharedModule { }
