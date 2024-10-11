import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { NgIf } from '@angular/common';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

 // isUserLoggedIn:boolean =false;
  constructor(public hardcodedAuthenticationService :HardcodedAuthenticationService,
    public basicAuthenticationService:BasicAuthenticationService
  ){}

  ngOnInit(): void {
      // this.isUserLoggedIn=this.hardcodedAuthenticationService.isUserLoggedIn();

  /* menu component is only intialised once..at the load of the page
  once we load the page we are not refreshing content of menu
  ngOnInit will not be called..whatever value it has it remains 
  ngOnInit will only be called when entire page gets refreshed

  so,dont use above method..instead call the service directly
  */
  }

}
