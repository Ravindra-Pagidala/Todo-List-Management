package com.project.rest.webservices.restful_web_services.helloWorld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class HelloWorldController {
	
	//@RequestMapping(method=RequestMethod.GET,path="/hello-world")
	@GetMapping(path="hello-world")
	public String message()
	{
		return "hello world hi";
	}
	
	//below is creating bean and returning it back
	@GetMapping(path="hello-world-bean")
	public HelloWorldBean messageBean() {
		//return new HelloWorldBean("hello world bean changed");
		throw new RuntimeException("Some Error Has Happened ! Contact support *-*");
	}
	
	@GetMapping(path="hello-world/path-variable/{name}")
	public HelloWorldBean messagePathVariable(@PathVariable String name) {
		return new HelloWorldBean("Hello world ,"+name);
	}


}