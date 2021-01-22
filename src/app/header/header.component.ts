import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'poke-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('filterInput') filterInput: NgModel;
  public pokemonName: string;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {

  }
}
