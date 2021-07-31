import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(
    private notification: NzNotificationService,
    private message: NzMessageService
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

  public notiMessageSuccess(content: string): void {
    this.message.success(content);
  }

  public notiMessageError(content: string): void {
    if (content) {
      this.message.error(content);
    }
  }

  public notiMessageWarning(content: string): void {
    this.message.warning(content);
  }
}
