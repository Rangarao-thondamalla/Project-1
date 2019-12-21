import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
name = "Ranga Rao Thondamalla"
users : any [];
url ="https://5df7ba4a4fdcb20014a483cc.mockapi.io/signup";
constructor(private http : Http) {
   this.http.get(this.url)
    .subscribe(response=> {
      this.users = response.json();
    });
}
deleteUsers(x) {
      this.http.delete(this.url + '/' + x.id)
      .subscribe(response =>{
        let index = this.users.indexOf(x);
        this.users.splice(index,1);
      })
    };
  ngOnInit() {}
}