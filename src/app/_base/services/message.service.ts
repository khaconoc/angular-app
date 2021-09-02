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

  public showMessageSuccess(message: string = '', title: string = 'Thông báo', ): void {
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

  public notiMessageError(content: any): void {
    if (typeof content === 'string') {
      this.message.error(content);
    } else if (content instanceof Array){
      const lstMessageAlert: string[] = [];
      for (const key of content) {
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < content[key].length; index++) {
          const value = content[key][index];
          lstMessageAlert.push(value);
        }
      }
      this.message.error(lstMessageAlert.join('/n'));
    } else if (content instanceof Object){
      const lstMessageAlert: string[] = [];
      for (const key in content) {
        // tslint:disable-next-line: prefer-for-of
        if (content.hasOwnProperty(key)) {
          // for (let index = 0; index < content[key].length; index++) {
            for (const err of content[key]) {
              lstMessageAlert.push(err);
          }
        }
      }
      this.message.error(lstMessageAlert.join('/n'));
    }
  }

  public notiMessageWarning(content: string): void {
    this.message.warning(content);
  }
}
