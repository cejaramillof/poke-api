import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpEvent
} from '@angular/common/http';
import { delay, finalize } from 'rxjs/operators';
import { SpinnerService } from '@core/services/spinner.service';
import { Observable } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.startLoading();

    return next.handle(request).pipe(
      delay(1000),
      finalize(() => {
        this.spinnerService.stopLoading();
      })
    );
  }
}

export const LoadingInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoadingInterceptor,
  multi: true
};
