import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ 
  BrowserModule,
   FormsModule, 
   RouterModule.forRoot([
     {path:'login', component : LoginComponent},
     {path:'signup', component: SignupComponent},
     {path:'**' , component : PagenotfoundComponent}
   ])
   ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, SignupComponent, PagenotfoundComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
