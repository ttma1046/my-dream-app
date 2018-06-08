import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLearnisfun]'
})
export class LearnisfunDirective {

  constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }

}
