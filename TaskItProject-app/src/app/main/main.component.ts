import { Component } from '@angular/core';
// import { Task } from '../add-task.model';
import { Task } from '../add-edit-task/add-task.model'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {

tasks: Task[]=[
  new Task("test", "test", "test","test")
]

addIn(){

  
}

}
