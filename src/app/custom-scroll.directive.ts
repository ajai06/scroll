import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomScroll]',
  exportAs: 'appCustomScroll'
})
export class CustomScrollDirective implements OnInit {

    disableBtn = true;
    isScroll = false;
    top: number;
    offSetHeight: number;
    scrollHeight: number;
    scroller = false;
    constructor(private eleRef: ElementRef) {}


    @HostListener('scroll', ['$event']) onScroll(event) {

      this.isScroll = true;
      this.top = this.eleRef.nativeElement.scrollTop;
      this.offSetHeight = this.eleRef.nativeElement.offsetHeight;
      this.scrollHeight = this.eleRef.nativeElement.scrollHeight;

      if (this.top === 0) {
          this.disableBtn = true;
        }
      if (this.top > this.scrollHeight - this.offSetHeight - 1) {
          this.disableBtn = false;
        }

      const  bottom = ((this.scrollHeight - this.offSetHeight) - this.top);
      if (bottom !== 0 ) {
        this.scroller = true;
      }
    }
}
