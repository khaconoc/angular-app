import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ValidatorExtension } from '../../../../_base/extentions/validator-extension';
import { MessageService } from '../../../../_base/services/message.service';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  myForm: FormGroup;
  stringLog: string;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      colText: [null, [
        ValidatorExtension.required()
      ]],
      colNumber: [null, [
        ValidatorExtension.required()
      ]],
      colArray: this.fb.array([])
    });
  }

  get colArrayInForm(): FormArray {
    return this.myForm.get('colArray') as FormArray;
  }

  addRowInColArray(): void {
    const rowItem = this.fb.group({
      colId: [null, [
        ValidatorExtension.required()
      ]],
      colName: [null, [
        ValidatorExtension.required()
      ]],
      colSelect: [null, [
        ValidatorExtension.required()
      ]],
    });

    this.colArrayInForm.push(rowItem);
  }

  removeRowInColArray(index: number): void {
    this.colArrayInForm.removeAt(index);
  }

  onSubmit(): void {
    this.myForm.markAllAsDirty();
    if (this.myForm.invalid) {
      this.messageService.notiMessageWarning('Vui lòng điền đầy đủ');
      return;
    }
    this.stringLog = this.myForm.getRawValue();
  }

  onPatchValue(): void {
    const defaultValue = {
      // colText: 'Day la text',
      colNumber: 123,
      colArray: [
        { colId: 1, colName: 'day la colName 1', colSelect: 1 },
        { colId: 2, colName: 'day la colName 2', colSelect: 2 },
      ]
    };

    defaultValue.colArray.forEach(e => {
      this.addRowInColArray();
    });

    this.myForm.patchValue(defaultValue);
  }
}

