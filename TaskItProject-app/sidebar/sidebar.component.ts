import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from './sidebar.model'
import { AuthService } from 'src/app/shared/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit, OnDestroy {
  isAuthenticated=false
  private userSub:Subscription
  constructor(private authService: AuthService) {}


  ngOnInit(): void {
     this.userSub= this.authService.user.subscribe(user =>{
      this.isAuthenticated= !!user
     })
  }

  ngOnDestroy(): void {
      this.userSub.unsubscribe()
  }

 isHidden=true;
  // isHidden2=true;
  isHidden3=true;
  getOpacity=0;
  noWork=false

  users: User[]=[
    new User("https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    "name", "Email@email.com")
  ]

  addInTask(){
    this.isHidden=false
    this.getOpacity=100
  }

  exitTask(){
    this.isHidden=true;
    this.getOpacity=0;
  }


  // toTask(){
  // location.href="/"

  // }

  // toKanban(){
  //   // location.href="/kanban"
  //   // routerLink="/kanban"

  //   }



//   tasks:any


// taskForm:FormGroup

// constructor(public fb:FormBuilder){
//   this.tasks=[]

//   this.taskForm=this.fb.group({
//     title:[""],
//     due:[""],
//     priority:[""],
//     status:[""]


//   })
// }



//   createData(){
//   this.tasks.push(this.taskForm.value)
//   // this.taskForm.reset()
//   }


}



