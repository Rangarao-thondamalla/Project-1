import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user'; 

@Injectable()
export class SignupService {
  // url="https://jsonplaceholder.typicode.com/users";
  url = "https://5df7ba4a4fdcb20014a48cc.mockapi.io/signup";
  constructor(private http: HttpClient) { }
  enroll(user : User){
    return this.http.post<any>(this.url, user)
  }
}

//https://www.mockapi.io/projects/5df7ba4a4fdcb20014a483cd mock Apis