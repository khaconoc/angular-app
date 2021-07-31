import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { ErrorsModel } from '../models/response-model';


AbstractControl.prototype.markAllAsDirty = function(this: AbstractControl): void {
  if (this instanceof FormGroup) {
    const formGroupValue = (this as FormGroup);
    for (const item in formGroupValue.controls) {
      if (formGroupValue.controls.hasOwnProperty(item)) {
        formGroupValue.get(item).markAllAsDirty();
      }
    }
  } else if (this instanceof FormArray) {
    const formArrayValue = (this as FormArray);
    for (let i = 0; i < formArrayValue.length; i++) {
      const formGroupValue = formArrayValue.at(i);
      (formGroupValue as AbstractControl).markAllAsDirty();
    }
  } else if (this instanceof FormControl) {
    this.markAsDirty();
    this.updateValueAndValidity();
  }
};

FormGroup.prototype.bindError = function(this: FormGroup, errors: ErrorsModel): string {
  const getKeyName = (keyName: string, form: FormGroup): any => {
    for (const control in form.controls) {
      if (keyName.toLocaleLowerCase() === control.toLocaleLowerCase()) {
        return control;
      }
    }
  };
  const lstMessageAlert: string[] = [];
  for (const key in errors) {
    if (errors.hasOwnProperty(key)) {
      const controlName = getKeyName(key, this);
      if (controlName != null) {
        if (errors[key].length > 0) {
          const errorValue = { error: errors[key][0] };
          this.get(controlName).setErrors(errorValue);
        }
      } else {
        for (const err of errors[key]) {
          lstMessageAlert.push(err);
        }
      }
    }
  }
  return lstMessageAlert.join('/n');
};

FormGroup.prototype.textTrim = function(this: FormGroup): void {
  for (const i in this.controls) {
    if (typeof this.controls[i].value === 'string') {
      this.controls[i].setValue(this.controls[i].value.trim());
    }
  }
};

String.prototype.toUnSign = function(this: string, toUper: boolean = true): string {
  let str = this;
  const AccentsMap = [
    'aàảãáạăằẳẵắặâầẩẫấậ',
    'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
    'dđ', 'DĐ',
    'eèẻẽéẹêềểễếệ',
    'EÈẺẼÉẸÊỀỂỄẾỆ',
    'iìỉĩíị',
    'IÌỈĨÍỊ',
    'oòỏõóọôồổỗốộơờởỡớợ',
    'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
    'uùủũúụưừửữứự',
    'UÙỦŨÚỤƯỪỬỮỨỰ',
    'yỳỷỹýỵ',
    'YỲỶỸÝỴ'
  ];
  for (const item of AccentsMap) {
    const re = new RegExp('[' + item.substr(1) + ']', 'g');
    const char = item[0];
    str = str.replace(re, char);
  }
  if (toUper){
    str = str.toUpperCase();
  }
  return str;
};

export {};
