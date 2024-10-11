package com.project.rest.webservices.restful_web_services.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.project.rest.webservices.restful_web_services.todo.entity.Todo;

@Service
public class TodoHardcodedService {

	private static List<Todo> todos= new ArrayList<>();
	private static long idCounter=0;
	
	
		static {
			todos.add(new Todo(++idCounter,"Nani","Learn Guitar",new Date(),false));
			todos.add(new Todo(++idCounter,"Nani","Learn springBoot",new Date(),true));
			todos.add(new Todo(++idCounter,"Nani","Learn exercise",new Date(),false));
		}
		
		public List<Todo> findAllTodos()
		{
			return todos;
		}
		
		public Todo saveTodo(Todo todo)
		{
			if(todo.getId()==-1||todo.getId()==0)//adding new todo to the list-insert
			{
				todo.setId(++idCounter);
				todos.add(todo);
			}
			else
			{
				deleteById(todo.getId()); //updating the todo by deleting it first
				todos.add(todo);
			}
			return todo;
		}
		
		public Todo deleteById(long id)
		{
			
			Todo todo=findById(id);
			
			if(todo==null) return null;
			
			if(todos.remove(todo))//if succesfully removed
			{
				return todo;
			}
			
			return null;
		}

		public Todo findById(long id) {
			//iterate through list 
			for(Todo todo:todos)
				if(todo.getId()==id)
					return todo;
			return null;
		}
		
		
	
}