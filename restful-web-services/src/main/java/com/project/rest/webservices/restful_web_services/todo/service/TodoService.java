package com.project.rest.webservices.restful_web_services.todo.service;

import java.util.List;

import com.project.rest.webservices.restful_web_services.todo.dto.TodoDto;

public interface TodoService {
    
    TodoDto createTodo(TodoDto todoDto);
    TodoDto getTodoById(Long id);
    TodoDto updateTodo(Long id, TodoDto todoDto);
    List<TodoDto> getAllTodos(String username);
    void deleteTodo(Long id);
}
