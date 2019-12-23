import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { IndexloginComponent } from './indexlogin/indexlogin.component';
import { HomeComponent } from './home/home.component';
import { Test1Component } from './test1/test1.component';
import { HomeloginComponent } from './homelogin/homelogin.component';
import { ContactComponent } from './contact/contact.component';
import { AnswerComponent } from './answer/answer.component';
import { Answer1Component } from './answer1/answer1.component';
import { Answer2Component } from './answer2/answer2.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Login",component:LoginComponent},
  {path:"IndexLogin",component:IndexloginComponent},
  {path:"HomeLogin",component:HomeloginComponent},
  {path:"Contact",component:ContactComponent},
  {path:"Answer",component:AnswerComponent},
  {path:"Answer1",component:Answer1Component},
  {path:"Answer2",component:Answer2Component}
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
