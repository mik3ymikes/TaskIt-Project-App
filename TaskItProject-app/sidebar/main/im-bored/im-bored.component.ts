import { Component, OnInit } from '@angular/core';
import { imBoredGen } from './imBoredGen.service';
// import { MainComponent } from '../main.component';

@Component({
  selector: 'app-im-bored',
  templateUrl: './im-bored.component.html',
  styleUrls: ['./im-bored.component.css']
})



export class ImBoredComponent implements OnInit {
  ranTasks: any[]=[]


constructor(private imBoredGen: imBoredGen) {}



ngOnInit(): void {
  this.imBoredGen.genTask().subscribe(
       (data) => {
         this. ranTasks=data
       }, (error) => {
         console.error("there was an error", error)
       }
     )

}


  isHidden=true
  ranTask=''




  genTaskBox(){
    console.log("hey")
    this.isHidden=false
    console.log(this.ranTasks)



  }






}
