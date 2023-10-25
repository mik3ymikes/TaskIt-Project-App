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
  state:string='Add';

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
        description:['']


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
      // console.log(this.taskForm)
      // this.notify.activatedEmitter.next(true)
      // this.noted="added"
      // console.log(notify)
      // this.tasks.push(this.taskForm.value)

      // this.localStorageService.setData('savedData', this.tasks);
      // this.taskForm.reset()
      // this.isHidden=true;
      // this.getOpacity=0;
      // this.endNotify()



      if (this.state === 'Add') {
        // Add a new task
        this.notify.activatedEmitter.next(true);
        this.noted = 'added';
        this.tasks.push(this.taskForm.value);

      } else if (this.state === 'Edit') {

        // Push the updated value
        this.notify.activatedEmitter.next(true);
        this.noted = 'edited';
        this.tasks.push(this.taskForm.value);
      }

      this.localStorageService.setData('savedData', this.tasks);
      this.taskForm.reset();
      this.isHidden = true;
      this.getOpacity = 0;
      this.endNotify();
      this.state="Add"
      console.log(this.state)





    }







  editTask(task){
    this.state='Edit'
    this.taskForm.controls['title'].setValue(task.title);
    this.taskForm.controls['due'].setValue(task.due);
    this.taskForm.controls['priority'].setValue(task.priority);
    this.taskForm.controls['status'].setValue(task.status);
    this.taskForm.controls['description'].setValue(task.description);

    this.isHidden = false;
    this.getOpacity = 100;
    this.isActive = true;
    this.isHidden = false;
    this.getOpacity = 100;
     this.isActive=true
     console.log(this.state)




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
    this.state="Add"
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
    this.state="Add"
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
