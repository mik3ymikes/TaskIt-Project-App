import { Component } from '@angular/core';
import { imBoredGen } from './imBoredGen.service';
// import { MainComponent } from '../main.component';

@Component({
  selector: 'app-im-bored',
  templateUrl: './im-bored.component.html',
  styleUrls: ['./im-bored.component.css']
})
export class ImBoredComponent {

constructor(private imBoredGen: imBoredGen) {}
ranTasks: any[]=[]



  isHidden=true
  ranTask=''




  genTaskBox(){
    console.log("hey")
    this.isHidden=false

 this.imBoredGen.genTask().subscribe(
      (data) => {
        this. ranTasks=data
      }, (error) => {
        console.error("there was an error", error)
      }
    )

  }






}
