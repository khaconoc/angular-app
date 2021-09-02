import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ExampleCrudService } from '../../../../../_share/services/example/example-crud-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogMode, DialogService } from '../../../../../_base/services/dialog.service';
import { MessageService } from '../../../../../_base/services/message.service';
import { ExampleCategoryService } from 'src/app/_share/services/example/example-category-service.service';

@Component({
  selector: 'app-crud-dialog',
  templateUrl: './crud-dialog.component.html',
  styleUrls: ['./crud-dialog.component.scss']
})
export class CrudDialogComponent implements OnInit {

  @Input() id: number;
  @Input() mode: string;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();

  myForm: FormGroup;
  isLoading = false;
  formOrigin: string;
  isSubmit = false;

  constructor(
    private exampleCrudService: ExampleCrudService,
    public exampleCategoryService: ExampleCategoryService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private fb: FormBuilder,
  ) { }

  async ngOnInit(): Promise<void> {
    this.myForm = this.fb.group({
      colText: [null],
      colNumber: [null],
      colDate: [null],
      colBool: [null],
      colFloat: [null],
      colIdCategory: [null],
      colBegin: [null],
      colEnd: [null],
      colFile: [null],
      colLongText: [null],
      colSelect: [null],
      colSelectMultiple: [null],
      colSelectApi: [null],
      colSelectApiMultiple: [null],
      colTextArea: [null],
      colRadio: [null],
    });

    if (this.mode === DialogMode.view) {
      this.myForm.disable();
    }

    if (this.id) {
      await this.getData(this.id);
    }

    /// save history
    this.formOrigin = JSON.stringify(this.myForm.getRawValue());
  }

  async getData(id: number): Promise<void> {
    const params = {
      id
    };
    this.isLoading = true;
    const rs = await this.exampleCrudService.findOne<any>(params);
    this.isLoading = false;

    if (rs.ok) {
      this.myForm.patchValue(rs.result);
    }
  }

  async save(): Promise<void> {
    this.myForm.markAllAsDirty();
    if (this.myForm.invalid) {
      return ;
    }
    if (!this.id) {
      const formValue = this.myForm.getRawValue();
      const body = {
        ...formValue,
      };
      this.isSubmit = true;
      const rsCreate = await this.exampleCrudService.create(body);
      this.isSubmit = false;

      if (rsCreate.ok) {
        this.messageService.showMessageSuccess('Thêm thành công');
        this.onClose.emit(body);
      } else {
        this.messageService.notiMessageError(this.myForm.bindError(rsCreate.error));
      }
    } else {
      const formValue = this.myForm.getRawValue();
      const body = {
        id: this.id,
        ...formValue,
        colSelectApiMultiple: null
      };

      this.isSubmit = true;
      const rsCreate = await this.exampleCrudService.update(body);
      this.isSubmit = false;

      if (rsCreate.ok) {
        this.messageService.showMessageSuccess('Cập nhật thành công');
        this.onClose.emit(body);
      } else {
        this.messageService.notiMessageError(this.myForm.bindError(rsCreate.error));
      }
    }
  }

  async closeDialog(): Promise<void> {
    if (this.formOrigin !== JSON.stringify(this.myForm.getRawValue())) {
      const confirm = await this.dialogService.confirm('Dữ liệu đã thay đổi, bạn có muốn hủy bỏ');
      if (!confirm) {
        return ;
      }
    }
    this.onClose.emit();
  }

  changeModeToEdit(): void {
    this.mode = DialogMode.edit;
    this.myForm.enableIgnore(['colText']);
  }
}
