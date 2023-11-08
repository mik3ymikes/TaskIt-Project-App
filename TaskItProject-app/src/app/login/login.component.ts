import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})








export class LoginComponent {
  form:NgForm
  error:string =null
  constructor(private authService: AuthService, private router: Router) {}

  // logDetails={
  //   email: '',
  //   password: ''
  // }


  // may need this at somepoint
  // logDetails=[{
  //   email: '',
  //   password: ''
  // }]


  onSubmit(form: NgForm){

    if(!form.valid){
      return
    }

    // this.logDetails.email=form.value.email
    // this.logDetails.password=form.value.password


  const email=form.value.email
  const password= form.value.password
  let isSuccessful=false

  this.authService.login(email, password).subscribe(
    resData => {
      this.router.navigate(['/main'])
      console.log(resData);
      isSuccessful=true
     },
     error =>{
      console.log(error)
      this.error='an error occured'
     }
     )



    //may need this with top
    // this.logDetails.push(form.value.email, form.value.password)


    // console.log(form.value)
    // console.log(form)

  //  console.log(this.logDetails)
    form.reset()
  }

}
