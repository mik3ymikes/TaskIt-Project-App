import { Component, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { localStorageService } from './local-storage.service';
import { notify } from '../../src/notifcations/notification.service';
import { Subscription, timeout } from 'rxjs';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})




export class MainComponent  {
  private activatedSub:Subscription
  // notifyActivated=false




  taskForm: FormGroup;
  tasks:any[];
  inProg:any[];
  done:any[];
  noted:string
  notifyActivated=false



  ngOnInit(){
    this.activatedSub=this.notify.activatedEmitter.subscribe(didActivate=>{
      this.notifyActivated=didActivate
    })

  }

  ngOnDestroy():void{
  this.activatedSub.unsubscribe()
  }




  constructor(private fb:FormBuilder, private localStorageService: localStorageService, private notify:notify){

    this.tasks = this.localStorageService.getData('savedData' ) || [];
    this.inProg = this.localStorageService.getData('inProgData') || [];
    this.done = this.localStorageService.getData('doneData') || [];
    // this.tasks = [...this.tasks, ...this.inProg, ...this.done] || []
    console.log(notify)









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



    endNotify() {
      setTimeout(() => {
        this.notifyActivated = false;
      }, 3000);
    }



    createData(){
      this.notify.activatedEmitter.next(true)
      this.noted="added"
      console.log(notify)
      this.tasks.push(this.taskForm.value)
      //below is las known to work if need to reset
      // localStorage.setItem('savedData', JSON.stringify(this.tasks))
      this.localStorageService.setData('savedData', this.tasks);


      this.taskForm.reset()
      this.isHidden=true;
      this.getOpacity=0;
      this.endNotify()

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
  this.notify.activatedEmitter.next(true)
  this.noted="deleted"
this.tasks.forEach((value,index) =>{
  if(value==e)

  this.tasks.splice(index,1)
  this.localStorageService.setData('savedData', this.tasks);
})

this.endNotify()
}


}
