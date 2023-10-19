import { Component, OnInit } from '@angular/core';
import { localStorageService } from '../local-storage.service';
// import {NgFor} from '@angular/common';
import { CdkDragDrop,moveItemInArray,transferArrayItem, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';




@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css'],

})


// export class KanbanBoardComponent{
  export class KanbanBoardComponent implements OnInit {
    tasks:any[]
    inProg:any[]
    done:any[]



    constructor(private localStorageService:localStorageService){
      this.tasks = this.localStorageService.getData('savedData' ) || [];
      this.inProg = this.localStorageService.getData('inProgData') || [];
      this.done = this.localStorageService.getData('doneData') || [];
    }

    ngOnInit(): void{
      // this.outputLocalStorageData()
      // this.inProg=[]
      // this.done=[]
      // this.getVal()
    }


    // outputLocalStorageData(){
    //   // const localStorageData = this.localStorageService.getData('savedData');
    //   // console.log('Local Storage Data:', localStorageData);
    //   console.log(this.tasks)

    // }



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
      this.saveDataToLocalStorage()
    }


    saveDataToLocalStorage() {
      this.localStorageService.setData('savedData', this.tasks);
      this.localStorageService.setData('inProgData', this.inProg);
      this.localStorageService.setData('doneData', this.done);

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





  //
