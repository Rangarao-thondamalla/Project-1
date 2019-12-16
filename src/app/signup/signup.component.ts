import { Component, OnInit } from '@angular/core';
import { User } from './user'; 
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userModel = new User('rangarao', 't.rangarao007@gmail.com', 9676001985, "20-7-1994", 'qwerty', 'male','helolo' );
  constructor( private signupservice : SignupService){}
  onSubmit(){
    this.signupservice.enroll(this.userModel)
    .subscribe(
      data => console.log('Sucess !', data),
      error => console.error('Error',error)
    )
  }
  
}