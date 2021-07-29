import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(
    private modalService: NzModalService
  ) {
  }
  async confirm(): Promise<boolean> {
    this.modalService.confirm({
      nzTitle: 'Confirm',
      nzContent: 'Bla bla ...',
      nzOkText: 'OK',
      nzCancelText: 'Cancel'
    });
    return true;
  }
}
