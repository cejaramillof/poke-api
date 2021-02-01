import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeInfoComponent } from './poke-info/poke-info.component';
import { WhosThatPokemonComponent } from './whos-that-pokemon/whos-that-pokemon.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: WhosThatPokemonComponent },
  { path: 'pokemon/:name', component: PokeInfoComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
