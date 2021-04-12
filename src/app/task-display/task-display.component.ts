import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-task-display',
  templateUrl: './task-display.component.html',
  styleUrls: ['./task-display.component.scss']
})
export class TaskDisplayComponent implements OnInit {

  @Input() navigation: string;
  constructor(private dataService: DataService) { }

  everySingleTask: Object[] = [];

  ngOnInit(): void {

  }



}
