import { Component } from '@angular/core';
// import { MainComponent } from '../main.component';

@Component({
  selector: 'app-im-bored',
  templateUrl: './im-bored.component.html',
  styleUrls: ['./im-bored.component.css']
})
export class ImBoredComponent {






  isHidden=true
  ranTask=''




  genTask(){
    console.log("hey")
    this.isHidden=false
  }






}
