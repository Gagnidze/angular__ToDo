import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskDisplayComponent } from './task-display/task-display.component';
import { TodoComponent } from './task-display/todo/todo.component';
import { InProgressComponent } from './task-display/in-progress/in-progress.component';
import { DoneComponent } from './task-display/done/done.component';
import { TaskCreatorComponent } from './task-display/task-creator/task-creator.component';
import { DataService } from './shared/data.service';
import { TaskComponent } from './shared/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskDisplayComponent,
    TodoComponent,
    InProgressComponent,
    DoneComponent,
    TaskCreatorComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule
  ],
  // providing my data service here, so it is available everywhere in the app (hierarchial injector is cool ASF)
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
