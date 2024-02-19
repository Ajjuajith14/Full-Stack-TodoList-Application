package com.giri.rest.webservices.restfulwebservices.todo.repositary;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.giri.rest.webservices.restfulwebservices.todo.Todo;

public interface TodoRepositary extends JpaRepository<Todo, Integer>{

	List<Todo> findByUsername(String username);
}
