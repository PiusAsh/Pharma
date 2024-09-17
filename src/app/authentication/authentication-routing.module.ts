import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OtpResetPasswordComponent } from './otp-reset-password/otp-reset-password.component';
import { CreateNewPasswordComponent } from './create-new-password/create-new-password.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'forget-password', component: ForgotPasswordComponent
  },
  {
    path: 'reset-password', component: OtpResetPasswordComponent
  },
  {
    path: 'change-password', component: CreateNewPasswordComponent
  },
  {
    path: 'verify-account', component: VerifyAccountComponent
  },
  {
    path: 'create-new-password', component: CreateNewPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
