package com.giri.rest.webservices.restfulwebservices.todo;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.giri.rest.webservices.restfulwebservices.todo.repositary.TodoRepositary;

@RestController
public class TodoJpaResource {
	
	private TodoService todoService;
	
	private TodoRepositary todoRepositary;
	
	public TodoJpaResource(TodoService todoService,TodoRepositary todoRepositary)
	{
		this.todoService = todoService;
		this.todoRepositary = todoRepositary;
	} 
	 
	
	@GetMapping("/users/{username}/todos")
	public List<Todo> retrieveTodos(@PathVariable String username)
	{
//		return todoService.findByUsername(username);
		return todoRepositary.findByUsername(username);
	}
	
	@GetMapping("/users/{username}/todos/{id}")
	public Todo retrieveTodos(@PathVariable String username, @PathVariable int id)
	{
//		return todoService.findById(id);
		return todoRepositary.findById(id).get();

	}
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable int id)
	{
//		todoService.deleteById(id);
		todoRepositary.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/users/{username}/todos/{id}")
	public Todo updateTodo(@PathVariable String username,@PathVariable int id, @RequestBody Todo todo)
	{
//		todoService.updateTodo(todo);
		todoRepositary.save(todo);
		return todo;
		
	}
	
	@PostMapping("/users/{username}/todos")
     public Todo createTodo(@PathVariable String username, @RequestBody Todo todo)
	{
		
		todo.setUsername(username);
		todo.setId(null);
		return todoRepositary.save(todo);
//		Todo createdTodo = todoService.addTodo(username, todo.getDescription(), todo.getTargetDate(), todo.isDone());
//		return createdTodo;
	}
	

}
