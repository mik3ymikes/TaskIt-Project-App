import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { MainComponent } from '../../sidebar/main/main.component';
import { AddEditTaskComponent } from '../../sidebar/main/add-edit-task/add-edit-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    AddEditTaskComponent,
    DeleteTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
