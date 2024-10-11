package com.project.rest.webservices.restful_web_services.todo.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.project.rest.webservices.restful_web_services.todo.dto.TodoDto;
import com.project.rest.webservices.restful_web_services.todo.entity.Todo;
import com.project.rest.webservices.restful_web_services.todo.mapper.TodoMapper;
import com.project.rest.webservices.restful_web_services.todo.repository.TodoJpaRepository;
import com.project.rest.webservices.restful_web_services.todo.service.TodoService;

@Service
public class TodoServiceImpl implements TodoService {

    private final TodoJpaRepository todoJpaRepository;

    public TodoServiceImpl(TodoJpaRepository todoJpaRepository) {
        this.todoJpaRepository = todoJpaRepository;
    }

    @Override
    public TodoDto createTodo(TodoDto todoDto) {
        Todo todo = TodoMapper.mapToTodo(todoDto);
        Todo savedTodo = todoJpaRepository.save(todo);
        return TodoMapper.mapToTodoDto(savedTodo);
    }

    @Override
    public TodoDto getTodoById(Long id) {
        Todo todo = todoJpaRepository
            .findById(id)
            .orElseThrow(() -> new RuntimeException("Todo doesn't exist"));
        return TodoMapper.mapToTodoDto(todo);
    }

    @Override
    public TodoDto updateTodo(Long id, TodoDto todoDto) {
        Todo todo = todoJpaRepository
            .findById(id)
            .orElseThrow(() -> new RuntimeException("Todo doesn't exist"));

        todo.setDescription(todoDto.getDescription());
        todo.setTargetDate(todoDto.getTargetDate());
        todo.setDone(todoDto.isDone());

        Todo updatedTodo = todoJpaRepository.save(todo);
        return TodoMapper.mapToTodoDto(updatedTodo);
    }

    @Override
    public List<TodoDto> getAllTodos(String username) {
        List<Todo> todos = todoJpaRepository.findByUsername(username);
        return todos.stream()
            .map(TodoMapper::mapToTodoDto)
            .collect(Collectors.toList());
    }

    @Override
    public void deleteTodo(Long id) {
        Todo todo = todoJpaRepository
            .findById(id)
            .orElseThrow(() -> new RuntimeException("Todo doesn't exist"));
        todoJpaRepository.deleteById(id);
    }
}
