import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) { }
  // @HostListener('focus') onFocus() {
  //   console.log("on Focus");
  // }
  @Input('appInputFormat') format;
  @HostListener('blur') onBlur() {
    let value:string = this.el.nativeElement.value; //set the value to string so value can access string properties
    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
    console.log("on Blur");
  }
}
