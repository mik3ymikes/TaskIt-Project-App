import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({ providedIn:'root'})




export class notify {
  activatedEmitter=new Subject <boolean>()
}
