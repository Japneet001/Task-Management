package com.example.Project4_TaskManagement.controller;

import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Project4_TaskManagement.model.Task;
import com.example.Project4_TaskManagement.repository.TaskRepository;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/tasks")
public class TaskController {
	@Autowired
	TaskRepository taskRepo;
	
	// Task Creation
	@PostMapping("/create-task")
	public ResponseEntity<Task> createTask(@RequestBody Task t) {
		Task createdTask = taskRepo.save(t);
		return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
	}
	
	// Task Viewing
	@GetMapping("/view-tasks")
	public ResponseEntity<List<Task>> viewTasks() {
		List<Task> tasks = taskRepo.findAll();
		return new ResponseEntity<>(tasks, HttpStatus.OK);
	}
	
	// Task Update
	@PutMapping("/update-task/{id}")
	public ResponseEntity<Object> updateTask(@PathVariable("id") int id, @RequestBody Task t) {
		Optional<Task> existingTask = taskRepo.findById(id);
		if(existingTask.isPresent()) {
			Task updatedTask = existingTask.get();
			updatedTask.setDescription(t.getDescription());
			updatedTask.setDueDate(t.getDueDate());
			updatedTask.setStatus(t.getStatus());
			taskRepo.save(updatedTask);
			return new ResponseEntity<>(updatedTask, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>("Task Not Found", HttpStatus.NOT_FOUND);
		}
	
	}
	
	// Task Deletion
	@DeleteMapping("delete-task/{id}")
	public ResponseEntity<String> deleteTask(@PathVariable("id") int id) {
		Optional<Task> task = taskRepo.findById(id);
		if (task.isPresent()) {
			taskRepo.deleteById(id);
			return new ResponseEntity<>("Task Deleted Successfully", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Task Not Found", HttpStatus.NOT_FOUND);
		}
	}
	
	// Find Task by Id
	@GetMapping("/find-task/{id}")
	public ResponseEntity<Object> findTaskById(@PathVariable("id") int id) {
	    Optional<Task> task = taskRepo.findById(id);
	    if (task.isPresent()) {
	        return new ResponseEntity<>(task.get(), HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>("Task Not Found", HttpStatus.NOT_FOUND);
	    }
	}

	
}
