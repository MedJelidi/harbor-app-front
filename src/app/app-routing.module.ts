import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuardInterceptorService} from './services/auth-guard-interceptor.service';
import {ReverseAuthGuardInterceptorService} from './services/reverse-auth-guard-interceptor.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [ReverseAuthGuardInterceptorService]},
  {path: 'register', component: RegisterComponent, canActivate: [ReverseAuthGuardInterceptorService]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardInterceptorService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
