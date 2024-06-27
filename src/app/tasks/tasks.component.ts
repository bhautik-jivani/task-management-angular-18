import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

import { dummyTasks } from '../dummy-tasks'
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input() userId!: string
  @Input() name!: string
  isAddingTask: boolean = false

  constructor(private tasksService: TasksService) {}
  
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  onStartAddTask() {
    this.isAddingTask = true
  }

  onCancelAddTask() {
    this.isAddingTask = false
  }

}
