import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-indexlogin',
  templateUrl: './indexlogin.component.html',
  styleUrls: ['./indexlogin.component.scss']
})
export class IndexloginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Login(){

    this.router.navigate(["Logout"]);
   }

}
