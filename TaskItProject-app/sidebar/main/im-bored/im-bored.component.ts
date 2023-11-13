import { Component, OnInit } from '@angular/core';
import { imBoredGen } from './imBoredGen.service';
import { MainComponent } from '../main.component';
// import { MainComponent } from '../main.component';

@Component({
  selector: 'app-im-bored',
  templateUrl: './im-bored.component.html',
  styleUrls: ['./im-bored.component.css']
})



export class ImBoredComponent implements OnInit {
  ranTasks: any[]=[]
  // ranTask:any[]=[]


constructor(private imBoredGen: imBoredGen, private main: MainComponent) {}



ngOnInit(): void {
  this.imBoredGen.genTask().subscribe(
       (data) => {
         this.ranTasks=data.activity

        }, (error) => {
          console.error("there was an error", error)
        }
        )

      }

ranTask=''

  isHidden=true





taskTable(){
 
}


  genTaskBox (){

    // let [{activity}]=this.ranTasks
    // console.log(activity)

    this.isHidden=false


    // let [{activity}]=this.ranTasks
    // this.ranTask=activity
    // this.ranTask=this.ranTasks



    console.log(this.ranTasks)



  }






}
