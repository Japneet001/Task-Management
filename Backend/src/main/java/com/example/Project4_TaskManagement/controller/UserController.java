package com.example.Project4_TaskManagement.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Project4_TaskManagement.model.User;
import com.example.Project4_TaskManagement.repository.UserRepository;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	UserRepository userRepo;
	
	@PostMapping("/register")
	public ResponseEntity<Boolean> register(@RequestBody User user) {
	    Optional<User> existingUser = userRepo.findByUsernameAndPassword(user.getUsername(), user.getPassword());
	    if (existingUser.isPresent()) {
	        return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
	    }
	    userRepo.save(user);
	    return new ResponseEntity<>(true, HttpStatus.CREATED);
	}

	@PostMapping("/login")
	public ResponseEntity<Boolean> login(@RequestBody User u) {
	    Optional<User> user = userRepo.findByUsernameAndPassword(u.getUsername(), u.getPassword());
	    if (user.isPresent()) {
	        System.out.println("Login Successful for user: " + u.getUsername()); 
	        return new ResponseEntity<>(true, HttpStatus.OK);
	    }
	    System.out.println("Invalid Credentials"); 
	    return new ResponseEntity<>(false, HttpStatus.OK); 
	}


}


