import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {FormDirective} from "../../../../directive/form.directive";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() index: number = 0;
  @Input() formName: any ;
  @Input() formValue!: FormGroup;


  @Output()  handleInput = new EventEmitter<any>



  handleFormSubmission(name: string) {
    // let formValue;
    this.handleInput.emit(name);


    // const formValue = this.formDirective.getValue();
    // ((this.formName?.get('game')) as FormArray).controls[this.index].get(name)?.setValue(formValue);
    // console.log("log 0",((this.formName?.get('game')) as FormArray).controls[0])
    // this.formName[0].controls.gameName.patchValue('A');
    // this.formName[1].controls.gameName.patchValue('k');
    // this.formName[2].controls.gameName.patchValue('h');
    // console.log("formName",this.formName.control)
    // console.log(this.index)
  }

}
