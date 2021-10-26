import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuardInterceptorService} from './services/auth-guard-interceptor.service';
import {ReverseAuthGuardInterceptorService} from './services/reverse-auth-guard-interceptor.service';
import {AddHarborComponent} from './add-harbor/add-harbor.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgpImagePickerModule} from 'ngp-image-picker';
import {EngineService} from './services/engine.service';
import { SingleDashEngineComponent } from './single-dash-engine/single-dash-engine.component';
import { EditHarborComponent } from './edit-harbor/edit-harbor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddHarborComponent,
    SingleDashEngineComponent,
    EditHarborComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgpImagePickerModule
  ],
  providers: [AuthService, AuthGuardInterceptorService, ReverseAuthGuardInterceptorService, EngineService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
