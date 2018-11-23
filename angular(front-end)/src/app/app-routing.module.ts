import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '', loadChildren: './pages/pages.module#PagesModule'},
  { path: 'admin',loadChildren: './admin/admin.module#AdminModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
