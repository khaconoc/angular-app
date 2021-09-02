import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidatorExtension } from '../../../../../_base/extentions/validator-extension';
import { AccountService } from '../../../../../_share/services/account.service';
import { MessageService } from '../../../../../_base/services/message.service';

@Component({
  selector: 'app-account-crud-dialog',
  templateUrl: './account-crud-dialog.component.html',
  styleUrls: ['./account-crud-dialog.component.scss']
})
export class AccountCrudDialogComponent implements OnInit {

  @Input() mode: string;
  @Input() id: number | null;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();

  isSubmit = false;

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private messageService: MessageService
  ) { }

  async ngOnInit(): Promise<void> {
    this.myForm = this.fb.group({
      userName: [null, [
      ]],
      password: [null, [
        ValidatorExtension.required()
      ]],
      fullName: [null, [
        ValidatorExtension.required()
      ]],
      dob: [],
      address: [],
      avatar: []
    });

    if (this.id) {
      await this.findOne(this.id);
    }
  }

  async findOne(id: number): Promise<void> {
    const rs = await this.accountService.get({id}, 'FindOne');
    if (rs.ok) {
      this.myForm.patchValue(rs.result);
    }
  }

  closeDialog(): void {
    this.onClose.emit();
  }

  async save(saveAndNew: boolean = false): Promise<void> {
    this.myForm.markAllAsDirty();
    if (this.myForm.invalid) {
      return;
    }
    const body = this.myForm.getRawValue();
    const rs = await this.accountService.post<string>(body, 'Create');
    if (rs.ok) {
      this.messageService.showMessageSuccess('Thông báo', 'thêm thành công');
      this.onClose.emit();
    } else {
      this.messageService.notiMessageError(this.myForm.bindError(rs.error));
    }
  }
}
