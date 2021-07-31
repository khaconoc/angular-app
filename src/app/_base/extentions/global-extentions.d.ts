import { ErrorsModel } from '../models/response-model';

declare global {
  interface String {
    convertToISOTime(this: string): string;
    convertToDate(this: string): Date;
    convertYYYYMMDDToDate(this: string): Date;
    toDateYYYYMMDD(this: string): string;
    toUnSign(this: string, toUper: boolean): string;
  }
  //
  // interface Date {
  //   toDateYYYYMMDD(this: Date): string;
  // }
  //
  // interface Array<T> {
  //   getMapingCombobox(this: Array<T>, keys: string, keyMap: string, apiService: any, apiActionName: string): Promise<Array<T>>
  // }
}

declare module '@angular/forms' {
  interface FormGroup {
    bindError(this: FormGroup, errors: ErrorsModel): string;
    textTrim(this: FormGroup): void;
    // resetMulti(this: FormGroup, listControl: string[]): void;
    // disableMulti(this: FormGroup, listControl: string[]): void;
    // enableMulti(this: FormGroup, listControl: string[]): void;
  }
  interface AbstractControl {
    markAllAsDirty(this: AbstractControl): void;
  }
}

export {};
