import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('f') signupForm:NgForm;
  submitted=false;
 
  username:'';
  pwwd:'';


   modal = document.getElementById('id01');
  constructor(public router:Router) { }

  ngOnInit() {
  }
  onclick = function(event) {
    if (event.target == this.modal) {
       this.modal.style.display = "none";
    }
}
onSubmit(){
  
  this.submitted=true;
    this.username=this.signupForm.value.username;
    this.pwwd=this.signupForm.value.pwd;
    this.signupForm.reset();
    document.getElementById('id01').style.display='none';
    // console.log(this.pwd);
    // console.log(this.username);
    // // this.user.secret=this.signupForm.value.secret;
    // this.user.answer=this.signupForm.value.questionAnswer;
    // this.user.gender=this.signupForm.value.gender;
}
onChange(){
  this.router.navigate(["change"]);
}

}