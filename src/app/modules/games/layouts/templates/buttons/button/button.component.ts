import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent  implements OnInit {
  @Input() type: string = 'button';
  @Input() textColor: string = '#009EFF';
  @Input() textHover: string = 'white';
  @Input() backgroundColor: string = '#F1FAFF';
  @Input() backgroundHover: string = '#009EFF';
  BaseBackground: string = "#F1FAFF";
  BaseColor: string = "#009EFF";

  buttonUpdate(background: string, text: string) {
    this.BaseBackground = background;
    this.BaseColor = text;
  }

  ngOnInit(): void {
    this.BaseBackground = this.backgroundColor == '#F1FAFF' ? this.BaseBackground : this.backgroundColor;
    this.BaseColor = this.textColor == '#009EFF' ? this.BaseColor:this.textColor;
  }

}
