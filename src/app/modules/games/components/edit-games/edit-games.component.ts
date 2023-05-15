import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-edit-games',
  templateUrl: './edit-games.component.html',
  styleUrls: ['./edit-games.component.sass']
})
export class EditGamesComponent {
  @Input() game: any;
  @Input() gameId: any;
}
