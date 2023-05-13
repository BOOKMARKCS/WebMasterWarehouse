import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {GamesService} from "../../../../services/games.service";

@Component({
  selector: 'app-games-index',
  templateUrl: './games-index.component.html',
  styleUrls: ['./games-index.component.sass']
})
export class GamesIndexComponent implements OnInit {
  games$: Observable<object>
  formDataJson: FormGroup = this.fb.group({})

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private service: GamesService) {
    // Get resolver data from route.
    this.games$ = route.data
    // Convert the JSON object to a new FormControl object.
    service.getLocal('./assets/json/form-data-json/formGames.json').subscribe(dataJson => this.formDataJson = new FormGroup(
      Object.fromEntries(Object.entries(dataJson).map(([key, value]) => [key, new FormControl(value)]))));
  }
  ngOnInit(): void {
  }
}
