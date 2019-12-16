import { Component, OnInit } from '@angular/core';
import { User } from './user'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userModel = new User('rangarao', 't.rangarao007@gmail.com', 9676001985, 20/7/1994, 'qwerty','helolo' );
}