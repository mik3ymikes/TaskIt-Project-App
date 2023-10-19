import { Component, OnInit } from '@angular/core';
// import { localStorageService } from '../local-storage.service';
// import {NgFor} from '@angular/common';
import { CdkDragDrop,moveItemInArray,transferArrayItem, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent {
  tasks:any[]
  inProg:any[]
  done:any[]
  // noWork=true
  // isItemsDisabled: boolean = true;



  ngOnInit(): void{
    this.tasks=[{title: "Clean Out Garage", due: "March 31st", priority: "High", status: null, description: null}]
    this.inProg=[{title: "Clean Out Garage", due: "March 31st", priority: "High", status: null, description: null}]
    this.done=[{title: "Clean Out Garage", due: "March 31st", priority: "High", status: null, description: null}]



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

  }





}

