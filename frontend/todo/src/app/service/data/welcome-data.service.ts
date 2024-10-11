import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../app.constants';


export class HelloWorldBean{

  constructor(public msg:string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService()
  {
   // console.log("execute bean service");
    //this.http.get('http://localhost:8080/hello-world-bean').subscribe();
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  executeHelloWorldServiceWithPathVariableName(name: any)
  {

    // let basicAuthHeaderString=this.createBasicAuthenticationHttpHeader();

    // let headers=new HttpHeaders(
    //   {
    //     Authorization:basicAuthHeaderString
    //   }
    // );
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`,
      //{headers}
    );

    
  }

  // createBasicAuthenticationHttpHeader() //method to create header
  // {
  //   let username="Nani";
  //   let password="nani123";
  //   let basicAuthHeaderString="Basic "+window.btoa(username +":"+password);

  //   return basicAuthHeaderString;

  //   //window.btoa - encodes string in base 64 format
  // }

  /*
   Access to XMLHttpRequest at 'http://localhost:8080/login' (redirected from 'http://localhost:8080/hello-world/path-variable/Nani') from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

   
   */
}
