import {Component, EventEmitter, Input, Output} from '@angular/core';
import {distinct, from, Observable, switchMap} from "rxjs";
import {GamesService} from "../../../../../services/games.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.sass']
})
export class GenresComponent {
  genres$: Observable<any>;
  genreDescription: any[] = [];
  @Input() GenreForm:any;
  @Input() Selected: any = '';
  @Output() Genres: EventEmitter<any> = new EventEmitter<any>();
  constructor(private sv: GamesService) {
    this.genres$ = sv.get('Genres');
    this.genres$.pipe(
      switchMap(genres => from(genres.map((genre: any) => genre.genreDescription))), distinct()
    ).subscribe(res => this.genreDescription.push(res))
  }


}
