import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent, DatePipe]
})

export class TaskComponent {
  @Input({required: true}) task!: Task

  constructor(private tasksService: TasksService) {}

  onCompleteTask() {
    this.tasksService.onRemove(this.task.id)
  }
}
