import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username :string,password :string)
  {
    //console.log('before '+this.isUserLoggedIn());
    if(username==='Nani'&& password==='nani123')
    {
      sessionStorage.setItem('authenticatedUser',username);
      //console.log('after '+this.isUserLoggedIn());
      return true;
    }
    
    return false;

  }

  isUserLoggedIn()
  {
    if (typeof sessionStorage === 'undefined') {
      return false;
  }
    let user=sessionStorage.getItem('authenticatedUser');

    return !(user===null);
  }

  logout()
  {
    sessionStorage.removeItem('authenticatedUser');
  }
}
