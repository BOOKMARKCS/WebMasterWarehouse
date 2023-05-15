import {AfterContentChecked, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormDirective} from "../../../directive/form.directive";
import {FormArray, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent   {
  @ViewChild(FormDirective) formDirective!: FormDirective
  @Input() index: number = 0;
  @Input() gameId: any;
  @Input() formGame: any;
  @Output() FormOutput: EventEmitter<any> = new EventEmitter<any>();
  name: string =''
  remove(index: number) {

  }

  continue() {
  }

  setValueByControl(controlName: string, $event: any) {
    this.formGame[this.index].controls[controlName].setValue($event);
    console.log($event, "E",$event.target)
  }
}
