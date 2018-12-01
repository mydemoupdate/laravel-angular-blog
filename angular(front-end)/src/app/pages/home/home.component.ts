import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data = new Array();
  name = '';
  dataInput = '';
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.getUser().subscribe((data: any)=>{
     this.data = data.items || [];
    })
  }
  eventData(){
    this.userService.showData(this.name).subscribe((data: any)=>{
      this.dataInput= data.value.name || '';
    })
  }
}
