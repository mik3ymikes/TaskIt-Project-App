import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { last } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})



export class SignupComponent {
  form:NgForm
  error:string =null


  constructor(private authService: AuthService, private router: Router) {}

  // signupDetails={
  //   firstName:'',
  //   lastName:'',
  //   email: '',
  //   password: ''
  // }



  onSubmit(form: NgForm){


    if(!form.valid){
      return
    }


  //  this.signupDetails.firstName=form.value.firstName
  //  this.signupDetails.lastName=form.value.lastName
  //  this.signupDetails.email=form.value.email
  //  this.signupDetails.password=form.value.password


  const firstName=form.value.firstName
  const lastName=form.value.LastName
  const email=form.value.email
  const password= form.value.password



   this.authService.signup(firstName, lastName, email, password).subscribe(
    resData => {
      this.router.navigate(['/login'])
    console.log(resData);
   },
   error =>{
    console.log(error)
    this.error='an error occured'
   }
   )

  //  console.log(this.signupDetails)
    form.reset()





    // console.log(form.value)
    // console.log(form)

  }

}
