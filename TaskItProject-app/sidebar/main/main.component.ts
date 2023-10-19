import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { localStorageService } from './local-storage.service';

// import {ReactiveFormsModule} from '@angular/forms';
// import { Task } from '../add-task.model';
// import { Task } from './add-edit-task/add-task.model'
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn:'root'
// })


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent  {







    taskForm: FormGroup;
    tasks:any[];
    inProg:any[]
    done:any[]




    constructor(private fb:FormBuilder, private localStorageService: localStorageService){

      this.tasks = this.localStorageService.getData('savedData' ) || [];
      this.inProg = this.localStorageService.getData('inProgData') || [];
      this.done = this.localStorageService.getData('doneData') || [];
      // this.tasks = [...this.tasks, ...this.inProg, ...this.done] || []



      //below is last known to work if mess up
      // this.tasks= JSON.parse(localStorage.getItem('savedData')) || []



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
 //below is las known to work if need to reset
  // localStorage.setItem('savedData', JSON.stringify(this.tasks))
  this.localStorageService.setData('savedData', this.tasks);


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

  this.tasks.splice(index,1)
  this.localStorageService.setData('savedData', this.tasks);
  //this first below last known to work if breaks
  // localStorage.setItem('savedData', JSON.stringify(this.tasks))



})

}


}
