import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OtpResetPasswordComponent } from './otp-reset-password/otp-reset-password.component';
import { CreateNewPasswordComponent } from './create-new-password/create-new-password.component';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    OtpResetPasswordComponent,
    CreateNewPasswordComponent,
    AuthHeaderComponent,
    VerifyAccountComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
