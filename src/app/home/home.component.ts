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
constructor(private http : Http) {
    http.get("https://5df7ba4a4fdcb20014a483cc.mockapi.io/signup")
    .subscribe(response=> {
      this.users = response.json();
    });
   }
  ngOnInit() {
  }
}
