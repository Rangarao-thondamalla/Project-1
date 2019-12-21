import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 

@Injectable()
export class UsersService {
  url ="https://5df7ba4a4fdcb20014a483cc.mockapi.io/signup";
  constructor(private http : Http) { }
  getUsers(){
      return this.http.get(this.url)
  }
  deleteUsers(x){
    return this.http.delete(this.url + '/' + x.id)
  }
   

}