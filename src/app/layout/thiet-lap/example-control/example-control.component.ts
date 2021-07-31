import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../../_base/services/message.service';
import { DialogMode, DialogService, DialogSize } from '../../../_base/services/dialog.service';
import { UserService } from '../../../_share/services/user.service';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ExampleControlDialogComponent } from './example-control-dialog/example-control-dialog.component';

@Component({
  selector: 'app-example-control',
  templateUrl: './example-control.component.html',
  styleUrls: ['./example-control.component.scss']
})
export class ExampleControlComponent implements OnInit {

  public myForm: FormGroup;
  myFormValueText: string;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private dialogService: DialogService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      fullName: ['full name', []],
      note: ['note', []],
      number: [null, [Validators.required]],
    });
  }

  async submitForm(): Promise<void> {
    this.myForm.markAllAsDirty();
    if (this.myForm.invalid) {
      alert('form invalid');
      console.log(this.myForm);
      return;
    }
    this.myFormValueText = JSON.stringify(this.myForm.getRawValue());
  }

  async onDisable(): Promise<void> {
    this.myForm.disable();
  }

  async onEnable(): Promise<void> {
    this.myForm.enable();
  }

  async onBindError(): Promise<void> {
    console.log('onBindError');
    this.myForm.get('number').setErrors({error: 'Loi ne na' });
    this.myForm.get('number').markAsDirty();
    // this.myForm.get('number').updateValueAndValidity();
    // this.myForm.markAllAsDirty();
    // this.myForm.bindError({
    //   text: ['loi ne']
    // });
    // this.myForm.markAsDirty();
    // this.myForm.updateValueAndValidity();

    console.log(this.myForm);
  }

  async onOpenDialog(): Promise<void> {
    const dialog = this.dialogService.openDialog(option => {
      option.title = 'Sửa thông tin ca';
      option.size = DialogSize.medium;
      option.component = ExampleControlDialogComponent;
      option.inputs = {
        mode: DialogMode.edit
      };
    }, (eventName) => {
      if (eventName === 'onClose') {
        this.dialogService.closeDialogById(dialog.id);
        // this.getData(this.paging);
      }
    });
  }
}

