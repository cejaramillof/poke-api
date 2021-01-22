import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '@environments/environment';
import { EvolutionChain } from '@core/evolution.model';
import { Pokemon, Species } from '@core/pokemon.model';
import { List } from '@core/list.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  apiUrl: string = environment.pokemonApi;
  public searchingPokemon = new Subject<Pokemon>();

  requestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }),
    method: 'GET',
    mode: 'no-cors'
  };

  constructor(private http: HttpClient) { }

  public getPokemonByName(_name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/pokemon/${_name.toLowerCase()}`, this.requestOptions);
  }

  public getPokemonList(_offset: number, _limit: number): Observable<List> {
    return this.http.get<List>(`${this.apiUrl}/pokemon/`, {
      params: { 'offset': _offset.toString(), 'limit': _limit.toString() },
      ...this.requestOptions
    });
  }

  public searchByPokemon(_pokemon: Pokemon) {
    this.searchingPokemon.next(_pokemon);
  }

  public getSpeciesByPokemon(_name: string): Observable<Species> {
    return this.http.get<Species>(`${this.apiUrl}/pokemon-species/${_name}`, this.requestOptions);
  }

  public getEvolutionChainByPokemon(_evolutionChaingUrl: string): Observable<EvolutionChain> {
    return this.http.get<EvolutionChain>(`${_evolutionChaingUrl}`, this.requestOptions);
  }
}
