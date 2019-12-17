import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupService } from './signup/signup.service';
import { HomeService } from './home/home.service';
import { NoAccessComponent } from './no-access/no-access.component';

@NgModule({
  imports:      [ 
  BrowserModule,
   FormsModule, 
   ReactiveFormsModule,
   HttpClientModule,
   HttpModule,
   RouterModule.forRoot([
     {path:'', component: HomeComponent},
     {path:'login', component : LoginComponent},
     {path:'signup', component: SignupComponent},
     {path:'**' , component : PagenotfoundComponent},
    {path: 'no-access', component: NoAccessComponent }  
   ])
   ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, SignupComponent, PagenotfoundComponent, LoginComponent, HomeComponent, NoAccessComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SignupService, HomeService]
})
export class AppModule { }
