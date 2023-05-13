import {ResolveFn} from '@angular/router';
import {Observable, of} from "rxjs";
import {GamesService} from "../services/games.service";
import {inject} from "@angular/core";

export const GamesResolver: ResolveFn<Observable<any>> = () => {
  return inject(GamesService).get('')
};

export const GamesGenresResolver: ResolveFn<Observable<any>> = () => {
  return of({Games: "GAMES GENRES"})
}
