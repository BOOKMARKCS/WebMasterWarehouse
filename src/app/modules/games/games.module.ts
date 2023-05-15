import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GamesRoutingModule} from './games-routing.module';
import {AddGamesComponent} from './components/add-games/add-games.component';
import {DeleteGamesComponent} from './components/delete-games/delete-games.component';
import {EditGamesComponent} from './components/edit-games/edit-games.component';
import {TrashGamesComponent} from './components/trash-games/trash-games.component';
import {SearchGamesComponent} from './components/search-games/search-games.component';
import {GamesIndexComponent} from './components/games-index/games-index.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GenresComponent} from './components/add-games/genres/genres.component';
import {DetailsComponent} from './components/add-games/details/details.component';
import {CardComponent} from './layouts/templates/cards/card/card.component';
import {CardProductComponent} from './layouts/templates/cards/card-product/card-product.component';
import {ButtonIconComponent} from './layouts/templates/buttons/button-icon/button-icon.component';
import {ButtonComponent} from './layouts/templates/buttons/button/button.component';
import {MatButtonModule} from "@angular/material/button";
import {ButtonTransparentComponent} from './layouts/templates/buttons/button-transparent/button-transparent.component';
import {InputComponent} from './layouts/common/inputs/input/input.component';
import {InputImageComponent} from './layouts/common/inputs/input-image/input-image.component';
import {InputTextareaComponent} from './layouts/common/inputs/input-textarea/input-textarea.component';
import {FormDirective} from './directive/form.directive';

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
    CardComponent,
    CardProductComponent,
    ButtonIconComponent,
    ButtonComponent,
    ButtonTransparentComponent,
    InputComponent,
    InputImageComponent,
    InputTextareaComponent,
    FormDirective,

  ],
  exports: [FormDirective],
  imports: [
    CommonModule,
    GamesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,

  ]
})
export class GamesModule {
}
