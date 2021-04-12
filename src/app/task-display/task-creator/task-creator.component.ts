import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss']
})
export class TaskCreatorComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }

  // The Create button in this component triggers harvestData method. This method harvests the data from inputs and calls the saveTask method from DataService. saveTask takes in all the information about a task and stores it in DataService.taskData

  harvestData(name: string, description: string, priority: string, status: string) {
    this.dataService.saveTask(name, description, priority, status);
  }
}