package com.example.Project4_TaskManagement.model;

import jakarta.persistence.*;

@Entity
@Table(name="tasks")
public class Task {
	@Id
	@Column(name="id")
	private int id;
	@Column(name="title")
	private String title;
	@Column(name="description")
    private String description;
	@Column(name="date")
    private String dueDate;
	@Column(name="status")
    private String status;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDueDate() {
		return dueDate;
	}
	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
