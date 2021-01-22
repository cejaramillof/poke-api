import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhosThatPokemonComponent } from './whos-that-pokemon/whos-that-pokemon.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: WhosThatPokemonComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
