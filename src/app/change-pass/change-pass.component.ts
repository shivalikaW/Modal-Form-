import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  @ViewChild('f') signupForm:NgForm;
  defaultQues="pet";
  answer='';
  genders=['male','female'];
  user={
    username:'',
    email:'',
    pass:'',
    secret:'',
    answer:'',
    gender:'' 
  }
  submitted=false;
  constructor(public router:Router) { }

  ngOnInit() {
  }
 
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username:'Test',
    //     email:'test@test.com'
    //   },
    //   secret:'pet',
    //   questionAnswer:'abc',
    //   gender:'male'
    // });
    this.signupForm.form.patchValue({
      userData:{
        username:'test',
        email:'test@test.com',
        pwd:'1234567'
      },
      secret:'school',
      questionAnswer:'abc',
      gender:'male'
    });
  }

  onSubmit(){
    this.submitted=true;
    this.user.username=this.signupForm.value.userData.username;
    this.user.email=this.signupForm.value.userData.email;
    this.user.pass=this.signupForm.value.userData.pwd;
    this.user.secret=this.signupForm.value.secret;
    this.user.answer=this.signupForm.value.questionAnswer;
    this.user.gender=this.signupForm.value.gender;

    //reset the form page
    this.signupForm.reset();
  }
  onBack(){
    this.router.navigate([""]);
  }
}

