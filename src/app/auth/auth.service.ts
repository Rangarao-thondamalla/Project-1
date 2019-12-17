import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper } from 'angular2-jwt'; 
import { map } from 'rxjs/operators'; 

@Injectable()
export class AuthService {
  constructor(private http: Http) {  
  }  
  
  login(credentials) {   
   return this.http.post('/api/authenticate',   
      JSON.stringify(credentials))
     .pipe(  
      map(respose => {  
        let result = respose['_body'];  
        if (result && result.token) {  
          // We wanna store it in localStorage  
          localStorage.setItem('token', result.token);  
          return true;  
        }  
   return false;  
      })  
    );  
  }  
  
  logout() {   
  }  
  
  isLoggedIn() {   
  let jwtHelper = new JwtHelper();  
  let token = localStorage.getItem('token');  
  
  if(!token)  
    return false;  
  
  let expirationDate = jwtHelper.getTokenExpirationDate(token);  
  let isExpired = jwtHelper.isTokenExpired(token);  
  
  // Now let's log the above values on the console.  
  console.log("Expiration", expirationDate);  
  console.log("isExpired", isExpired);  
  
  return !isExpired;
  }  
} 
