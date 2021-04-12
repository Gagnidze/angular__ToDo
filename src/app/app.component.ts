import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'to-do-list';

  navigator: string = 'new';

  assign(address) {
    // assigns the selected address to navigate 
    this.navigator = address;
  }



}
