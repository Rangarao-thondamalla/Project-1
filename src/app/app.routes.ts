import { Routes, CanActivate } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent }  from './home/home.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';
import { 
  RoleGuardService as RoleGuard 
} from './auth/role-guard.service';
export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'profile', 
    component: ProfileComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'admin', 
    component: LoginComponent, 
    canActivate: [RoleGuard], 
    data: { 
      expectedRole: 'admin'
    } 
  },
  { path: '**', redirectTo: '' }
];