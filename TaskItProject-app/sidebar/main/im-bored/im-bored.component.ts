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
  blah:any[]=[]
  // ranTask:any[]=[]


constructor(private imBoredGen: imBoredGen, private main: MainComponent) {}



ngOnInit(): void {
  this.imBoredGen.genTask().subscribe(
       (data) => {
      //  this.ranTasks.push(data.activity)
         this.ranTasks=data.activity

        }, (error) => {
          console.error("there was an error", error)
        }
        )

      }

ranTask=''

  isHidden=true

// this.state='Add'



taskTable(){
  alert("Please manually add this task if you wish to do so! Having tech issues")

  // this.main.tasks=[...this.main.tasks, ...this.ranTasks]

console.log(this.main.tasks)




// this.main.createData()



}


  genTaskBox (){

    // let [{activity}]=this.ranTasks
    // console.log(activity)


    // this.blah.push[this.ranTasks]
    this.isHidden=false


    // let [{activity}]=this.ranTasks
    // this.ranTask=activity
    // this.ranTask=this.ranTasks



    console.log(this.ranTasks)
    console.log(this.main.tasks)



  }






}
