import {Component, ViewChild} from '@angular/core';
import {GamesService} from "../../../../services/games.service";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {FormDirective} from "../../directive/form.directive";

@Component({
  selector: 'app-add-games',
  templateUrl: './add-games.component.html',
  styleUrls: ['./add-games.component.sass']
})
export class AddGamesComponent {
  // Data Games
  games?: Object; // Data Received From Resolver
  // FormControl
  formDataJson: FormGroup = this.fb.group({});
  formGames!: FormGroup;
  formArray!: FormArray;
  // Paths
  pathLocal: string = './assets/json/form-data-json/formGames.json'

  constructor(private route: ActivatedRoute, private service: GamesService, private fb: FormBuilder) {
    route.data.subscribe(data => this.games = data['games']) // Get resolver data from route.
    service.getLocal(this.pathLocal).subscribe(dataJson => {
      this.formDataJson = this.fb.group(dataJson[0]);
      Object.entries(dataJson[0]).forEach(([key, value]) => {
        (typeof value === 'object') ? (this.formDataJson.removeControl(key),
          this.formDataJson.addControl(key, this.fb.array([this.fb.group(Object(value)[0])]))) : undefined
      });
      this.formDataJson.reset();
      // this.formGames = this.fb.group({game: this.fb.array([this.formDataJson])});
      this.formGames = this.fb.group({game: this.fb.array([this.formDataJson])});
    }); // Convert the JSON object to a new FormControl object.
  }


  handleFormSubmit() {
    let form = this.fb.group({
      games: this.fb.array([]) // Empty FormArray
    });


    const gamesArray = form.get('games') as FormArray;

    const gameGroup1 = this.fb.group({
      gameName: [''],
      price: [''],
      publisher: [''],
      developer: [''],
      description: ['']
    });

    const gameGroup2 = this.fb.group({
      gameName: [''],
      price: [''],
      publisher: [''],
      developer: [''],
      description: ['']
    });


    gamesArray.push(gameGroup1);
    gamesArray.push(gameGroup1);
    gamesArray.push(gameGroup2);

    gamesArray.controls[0].get('gameName')?.setValue('2');

    console.log(gamesArray.value);
    console.log(form.value);
  }

  getFromArray() {

    return ((this.formGames.get('game')) as FormArray).controls;
  }

  newGame() {
    const gameArray = this.formGames.get('game') as FormArray;
    gameArray.push(this.formDataJson);
    this.formArray = this.formGames.controls['game'] as FormArray
    console.log(this.formGames)

  }

  onGenresSelected(event: any) {

  }

  protected readonly FormGroup = FormGroup;
}
