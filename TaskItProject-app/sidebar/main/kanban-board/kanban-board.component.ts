import { Component, OnInit } from '@angular/core';
import { localStorageService } from '../local-storage.service';
// import {NgFor} from '@angular/common';
import { CdkDragDrop,moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';




@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css'],

  // providers:[MainComponent]
})


// export class KanbanBoardComponent{
export class KanbanBoardComponent implements OnInit {
tasks:any[]

constructor(private localStorageService:localStorageService){
  this.tasks=this.localStorageService.getData('savedData') || []
}

ngOnInit(): void{
this.outputLocalStorageData()
// this.getVal()
  }


  outputLocalStorageData(){
    // const localStorageData = this.localStorageService.getData('savedData');
    // console.log('Local Storage Data:', localStorageData);
    console.log(this.tasks)

  }



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }



}



















  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex,
  //     );
  //   }




  // }

















  // getVal(){
  //   this.tasks.forEach(obj => {
  //    `title: ${obj.title}, due: ${obj.due},
  //    priority: ${obj.priority}, status: ${obj.status},
  //    description: ${obj.description} `

  //   console.log(obj.title)
  //  })





  // }
