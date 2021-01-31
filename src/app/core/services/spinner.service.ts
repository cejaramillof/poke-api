import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SpinnerService {
  public loadingStatus = new Subject<boolean>();
  private loading = false;
  private busyRequestCount = 0;

  get isLoading(): boolean {
    return this.loading;
  }

  set isLoading(value: boolean) {
    this.loading = value;
    this.loadingStatus.next(value);
  }

  public startLoading(): void {
    this.busyRequestCount++;
    this.loading = true;
  }

  public stopLoading(): void {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) this.loading = false;
  }
}
