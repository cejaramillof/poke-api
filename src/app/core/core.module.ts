import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '@core/services/pokemon.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // Imports with unique reference, like services
    PokemonService
  ]
})
export class CoreModule { }
