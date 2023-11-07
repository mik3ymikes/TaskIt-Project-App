import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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
   )


  }

  login(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBttUuzoYltRcuAzQsk9yJCW_FqesyKCM8',
    {

      email:email,
      password:password,
      returnSecureToken: true

     }
     )
  }
}



