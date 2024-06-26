import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

import { dummyTasks } from '../dummy-tasks'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() userId!: string
  @Input() name!: string

  tasks = dummyTasks
  
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

}