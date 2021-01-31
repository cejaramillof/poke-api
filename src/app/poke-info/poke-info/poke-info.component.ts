import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pokemon } from '@core/pokemon.model';
import { PokemonService } from '@core/services/pokemon.service';
import { PokeInfoService } from '@core/services/pokemon-info.service';


@Component({
  selector: 'poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.scss']
})
export class PokeInfoComponent implements OnInit, OnDestroy {
  public isOpen: boolean;
  public pokemon: Pokemon;
  public subscription = new Subscription();

  constructor(private pokemonService: PokemonService, private pokeInfoService: PokeInfoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const pokemonName = this.route.snapshot.params['name'];

    this.subscription
      .add(this.pokemonService
        .getPokemonByName(pokemonName)
        .subscribe((_pokemon: Pokemon) => {
          this.pokemon = _pokemon;
        }));

    this.subscription.add(this.route.params
      .subscribe((_params: Params) => {
        const name = _params['name'];

        this.pokemonService
          .getPokemonByName(name)
          .subscribe(_pokemon => {
            this.pokemon = _pokemon;
          })
      }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public showMoreInfo(status: boolean): void {
    this.isOpen = status
    this.pokeInfoService.openPokeInfo.next(this.isOpen);
  }
}
