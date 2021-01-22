import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '@core/pokemon.model';

@Component({
  selector: 'poke-item',
  templateUrl: './poke-item.component.html',
  styleUrls: ['./poke-item.component.scss']
})
export class PokeItemComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void { }
}
