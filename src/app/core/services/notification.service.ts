import { EventEmitter, Injectable } from '@angular/core';
import { NotificationData} from '@core/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public notification = new EventEmitter<NotificationData>()

  public notify(messageData: NotificationData) {
    this.notification.emit(messageData);
  }
}
