import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user'; 

@Injectable()
export class SignupService {
  url="";
  constructor(private http: HttpClient) { }
  enroll(user : User){
    return this.http.post<any>(this.url, user)
  }
}