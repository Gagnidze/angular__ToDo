import { stringify } from '@angular/compiler/src/util';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // Emit an event with selected address

  @Output() navigateTo = new EventEmitter<string>();

  @ViewChild('new') new: ElementRef;
  @ViewChild('todo') todo: ElementRef;
  @ViewChild('inProgress') inProgress: ElementRef;
  @ViewChild('done') done: ElementRef;

  navigationChange(address: string, e) {
    this.navigateTo.emit(address);

    // I know there must be a better way of doing this, but i have not yet learned that, at least i get to use these ViewChild boyZ (totally not querySelectors)
    // :( (no router for me in the first month)

    this.new.nativeElement.classList.remove('active-tab');
    this.todo.nativeElement.classList.remove('active-tab');
    this.inProgress.nativeElement.classList.remove('active-tab');
    this.done.nativeElement.classList.remove('active-tab');
    if (address === 'to do') {
      e.target.classList.add('active-tab');
    } else if (address === 'in progress') {
      e.target.classList.add('active-tab')
    } else if (address === 'done') {
      e.target.classList.add('active-tab')
    } else if (address === 'new') {
      e.target.classList.add('active-tab')
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
