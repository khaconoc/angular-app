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
          const errorValue = {error: errors[key][0]};
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

FormGroup.prototype.disableMulti = function(this: FormGroup, listControl: string[]): void {
  for (const key of listControl) {
    this.get(key).disable();
  }
};

// tslint:disable-next-line: typedef
FormGroup.prototype.enableMulti = function(this: FormGroup, listControl: string[]): void {
  for (const key of listControl) {
    this.get(key).enable();
  }
};

FormGroup.prototype.disableIgnore = function(this: FormGroup, listControl: string[]): void {
  for (const controlName in this.controls) {
    if (!listControl.includes(controlName)) {
      this.get(controlName).disable();
    }
  }
};

FormGroup.prototype.enableIgnore = function(this: FormGroup, listControl: string[]): void {
  for (const controlName in this.controls) {
    if (!listControl.includes(controlName)) {
      this.get(controlName).enable();
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
  if (toUper) {
    str = str.toUpperCase();
  }
  return str;
};

Array.prototype.getMappingCombobox =
  // tslint:disable-next-line: only-arrow-functions
  async function <T>(this: Array<T>, keys: string, keyMap: string, apiService: any, apiActionName: string): Promise<Array<T>> {

    return new Promise(async (resolve) => {

      // neu khong ton lai list hoac list rong thi tra ve chinh no
      if (!this || this.length === 0) {
        return resolve(this);
      }

      // goi service combobox voi param {page, size, valueSearch}
      const getApiCombobox = (param: any): Promise<any> => {
        if (!apiActionName) {
          apiActionName = 'getCombobox';
        }
        return apiService[apiActionName](param);
      };

      // lay value nam o key cua nhieu level
      const getValueFromObjectByKeyMultipleLevel = (obj: any, multipleKey: string): any => {
        const arr = multipleKey.split('.');
        // clone object để không dính preference
        let temp = {
          ...obj
        };
        // lấy dữ liệu từ các cấp key
        try {
          arr.map((key) => {
            temp = temp[key];
          });
        } catch (e) { // nếu không get được value thì return null
          return null;
        }

        return temp;
      };

      // isArray: truong hop id la mang [{key: [1,2,...]} tap hom nhieu value
      let isArray = false;

      // gom value search vao 1 danh sach
      let valueSearchParam: any[] = [];

      valueSearchParam =
        // lấy danh sách value
        this.filter(x => getValueFromObjectByKeyMultipleLevel(x, keys))
          // bbb
          .map(x => {
            const valueByKey = getValueFromObjectByKeyMultipleLevel(x, keys);
            if (valueByKey instanceof Array) {
              isArray = true;
            }
            return valueByKey;
          });

      // nếu id là mang [1,2,3,...]
      if (isArray) {
        const valueSearchParamNew = [];
        for (const item of valueSearchParam) {
          for (const v of item) {
            valueSearchParamNew.push(v);
          }
        }
        valueSearchParam = valueSearchParamNew;
      }

      // @ts-ignore
      // valueSearchParam = valueSearchParam.flat();

      // loại bỏ nhung value trung nhau
      valueSearchParam = [...new Set(valueSearchParam)];

      const params = {page: 1, size: 500, valueSearch: valueSearchParam};
      const rs = await getApiCombobox(params);
      if (rs.ok) {
        for (const item of this) {
          const objectItem = getValueFromObjectByKeyMultipleLevel(item, keys);
          if (isArray) {
            const listValueMap = [];
            for (const objectValue of objectItem) {
              const mapData = rs.result.data.find(x => JSON.stringify(x.value) === JSON.stringify(objectValue));
              if (mapData) {
                listValueMap.push(mapData.text);
              }
            }
            item[keyMap] = listValueMap;
          } else {
            const mapData = rs.result.data.find(x => JSON.stringify(x.value) === JSON.stringify(objectItem));
            if (mapData) {
              item[keyMap] = mapData.text;
            }
          }
        }
      }

      return resolve(this);
    });
  };

export {};
