import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Task {
  name: string;
  priority: string;
  dueDate: string;
  completed: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule] 
})
export class DashboardComponent implements OnInit {
  currentDate: Date;
  tasks: Task[] = [];
  newTask: Task = { name: '', priority: 'low', dueDate: '', completed: false };
  isEditing: boolean = false;
  taskToEdit: Task | null = null;

  constructor() {
    this.currentDate = new Date();
  }

  ngOnInit(): void {
    this.loadTasks(); 
    this.sortTasksByDate(); 
  }

  loadTasks() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        this.tasks = JSON.parse(storedTasks);
      }
      this.sortTasksByDate();
    }
  }

  saveTasks() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  addTask() {
    if (this.newTask.name.trim() === '') return; 

    if (this.isEditing && this.taskToEdit) {
      this.taskToEdit.name = this.newTask.name;
      this.taskToEdit.priority = this.newTask.priority;
      this.taskToEdit.dueDate = this.newTask.dueDate;
      this.isEditing = false;
      this.taskToEdit = null;
    } else {
      this.tasks.push({ ...this.newTask, completed: false });
    }

    this.saveTasks();
    this.newTask = { name: '', priority: 'low', dueDate: '', completed: false }; 
    this.sortTasksByDate(); 
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.saveTasks();
  }

  updateTask(task: Task) {
    this.saveTasks();
  }

  editTask(task: Task) {
    this.isEditing = true;
    this.taskToEdit = task;
    this.newTask = { ...task };
  }

  getTaskNameClass(task: Task) {
    return task.completed ? 'task-name-completed' : ''; 
  }

  getPriorityClass(task: Task) {
    const today = new Date();
    const dueDate = new Date(task.dueDate);
    if (task.completed) {
      return 'completed-task';
    } else if (dueDate < today) {
      return 'overdue-task';
    } else if (task.priority === 'high') {
      return 'high-priority';
    } else if (task.priority === 'medium') {
      return 'medium-priority';
    } else {
      return 'low-priority';
    }
  }

  sortTasksByDate() {
    this.tasks.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
  }
}
