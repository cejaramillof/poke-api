import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { NotificationTypeEnum } from '@core/notification.model';
import { Pokemon } from '@core/pokemon.model';
import { NotificationService } from '@core/services/notification.service';
import { PokemonService } from '@core/services/pokemon.service';

@Component({
  selector: 'poke-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('filterInput') filterInput: NgModel;
  public pokemonName: string;

  constructor(private pokemonService: PokemonService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.filterInput.valueChanges.pipe(debounceTime(1000), distinctUntilChanged()).subscribe(_pokemonName => {
      if (_pokemonName) {
        this.pokemonService.getPokemonByName(_pokemonName).subscribe((result: Pokemon) => {
          this.pokemonService.searchByPokemon(result);
          this.filterInput.control.reset();
          this.notificationService.notify({
            message: `${result.name.toUpperCase()} encontrado`,
            type: NotificationTypeEnum.success
          });
        },
          error => {
            this.router.navigate(['/pokemon']);
            this.notificationService.notify({
              message: 'Pokémon no encontrado!',
              type: NotificationTypeEnum.error
            });
            console.error(`Pokemon no encontrado!${error}`);
          });
      }
    });
  }
}
