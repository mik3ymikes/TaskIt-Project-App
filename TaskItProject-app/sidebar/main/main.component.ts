import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import {ReactiveFormsModule} from '@angular/forms';
// import { Task } from '../add-task.model';
// import { Task } from './add-edit-task/add-task.model'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent  {



  // @Output() addIn =new EventEmitter<string>

  // emitEvent(){
    //   this.addIn.emit()
    // }



    taskForm: FormGroup;
    tasks:any[];
    // blah:any[];




    constructor(private fb:FormBuilder){
      // this.tasks=[]
      this.tasks= JSON.parse(localStorage.getItem('savedData')) || []

      // this.task(blah)
  this.taskForm=this.fb.group({
    title:['', Validators.required],
    due:['', Validators.required],
    priority:['', Validators.required],
    status:['', Validators.required],
    description:['', Validators.required]


  })

}


isHidden=true;
  // isHidden2=true;
  isHidden3=true;
  getOpacity=0;





  createData(){

  this.tasks.push(this.taskForm.value)
  // this.blah.push(this.taskForm.value)

  // let blah=JSON.stringify(this.taskForm.value)
  // localStorage.setItem('savedData', JSON.stringify(this.blah))
  localStorage.setItem('savedData', JSON.stringify(this.tasks))
  // console.log(this.tasks.push(this.taskForm.value))
  this.taskForm.reset()
  this.isHidden=true;
    this.getOpacity=0;

  }


  // popUp(){
  //   this.isHidden=false
  //   this.isHidden3=false
  // }



  addIn(){
    this.isHidden=false
    this.getOpacity=100
  }

  exitTask(){
    this.isHidden=true;
    this.getOpacity=0;
  }
  exitTask2(){
    this.isHidden=true;
    this.isHidden3=true
  }


reset(){
  this.taskForm.reset()
  this.isHidden=true;
    this.getOpacity=0;
}


showTask(task){
  const taskInfo = `
  Title: ${task.title}
  Due Date: ${task.due}
  Priority: ${task.priority}
  Status: ${task.status}
  Description: ${task.description}
`;
alert(taskInfo);
}



removeTask(e){
this.tasks.forEach((value,index) =>{
  if(value==e)
  // this.tasks.splice(index,1)
  this.tasks.splice(index,1)
  localStorage.setItem('savedData', JSON.stringify(this.tasks))

  // localStorage.removeItem()

})
// this.tasks= JSON.parse(localStorage.getItem('savedData'))
}


}
