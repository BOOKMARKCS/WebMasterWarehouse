import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GamesIndexComponent} from "./components/games-index/games-index.component";
import {GamesGenresResolver, GamesResolver} from "../../resolvers/games.resolver";
import {EditGamesComponent} from "./components/edit-games/edit-games.component";

const routes: Routes = [
  {path: "", component: GamesIndexComponent, resolve: {games: GamesResolver}},
  {path: "edit", component: EditGamesComponent, resolve: {games: GamesGenresResolver}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {
}
