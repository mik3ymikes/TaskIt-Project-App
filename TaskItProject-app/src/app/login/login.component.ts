import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})








export class LoginComponent {
  form:NgForm

  // LogDetials={
  //   email:"",
  //   password:""
  // }



  onSubmit(form: NgForm){

    // console.log(form)
    console.log(form.value)
    console.log(form)
    // form.reset()
  }

}
