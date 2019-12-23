import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    // Get the modal
    var modal = document.getElementById('id01');
                                                      
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  }

Question(){

  document.getElementById('id01').style.display='block'

}

CloseNone(){

  document.getElementById('id01').style.display='none'
}

Login(){

  this.router.navigate(["Login"]);
 }

 Home(){

  this.router.navigate([""]);
 }

}
