import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelloWorldBean } from './data/welcome-data.service';
import {map} from 'rxjs/operators'
import { API_URL } from '../app.constants';

export const TOKEN="token";
export const AUTHENTICATED_USER="authenticatedUser";
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }

  executeJWTAuthenticationService(username:string,password:string)
  {

    return this.http.post<any>(`${API_URL}/authenticate`,
      {username,password})
    .pipe(
      map(
        data=> 
          {
            sessionStorage.setItem(AUTHENTICATED_USER,username);
            sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
          }
      )
    );  
  }

  executeAuthenticationService(username:string,password:string)
  {

    let basicAuthHeaderString="Basic "+window.btoa(username +":"+password);

    let headers=new HttpHeaders(
      {
        Authorization:basicAuthHeaderString
      }
    );
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers}).pipe(
      map(
        data=> 
          {
            sessionStorage.setItem(AUTHENTICATED_USER,username);
            sessionStorage.setItem(TOKEN,basicAuthHeaderString);
          }
      )
    );  
  }

  getAuthenticatedUser()
  {
    return sessionStorage.getItem(AUTHENTICATED_USER);

  }

  getAuthenticatedToken()
  {   
   
    return sessionStorage.getItem(TOKEN);
  }

  isUserLoggedIn()
  {
    if (typeof sessionStorage === 'undefined') {
      return false;
  }
    let user=sessionStorage.getItem(AUTHENTICATED_USER);

    return !(user===null);
  }

  logout()
  {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean{

  constructor(public msg:string){}
}
