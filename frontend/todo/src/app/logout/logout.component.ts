import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{

  constructor(public hardcodedAuthenticationService:HardcodedAuthenticationService
    ,public basicAuthenticationService:BasicAuthenticationService
  )
  {

  }

  ngOnInit(): void {
      //this.hardcodedAuthenticationService.logout();
      this.basicAuthenticationService.logout();
  }

}
