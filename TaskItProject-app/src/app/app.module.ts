import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormBuilder, Validators} from '@angular/forms';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormGroup} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { MainComponent } from '../../sidebar/main/main.component';
import { AddEditTaskComponent } from '../../sidebar/main/add-edit-task/add-edit-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { KanbanBoardComponent } from '../../sidebar/main/kanban-board/kanban-board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';




const appRoutes:Routes=[
  {path:'', component: LandingComponent},
  {path:'main', component: MainComponent},
  {path:'kanban', component: KanbanBoardComponent},
   {path:'signup', component:SignupComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    AddEditTaskComponent,
    DeleteTaskComponent,
    KanbanBoardComponent,
    LandingComponent,
    SignupComponent,



  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    DragDropModule,
    FormsModule



  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
