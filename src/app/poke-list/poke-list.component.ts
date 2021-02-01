import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokemonService } from '@core/services/pokemon.service';
import { Pokemon } from '@core/pokemon.model';
import { List } from '@core/list.model';
import { SpinnerService } from '@core/services/spinner.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  public pokemonList: Pokemon[] = [];
  private LIMIT: number = 9;
  private loadedTimes: number = 0;
  private subscription = new Subscription();

  constructor(private pokemonService: PokemonService,
    private router: Router,
    public spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.isLoading = !this.isLoading;
    this.loadedTimes = 0;
    const offset = this.loadedTimes * 9;

    this.subscription.add(this.pokemonService.getPokemonList(offset, this.LIMIT).subscribe((_pokemonList: List) => {
      this.loadList(_pokemonList);
      this.loadedTimes++;
      this.isLoading = !this.isLoading;
    }));

    this.subscription.add(this.pokemonService.searchingPokemon.subscribe((_pokemon: Pokemon) => {
      if (_pokemon) {
        this.router.navigate(['/pokemon', _pokemon.name]);
      } else {
        this.router.navigate(['/pokemon']);
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loadList(_pokemonBasicList: List) {
    for (const item of _pokemonBasicList.results) {
      this.subscription.add(this.pokemonService.getPokemonByName(item.name).subscribe((_pokemon: Pokemon) => {
        this.pokemonList.push({ ..._pokemon });
        this.pokemonList.sort((p1, p2) => p1.id - p2.id);
      }));
    }
  }

  public onLoadNextNine() {
    this.isLoading = !this.isLoading;

    const offset = this.loadedTimes * 9;

    this.subscription.add(this.pokemonService.getPokemonList(offset, this.LIMIT).subscribe((_pokemonList: List) => {
      this.loadList(_pokemonList);
      this.loadedTimes++;
      this.isLoading = !this.isLoading;
    }));
  }
}
