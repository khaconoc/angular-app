import { Injectable, EventEmitter } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private listDialog: DialogModal<any>[] = [];

  constructor(
    private modalService: NzModalService
  ) {
  }
  async confirm(): Promise<boolean> {
    // this.modalService.confirm({
    //   nzTitle: 'Confirm',
    //   nzContent: 'Bla bla ...',
    //   nzOkText: 'OK',
    //   nzCancelText: 'Cancel'
    // });
    // return true;
    return new Promise<boolean>((resolve, reject) => {
      this.modalService.confirm({
        nzTitle: 'title',
        nzContent: 'content',
        nzOnOk: () => resolve(true),
        nzOnCancel: () => resolve(false)
      });
    });
  }

  public error(title: string, content: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.modalService.error({
        nzTitle: title,
        nzContent: content,
        nzOnOk: () => resolve(true)
      });
    });
  }

  public openDialog(options: (options: DialogConfigModal) => void, onEmitEvent: (eventName: string, eventValue: any) => void = null): any {
    const modalConfig: DialogConfigModal = {
      size: DialogSize.medium,
      component: null,
      inputs: {},
      title: ''
    };
    if (options) {
      options(modalConfig);
    }

    // create dialog
    const modal: NzModalRef<any> = this.modalService.create({
      nzTitle: modalConfig.title,
      nzContent: modalConfig.component,
      nzComponentParams: modalConfig.inputs,
      nzClosable: false,
      nzFooter: null,
      nzClassName: modalConfig.size
    });

    // create dialog data
    const guidId = Date.now();
    const dialogData = { id: guidId, dialog: modal };
    this.listDialog.push(dialogData);
    // subscribe Event
    if (onEmitEvent) {
      for (const keyName in modal.componentInstance) {
        if (modal.componentInstance[keyName] instanceof EventEmitter) {
          modal.componentInstance[keyName].subscribe((value: any) => {
            onEmitEvent(keyName, value);
          });
        }
      }
    }
    return dialogData;
  }

  closeDialogById(id: number): void {
    const index = this.listDialog.findIndex(x => x.id === id);
    if (index !== -1) {
      this.listDialog[index].dialog.destroy();
      this.listDialog.splice(index, 1);
    }
  }

  closeDialog(component: any): void {
    const index = this.listDialog.findIndex(x => x.dialog.getContentComponent() === component);
    if (index !== -1) {
      this.listDialog[index].dialog.destroy();
      this.listDialog.splice(index, 1);
    }
  }

  closeAllDialog(): void {
    for (const dialog of this.listDialog) {
      dialog.dialog.destroy();
    }
    this.listDialog = [];
  }
}

export interface DialogModal<T> {
  id: number;
  dialog: NzModalRef<T>;
}

export interface DialogConfigModal {
  title: string;
  size: string;
  component: any;
  inputs: any;
}

export enum DialogSize {
  small = 'dialog-ms',
  medium = 'dialog-md',
  large = 'dialog-lg',
  xlarge = 'dialog-max-lg',
  full = 'dialog-full'
}

export enum DialogMode {
  view = 'view',
  add = 'add',
  edit = 'edit',
  apply = 'apply',
  confirm = 'dialog-full',
  next = 'next',
  accept = 'accept',
  cancel = 'cancel',
  delete = 'delete',
  destroy = 'destroy',
  print = 'print',
  download = 'download'
}

