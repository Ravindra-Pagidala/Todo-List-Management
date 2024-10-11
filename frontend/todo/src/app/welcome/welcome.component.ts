//package com.springboot.web;


//import org.spring.boot.app;
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';
import { HttpClientModule } from '@angular/common/http';

//@ComponentScan(
//   value ="com.springboot.web") 
//above is annotation in java which has attrbutes int it

@Component({
  selector: 'app-welcome', //tag name
  standalone: true,
  imports: [RouterLink,NgIf,HttpClientModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
 
})

// above is decorator in ts..obj is paased as arg and it has attributes

//public class A impments B
export class WelcomeComponent implements OnInit{

  message="Hello";
  //public A()
  name='';
  welcomeMessageFromService:string='';
  //dependency injection
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService
  ){}

  //void init()
  //below indicates return type
  ngOnInit():void  
  {
   // this.message=5; compilation error as ts is intelligent..it cant reassign to int value

   this.name=this.route.snapshot.params['name'];
   //above method - fetching the routing paramter

  }

  getWelcomeMessage()
  {
    //console.log("welcome msg");
    //console.log(this.service.executeHelloWorldBeanService());
    this.service. executeHelloWorldServiceWithPathVariableName(this.name).subscribe(
    response=>this.handleSuccesfulResponse(response),
    error=>this.handleErrorResponse(error)
   );
   //console.log('last line');
  }
   
  handleSuccesfulResponse(response:any)
  {
     //console.log(response);
    // console.log(response.message);
    this.welcomeMessageFromService=response.msg;
    //console.log(this.welcomeMessageFromService);
  }

  handleErrorResponse(error:any)
  {
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService=error.error.message;
  }
}
