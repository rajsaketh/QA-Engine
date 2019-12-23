import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { IndexloginComponent } from './indexlogin/indexlogin.component';
import { HomeComponent } from './home/home.component';
import { Test1Component } from './test1/test1.component';
import { ContactComponent } from './contact/contact.component';
import { HomeloginComponent } from './homelogin/homelogin.component';
import { AnswerComponent } from './answer/answer.component';
import { Answer1Component } from './answer1/answer1.component';
import { Answer2Component } from './answer2/answer2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    IndexloginComponent,
    HomeComponent,
    Test1Component,
    ContactComponent,
    HomeloginComponent,
    AnswerComponent,
    Answer1Component,
    Answer2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
