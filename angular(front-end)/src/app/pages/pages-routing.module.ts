import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';


const pagesRoutes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: HomeComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule {}