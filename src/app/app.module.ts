import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { HeaderComponent } from './header/header.component';
import { WhosThatPokemonComponent } from './whos-that-pokemon/whos-that-pokemon.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeItemComponent } from './poke-list/poke-item/poke-item.component';
import { PokeInfoComponent } from './poke-info/poke-info.component';
import { InfoStatusComponent } from './poke-info/info-status/info-status.component';
import { InfoDefaultComponent } from './poke-info/info-default/info-default.component';
import { InfoEvolutionComponent } from './poke-info/info-evolution/info-evolution.component';
import { NotificationComponent } from '@shared/components/notification/notification.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhosThatPokemonComponent,
    PokeListComponent,
    PokeItemComponent,
    PokeInfoComponent,
    InfoStatusComponent,
    InfoDefaultComponent,
    InfoEvolutionComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
