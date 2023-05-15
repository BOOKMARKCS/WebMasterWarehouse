import {Component, Input, ViewChild} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {FormDirective} from "../../../../directive/form.directive";

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.sass']
})
export class InputTextareaComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() formName!: FormGroup;
  @Input() index: number = 0;

  @ViewChild(FormDirective) formDirective!: FormDirective

  handleFormSubmission(name: string) {
    const formValue = this.formDirective.getValue();
    ((this.formName?.get('game')) as FormArray).controls[this.index].get(name)?.setValue(formValue)
  }
}
