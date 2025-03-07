package com.example.Project4_TaskManagement.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Project4_TaskManagement.model.User;

public interface UserRepository extends JpaRepository<User, String>{
//	Optional<User> findByUsername(String username);
	Optional<User> findByUsernameAndPassword(String username, String password);
}
