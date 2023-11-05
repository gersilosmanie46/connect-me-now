// Filename: complexApplication.js
// This code represents a complex web application for managing tasks and users.

// User class for representing users
class User {
  constructor(name, email, role) {
    this.name = name;
    this.email = email;
    this.role = role;
  }

  getInfo() {
    return `Name: ${this.name}, Email: ${this.email}, Role: ${this.role}`;
  }
}

// Task class for representing tasks
class Task {
  constructor(id, title, description, assignee) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.assignee = assignee;
    this.completed = false;
  }

  markAsCompleted() {
    this.completed = true;
  }

  getInfo() {
    return `Title: ${this.title}, Assignee: ${this.assignee}, Completed: ${this.completed}`;
  }
}

// Application class, main entry point for the web application
class Application {
  constructor() {
    this.users = [];
    this.tasks = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  addTask(task) {
    this.tasks.push(task);
  }

  findUserByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  findTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }

  printAllUsers() {
    console.log("All Users:");
    this.users.forEach((user) => console.log(user.getInfo()));
  }

  printAllTasks() {
    console.log("All Tasks:");
    this.tasks.forEach((task) => console.log(task.getInfo()));
  }
}

// Usage example
const app = new Application();

const user1 = new User("John Doe", "john@example.com", "Developer");
const user2 = new User("Jane Smith", "jane@example.com", "Designer");

app.addUser(user1);
app.addUser(user2);

const task1 = new Task(1, "Implement authentication", "Implement user authentication and authorization", "John Doe");
const task2 = new Task(2, "Design homepage", "Design the landing page for the application", "Jane Smith");

app.addTask(task1);
app.addTask(task2);

task1.markAsCompleted();

console.log("User by email:", app.findUserByEmail("john@example.com").getInfo());
console.log("Task by ID:", app.findTaskById(2).getInfo());

app.printAllUsers();
app.printAllTasks();

// ... (more code beyond 200 lines)