import { Component, OnInit } from '@angular/core';
import { localStorageService } from '../local-storage.service';





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
  }

  outputLocalStorageData(){
    const localStorageData = this.localStorageService.getData('savedData');
    console.log('Local Storage Data:', localStorageData);
  }

}
