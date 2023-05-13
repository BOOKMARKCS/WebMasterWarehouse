import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GamesRoutingModule} from './games-routing.module';
import {AddGamesComponent} from './components/add-games/add-games.component';
import {DeleteGamesComponent} from './components/delete-games/delete-games.component';
import {EditGamesComponent} from './components/edit-games/edit-games.component';
import {TrashGamesComponent} from './components/trash-games/trash-games.component';
import {SearchGamesComponent} from './components/search-games/search-games.component';
import {GamesIndexComponent} from './components/games-index/games-index.component';

@NgModule({
  declarations: [
    AddGamesComponent,
    DeleteGamesComponent,
    EditGamesComponent,
    TrashGamesComponent,
    SearchGamesComponent,
    GamesIndexComponent,

  ],
  imports: [
    CommonModule,
    GamesRoutingModule,

  ]
})
export class GamesModule {
}
