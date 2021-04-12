import { Component, Injectable, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

Injectable();

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoTasks: Object[] = [];
  // id: number = undefined;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.localUpdate();

    this.dataService.taskData.forEach(task => {
      if (task.status === 'todo') {
        this.todoTasks.push(task);
      }
    });


    this.dataService.dataChanged.subscribe(
      () => {
        this.todoTasks = [];
        this.dataService.taskData.forEach(task => {
          if (task.status === 'todo') {
            this.todoTasks.push(task);
          }
        });
      }
    );

  }

}



