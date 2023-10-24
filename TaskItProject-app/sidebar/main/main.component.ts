import { Component, Output, EventEmitter, OnInit, OnDestroy, NgModule} from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { localStorageService } from './local-storage.service';
import { notify } from '../../src/notifcations/notification.service';
import { Subscription, timeout } from 'rxjs';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})




export class MainComponent  {
  private activatedSub:Subscription

  // notifyActivated=false


  defaultPriority = 'High'
  defaultPriority2 = 'Not Started'

  taskForm: FormGroup;
  tasks:any[];
  inProg:any[];
  done:any[];
  noted:string;
  state:string;
  // isActive:boolean;
  notifyActivated=false;
  isActive=false



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
      // console.log(form)
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
      this.isActive=false

    //  if (this.isActive) {
    //   this.tasks.forEach((value,index) =>{
    //       if(value==task)

    //       this.tasks.splice(index,1)

    //     })
    //  }
    }




  editTask(task){
    this.state="Edit"
    this.taskForm.patchValue({
      title: task.title,
      due: task.due,
      priority: task.priority,
      status: task.status,
      description: task.description
    });
    this.isHidden = false;
    this.getOpacity = 100;
     this.isActive=true


    // this.tasks.forEach((value,index) =>{
    //   if(value==e)

    //   this.tasks.splice(index,1)
    //   this.localStorageService.setData('savedData', this.tasks);

    // })





  }






    // popUp(){
    //   this.isHidden=false
    //   this.isHidden3=false
    // }



    addIn(){
      this.state="Add"
      this.isHidden=false
      this.getOpacity=100
    }


    // addIn2(){

    // }

  exitTask(){
    this.isHidden=true;
    this.getOpacity=0;
    this.reset()
  }
  exitTask2(){
    this.isHidden=true;
    this.isHidden3=true
    this.reset()
  }


  reset(){
    this.taskForm.reset()
   this.isHidden=true;
    this.getOpacity=0;
    console.log("hi")
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
