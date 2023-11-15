import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class imBoredGen {
  private apiUrl = 'http://www.boredapi.com/api/activity/';

  constructor(private http: HttpClient) { }

  genTask(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
