package com.project.rest.webservices.restful_web_services.todo.dto;



import java.util.Date;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TodoDto {
	
	private Long id;
	private String username;
	private String description;
	private Date targetDate;
	private boolean isDone;
	
	

}
