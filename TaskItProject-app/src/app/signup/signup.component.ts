import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent {
  form:NgForm


  onSubmit(form: NgForm){




    
    // form.reset()

    // console.log(form.value)
    // console.log(form)

  }

}
