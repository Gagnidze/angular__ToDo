import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  id: number = undefined;

  constructor(private dataService: DataService) { }

  changeStatus(status, e) {
    // An ID based method, which checks if the target ID matches any ID in the main array and changes the status of an object with the corresponding ID.
    // NOTE. ID's will always match as every time we remove an object, ID's are re assigned.
    console.log(status)
    this.id = e.target.parentElement.id;
    this.dataService.taskData.forEach(el => {
      if (el.id == this.id) {
        el.status = status;
      }
      // updating localStorage after changing that id
      this.dataService.LSUpdate();
    });
    this.dataService.dataChanged.emit();
  }

  deleteTask(e) {
    // This method splices an object at the position of the target, so it removes a task we want to.
    this.dataService.taskData.forEach(el => {
      this.id = e.target.parentElement.id;
      if (el.id == this.id) {
        console.log(this.id);
        this.dataService.taskData.splice(this.id, 1);
        this.dataService.idUpdate(this.dataService.taskData);
      }
    });
    // Emitting a trigger to re-render the view correctly and then updating the local storage
    this.dataService.dataChanged.emit();
    this.dataService.LSUpdate();
  }


  logger() {
    console.log(this.dataService.taskData);
  }

  // with this input, we get all the tasks inside this component from it's parent
  @Input() todoTasks: Object[] = [];

  ngOnInit(): void {
    // this hook will be triggered when any instance of this component is initialized, so it will be updated with data from localStorage
    this.dataService.localUpdate();
  }

}
