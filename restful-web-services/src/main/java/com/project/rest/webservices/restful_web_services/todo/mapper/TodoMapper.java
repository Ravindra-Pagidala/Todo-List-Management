package com.project.rest.webservices.restful_web_services.todo.mapper;


import com.project.rest.webservices.restful_web_services.todo.dto.TodoDto;
import com.project.rest.webservices.restful_web_services.todo.entity.Todo;

public class TodoMapper {

    public static Todo mapToTodo(TodoDto todoDto) {
        Todo todo = new Todo(
            todoDto.getId(),
            todoDto.getUsername(),
            todoDto.getDescription(),
            todoDto.getTargetDate(),
            todoDto.isDone()
        );
        return todo;
    }

    public static TodoDto mapToTodoDto(Todo todo) {
        TodoDto todoDto = new TodoDto(
            todo.getId(),
            todo.getUsername(),
            todo.getDescription(),
            todo.getTargetDate(),
            todo.isDone()
        );
        return todoDto;
    }
}
