import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {catchError} from 'rxjs/operators'
import {throwError} from 'rxjs'
import { Router } from "@angular/router";

interface AuthResponseData{
  kind:string;
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn:string;
  localId: string
  registered?: boolean

}



@Injectable({ providedIn: 'root'})
export class AuthService{
constructor(private http: HttpClient) {}



  signup( firstName:string, lastName: string, email: string, password: string){
   return this.http.post<AuthResponseData>(
   'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBttUuzoYltRcuAzQsk9yJCW_FqesyKCM8',
   {

    firstName:String,
    lastName:String,
    email:email,
    password:password,
    returnSecureToken: true

   }
   ).pipe(catchError(this.handleError))


  }

  login(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBttUuzoYltRcuAzQsk9yJCW_FqesyKCM8',
    {

      email:email,
      password:password,
      returnSecureToken: true

     }
     ).pipe(catchError(this.handleError))
  }



  private handleError(errorRes: HttpErrorResponse){
    let errorMessage='an unknown eror occured';
    if(!errorRes.error || !errorRes.error.error){
      return throwError(errorMessage)
    }
    switch (errorRes.error.error.message){
      case 'Email_Exits':
        errorMessage="this email exist already"
        break;
        case 'email_not_found':
        errorMessage='this email does not exist'
        break;
        case 'inavalid_passowrd':
          errorMessage='this password is not correct'
          break;
    }
    return throwError(errorMessage)

  }



}



