import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {GamesService} from "../../../../services/games.service";

@Component({
  selector: 'app-games-index',
  templateUrl: './games-index.component.html',
  styleUrls: ['./games-index.component.sass']
})
export class GamesIndexComponent implements OnInit {
  // Data Games
  games?: Object; // Data Received From Resolver
  gameId: number = 0;
  Index: number = 0;


  // Effects
  toggleEdit: boolean = false;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private service: GamesService) {
    route.data.subscribe(data => this.games = data['games']) // Get resolver data from route.

  }

  ngOnInit(): void {
  }



  delete(gameId: number) {
    this.service.delete(`DELETE-Game/${gameId}`).subscribe(res => console.log(res))
    // this.games$ = this.service.get('')
  }


  protected readonly Object = Object;
}
