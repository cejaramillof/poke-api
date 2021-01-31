import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokeInfoService } from '@core/services/pokemon-info.service';
import { SpinnerService } from '@core/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  public isOpenPokeInfo: boolean;
  private subscription = new Subscription();

  constructor(private pokeInfoService: PokeInfoService, public spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.subscription
      .add(this.pokeInfoService.openPokeInfo
        .subscribe((isOpen: boolean) => {
          this.isOpenPokeInfo = isOpen;
        }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
