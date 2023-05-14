import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GamesRoutingModule} from './games-routing.module';
import {AddGamesComponent} from './components/add-games/add-games.component';
import {DeleteGamesComponent} from './components/delete-games/delete-games.component';
import {EditGamesComponent} from './components/edit-games/edit-games.component';
import {TrashGamesComponent} from './components/trash-games/trash-games.component';
import {SearchGamesComponent} from './components/search-games/search-games.component';
import {GamesIndexComponent} from './components/games-index/games-index.component';
import {ReactiveFormsModule} from "@angular/forms";
import { GenresComponent } from './components/add-games/genres/genres.component';
import { DetailsComponent } from './components/add-games/details/details.component';

@NgModule({
  declarations: [
    AddGamesComponent,
    DeleteGamesComponent,
    EditGamesComponent,
    TrashGamesComponent,
    SearchGamesComponent,
    GamesIndexComponent,
    GenresComponent,
    DetailsComponent,

  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    ReactiveFormsModule,

  ]
})
export class GamesModule {
}
