import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss']
})
export class InProgressComponent implements OnInit {

  inprogressTasks: Object[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.localUpdate();

    this.dataService.taskData.forEach(task => {
      if (task.status === 'inProgress') {
        this.inprogressTasks.push(task);
      }
    });

    this.dataService.dataChanged.subscribe(
      () => {
        this.inprogressTasks = [];
        this.dataService.taskData.forEach(task => {
          if (task.status === 'inProgress') {
            this.inprogressTasks.push(task);
          }
        });
      }
    );


  }

}
