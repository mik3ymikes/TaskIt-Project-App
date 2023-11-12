import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { User } from './sidebar.model'
import { AuthService } from 'src/app/shared/auth.service';
import { Subscription } from 'rxjs';

import { User } from 'src/app/shared/user.model';
import { localStorageService } from './main/local-storage.service';
import { useAnimation } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit, OnDestroy {
  userEmail:string
  isAuthenticated=false
  private userSub:Subscription




  // constructor(private authService: AuthService, private user:User) {}
  constructor(private authService: AuthService, private localStorage:localStorageService) {

    // let user=this.localStorage.getData('userData') || []

    // console.log(user.email)
  }



user=this.localStorage.getData('userData')




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








  // users: User[]=[
  //   new User("https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
  //   "name", "Email@email.com")
  // ]

  addInTask(){
    this.isHidden=false
    this.getOpacity=100
  }

  exitTask(){
    this.isHidden=true;
    this.getOpacity=0;
  }


  onLogout(){
  console.log("hey")
 this.authService.logout()

}





}



