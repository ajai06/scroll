import { Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  @ViewChild('scroll', { static: false }) public scroll: ElementRef<any>;


   value =  'hello from component';

  inputData = {};

  public SearchPosition(type) {
    if (type === 1) {
      this.scroll.nativeElement.scrollTop -= 200000;
    } else {
      this.scroll.nativeElement.scrollTop += 200000;
    }
  }

  send() {
    console.log('clicked');
    const obj = {
      event : this.value,
    }
    this.inputData = {...obj}
  }
}
