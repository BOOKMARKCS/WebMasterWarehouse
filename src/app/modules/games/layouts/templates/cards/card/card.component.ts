import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
/**

 A reusable card component that displays a title and content. It can be used as a container for any kind of information.
 @component CardComponent
 @selector app-card
 @param {string} card-title The title of the card.
 @param {string} card-content The content of the card.
 @example
 <card>
 <h1 card-title>My Title</h1>
 <p card-content>This is the content of my card.</p>
 </card>
 @returns {object} The CardComponent object with title and content templates for rendering the component.
 */
export class CardComponent {
  @Input() cardClasses: string = '';
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() styleTitle: string = 'text-2xl';}
