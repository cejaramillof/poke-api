import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '@core/services/pokemon.service';
import { PokeInfoService } from '@core/services/pokemon-info.service';
import { NotificationService } from '@core/services/notification.service';
import { SpinnerService } from '@core/services/spinner.service';
import { LoadingInterceptorProvider } from '@core/http/loading.interceptor';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // Imports with unique reference, like services
    PokemonService,
    PokeInfoService,
    NotificationService,
    SpinnerService,
    LoadingInterceptorProvider
  ]
})
export class CoreModule { }
