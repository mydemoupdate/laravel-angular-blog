import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { UserService } from '../service/user.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
      HomeComponent,
      PagesComponent
  ],
  providers:[
    UserService
  ]
})
export class PagesModule {}
