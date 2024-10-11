package com.project.rest.webservices.restful_web_services.todo.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.project.rest.webservices.restful_web_services.todo.dto.TodoDto;
import com.project.rest.webservices.restful_web_services.todo.service.TodoService;

@CrossOrigin
@RestController
public class TodoJpaResource {

    @Autowired
    private TodoService todoService;

    @GetMapping("/jpa/users/{username}/todos")
    public List<TodoDto> retrieveAllTodos(@PathVariable String username) {
        return todoService.getAllTodos(username);
    }

    @GetMapping("/jpa/users/{username}/todos/{id}")
    public TodoDto getTodo(@PathVariable String username, @PathVariable long id) {
        return todoService.getTodoById(id);
    }

    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        todoService.deleteTodo(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<TodoDto> updateTodo(
        @PathVariable String username,
        @PathVariable long id,
        @RequestBody TodoDto todoDto
    ) {
        
        TodoDto updatedTodoDto = todoService.updateTodo(id, todoDto);
        return new ResponseEntity<>(updatedTodoDto, HttpStatus.OK);
    }

    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<Void> createTodo(
        @PathVariable String username,
        @RequestBody TodoDto todoDto
    ) {
        todoDto.setUsername(username);
        TodoDto createdTodoDto = todoService.createTodo(todoDto);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(createdTodoDto.getId())
            .toUri();

        return ResponseEntity.created(uri).build();
    }
}
