import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMagentablack]'
})
export class MagentablackDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'magenta';
    el.nativeElement.style.backgroundColor = 'black';
    el.nativeElement.style.padding = '10px';
  }
}
