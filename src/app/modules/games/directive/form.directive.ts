import {Directive, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
@Directive({
  selector: '[appForm]'
})
export class FormDirective {

  @Input('formValue') formControlName: string ='';
  @Output() formValueChange = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  getValue() {
    return this.el.nativeElement.value;
  }
  // onInput(event: any) {
  //   this.formValueChange.emit(event.target.value);
  // }

}
