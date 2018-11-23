import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'home-admin',
  templateUrl: '/home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.getUser().subscribe((data: any)=>{
      console.log(data);
    })
  }

}