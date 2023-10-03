import { Component } from '@angular/core';
import { User } from './sidebar.model'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {

  users: User[]=[
    new User('tet', "test", "test")
  ]

}
