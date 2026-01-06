import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Landing } from './landing/landing';
import { SharedModule } from './shared/shared-module';
import { ReactiveFormsModule } from "@angular/forms";
import { Signup } from './signup/signup';
import { VerifyEmail } from './verify-email/verify-email';
import { provideHttpClient } from '@angular/common/http';
import { Login } from './login/login';

@NgModule({
  declarations: [
    App,
    Landing,
    Signup,
    VerifyEmail,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }