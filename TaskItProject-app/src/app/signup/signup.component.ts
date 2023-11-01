import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent {
  form:NgForm

  signupDetails={
    firstName:'',
    lastName:'',
    email: '',
    password: ''
  }



  onSubmit(form: NgForm){

   this.signupDetails.firstName=form.value.firstName
   this.signupDetails.lastName=form.value.lastName
   this.signupDetails.email=form.value.email
   this.signupDetails.password=form.value.password


   console.log(this.signupDetails)
    form.reset()





    // console.log(form.value)
    // console.log(form)

  }

}
