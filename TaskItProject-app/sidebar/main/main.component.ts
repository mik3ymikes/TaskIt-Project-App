import { Component, Output, EventEmitter } from '@angular/core';
// import { Task } from '../add-task.model';
// import { Task } from './add-edit-task/add-task.model'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {

  // tasks = [
  //   { title: 'Task 1', dueDate: new Date('01/01/2022'), priority: 'High', status:'medium' },
  //   { title: 'Task 2', dueDate: new Date('02/01/2022'), priority: 'Medium', status:'high' },
  //   { title: 'Task 3', dueDate: new Date('03/01/2022'), priority: 'Low', status:'medium'},
  // ];


@Output() addIn =new EventEmitter<string>

emitEvent(){
  this.addIn.emit()
}



tasks:any






}
