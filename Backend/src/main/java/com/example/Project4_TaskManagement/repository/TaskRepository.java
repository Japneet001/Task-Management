package com.example.Project4_TaskManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Project4_TaskManagement.model.Task;

public interface TaskRepository extends JpaRepository<Task, Integer>{

}
