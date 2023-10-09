import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import {ReactiveFormsModule} from '@angular/forms';
// import { Task } from '../add-task.model';
// import { Task } from './add-edit-task/add-task.model'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent  {

  // tasks = [
  //   { title: 'Task 1', dueDate: new Date('01/01/2022'), priority: 'High', status:'medium' },
  //   { title: 'Task 2', dueDate: new Date('02/01/2022'), priority: 'Medium', status:'high' },
  //   { title: 'Task 3', dueDate: new Date('03/01/2022'), priority: 'Low', status:'medium'},
  // ];


// @Output() addIn =new EventEmitter<string>

// emitEvent(){
//   this.addIn.emit()
// }



taskForm: FormGroup;
tasks:any[];



constructor(private fb:FormBuilder){
  this.tasks=[]


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
  // console.log(this.tasks.push(this.taskForm.value))
  this.taskForm.reset()
  this.isHidden=true;
    this.getOpacity=0;
  }


  popUp(){
    this.isHidden=false
    this.isHidden3=false
  }



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


removeTask(e){
this.tasks.forEach((value,index) =>{
  if(value==e)
  this.tasks.splice(index,1)
})
}


}
