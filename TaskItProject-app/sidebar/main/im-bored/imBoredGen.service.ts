import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class imBoredGen {
  private apiUrl = 'https://www.boredapi.com/api/activity/';

  constructor(private https: HttpClient) { }

  genTask(): Observable<any> {
    return this.https.get(this.apiUrl);
  }
}
