import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  singleTask: { name: string, description: string, priority: string, status: string, id: number };
  taskData = [];


  dataChanged = new EventEmitter<void>();

  LSUpdate() {
    // Updates the local storage with the current tasks
    localStorage.setItem('data', JSON.stringify(this.taskData));
  }

  localUpdate() {
    // Updates the local variable with the data from Local Storage 
    this.taskData = JSON.parse(localStorage.getItem('data'));
  }

  // Updates Id's after deleting, so next delete works properly.
  idUpdate(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].id = i;
    }
  }

  // saves tasks in taskData array as objects, id is set to undefined, as it will be assigned after task is pushed in array.
  saveTask(name: string, description: string, priority: string, status: string) {
    this.singleTask = ({
      name: name,
      description: description,
      status: status,
      priority: priority,
      id: undefined
    })


    this.taskData.push(this.singleTask);
    this.idUpdate(this.taskData);
    this.dataChanged.emit();
    this.LSUpdate();
  }
}