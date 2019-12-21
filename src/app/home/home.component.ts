import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
name = "Ranga Rao Thondamalla"
users : any [];
constructor(private usersService : UsersService) {}
deleteUsers(x) {
     this.usersService.deleteUsers(x)
      .subscribe(response =>{
        let index = this.users.indexOf(x);
        this.users.splice(index,1);
      })
    };
  ngOnInit() {
    this.usersService.getUsers()
    .subscribe(response=> {
      this.users = response.json();
    });
  }
}