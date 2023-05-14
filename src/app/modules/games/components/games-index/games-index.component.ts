import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {GamesService} from "../../../../services/games.service";

@Component({
  selector: 'app-games-index',
  templateUrl: './games-index.component.html',
  styleUrls: ['./games-index.component.sass']
})
export class GamesIndexComponent implements OnInit {
  // Data Received From Resolver
  games$: Observable<object>
  // FormControl
  formDataJson: FormGroup = this.fb.group({})
  formStatus: boolean = false
  // Paths
  pathLocal: string = './assets/json/form-data-json/formGames.json'

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private service: GamesService) {
    this.games$ = route.data; // Get resolver data from route.
    service.getLocal(this.pathLocal).subscribe(dataJson => {
      this.formDataJson = this.fb.group(dataJson[0]);
      Object.entries(dataJson[0]).forEach(([key, value]) => {
        (typeof value === 'object') ? (this.formDataJson.removeControl(key),
          this.formDataJson.addControl(key, this.fb.array([this.fb.group(Object(value)[0])]))) : undefined
      });
      this.formDataJson.reset();
      this.formStatus = true;
    }); // Convert the JSON object to a new FormControl object.
  }

  ngOnInit(): void {
  }

  handleFormSubmit() {
    console.log(this.formDataJson.value)
  }
}
