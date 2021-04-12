import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoneComponent implements OnInit {

  taskData: Object[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.localUpdate();

    this.dataService.taskData.forEach(task => {
      if (task.status === 'done') {
        this.taskData.push(task);
      }
    });

    // this.dataService.dataChanged.subscribe(() => {
    //   console.log('kaxa')
    //   this.dataService.taskData.forEach(task => {
    //     if (task.status === 'done') {
    //       this.taskData.push(task);
    //     }
    //   });
    // });

    this.dataService.dataChanged.subscribe(
      () => {
        this.taskData = [];
        this.dataService.taskData.forEach(task => {
          if (task.status === 'done') {
            this.taskData.push(task);
          }
        });
      }
    );
  }

  // ngOnChanges() {
  //   this.dataService.taskData.forEach(task => {
  //     if (task.status === 'done') {
  //       this.taskData.push(task);
  //     }
  //   });
  // }

}
