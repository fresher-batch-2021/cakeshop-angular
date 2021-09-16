import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appElementref]'
})
export class ElementrefDirective
 {

  constructor(private element:ElementRef) { 
    this.element.nativeElement.style.backgroundColor="#F0EFEB";
    this.element.nativeElement.style.color= "black";
    this.element.nativeElement.style.padding="10px";
  }

}
