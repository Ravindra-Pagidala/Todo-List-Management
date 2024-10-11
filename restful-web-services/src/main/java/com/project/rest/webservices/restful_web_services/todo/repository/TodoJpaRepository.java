package com.project.rest.webservices.restful_web_services.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.rest.webservices.restful_web_services.todo.entity.Todo;


@Repository
public interface TodoJpaRepository extends JpaRepository<Todo,Long> {
	
	
	List<Todo> findByUsername(String username);

}
