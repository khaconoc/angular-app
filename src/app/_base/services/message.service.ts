import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(
    private notification: NzNotificationService
  ) { }

  public showMessageSuccess(title: string = '', message: string = ''): void {
    this.notification
      .blank(
        title,
        message,
        { nzDuration: 3000 }
      )
      .onClick.subscribe(() => {
      console.log('notification clicked!');
    });
  }
}
