# <p align="center">📝 FocusFlow  </p>

## 📌 Project Overview  
The **FocusFlow** is a web-based tool that helps users efficiently manage their tasks in a to-do list format. It allows users to create, update, delete, and view tasks while also providing user authentication features. The application uses **SweetAlert2 (Swal)** for user-friendly alerts.  

## 🛠 Tech Stack  
- 🎨 **Frontend:** Angular, Bootstrap  
- ⚙️ **Backend:** Spring Boot (REST API), Spring Data JPA  
- 🗄 **Database:** MySQL  

## ✨ Features  
- ✅ **User Registration & Login** – Secure authentication system.  
- ✅ **Task Creation** – Add tasks with a title, description, due date, and status.  
- 📋 **Task Viewing** – Display a list of tasks with relevant details.  
- ✏️ **Task Update** – Modify task details such as title, description, due date, and completion status.  
- 🗑 **Task Deletion** – Remove unnecessary tasks.  
- 🔎 **Find Task by ID** – Retrieve a specific task using its ID.
- 🔔 **SweetAlert2 Alerts** – Enhance user experience with visually appealing popups. 

## 🏗 Architecture  
The project follows a **client-server** architecture:  
- **Frontend (Angular)** → Communicates with the backend via RESTful APIs.  
- **Backend (Spring Boot)** → Exposes endpoints for task management.  
- **Database (MySQL)** → Stores task data.  

<!-- ![Architecture Diagram](https://via.placeholder.com/800x400?text=Architecture+Diagram)  -->
## 📸 Screenshots  

### ➕ Task Creation Page  
![Task Creation](https://github.com/user-attachments/assets/82fe6968-326b-45f8-a7b8-82967e077b11)  

### 📋 Task List  
![Task List](https://github.com/user-attachments/assets/995136d0-4dfd-429c-a72f-7a803f4028ac)  

### 🗑 Delete Task Confirmation  
![Delete Confirmation](https://github.com/user-attachments/assets/1b955ee3-69b8-43fb-9444-427c638f76f5)  


## 🚀 Setup & Installation  

### Backend (Spring Boot)  
1. Clone the repository.  
2. Navigate to the backend project directory.  
3. Run:  
   ```sh
   mvn spring-boot:run
   ```
4. The backend will start at `http://localhost:9000`.  

### Frontend (Angular)  

1. Navigate to the Angular project directory.  
2. Install dependencies:  
   ```sh
   npm install
   ```  
3. Run the Angular app:  
   ```sh
   ng serve
   ```  
4. Open `http://localhost:4200` in your browser.  


## 📡 API Endpoints  

### 🔑 User Authentication (UserController)  
| 🔹 Method | 🔹 Endpoint | 🔹 Description |  
|-----------|-----------|----------------|  
| POST | `/users/register` | Register a new user |  
| POST | `/users/login` | Authenticate user login |  

### 📝 Task Management (TaskController)  
| 🔹 Method | 🔹 Endpoint | 🔹 Description |  
|-----------|-----------|----------------|  
| POST | `/tasks/create-task` | Create a new task |  
| GET | `/tasks/view-tasks` | Fetch all tasks |  
| PUT | `/tasks/update-task/{id}` | Update a task by ID |  
| DELETE | `/tasks/delete-task/{id}` | Delete a task by ID |  
| GET | `/tasks/find-task/{id}` | Find a task by ID |  

## 🎨 SweetAlert2 Integration  
The application uses **SweetAlert2 (Swal)** for displaying alerts, confirmations, and success messages in a visually appealing manner.  

Example usage in Angular:  
```ts
import Swal from 'sweetalert2';

Swal.fire({
  title: 'Success!',
  text: 'Task has been created successfully.',
  icon: 'success',
  confirmButtonText: 'OK'
});
```

## 🚀 Future Enhancements  

- 🔐 Role-based authentication & authorization  
- 📊 Task prioritization and categorization  
- 🔔 Notifications and reminders  

## 📜 License  

This project is **open-source**. Feel free to modify and improve it!  

---

<p align="center">Made with ❤️ by <strong>Japneet Kaur</strong></p>


