// import { FileApi, FileCloudFindOneQuery } from './../../../_shared/bccp-api.services';
import { InputFileModel } from './input-file.model';
import { Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd';
import { environment } from 'src/environments/environment';
import { FileService } from '../../../_share/services/file-service.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFileComponent),
      multi: true,
    }
  ]
})
export class InputFileComponent implements OnInit, ControlValueAccessor {

  @Input() className: any = '';
  @Input() placeholder: any = 'Chọn file';
  @Input() disabled = false;
  @Input() hidden = false;
  @Input() size = 8;
  @Input() folder: string;

  // tslint:disable-next-line:no-output-rename
  @Output('onChange') eventOnChange = new EventEmitter<any>();

  public uploading = false;
  public controlValue: NzUploadFile[] = [];
  public showUploadList = {
    showDownloadIcon: true,
    showPreviewIcon: true,
    showRemoveIcon: !this.disabled,
  };
  eventBaseChange = (_: any) => {
  }
  eventBaseTouched = () => {
  }

  constructor(private fileApi: FileService) {
  }

  ngOnInit(): void {
  }

  beforeUpload = async (file: NzUploadFile): Promise<boolean> => {
    const rs = await this.fileApi.upload<any[]>([{fileName: file.name, data: file}], this.folder);

    if (rs.ok) {
      for (const item of rs.result) {
        this.controlValue =
          this.controlValue.concat({
            uid: item.fileNumber,
            name: item.fileName,
            status: 'done',
            size: item.fileSize,
            url: this.getPathUrl(item.fileUrl)
          });
      }
      this.eventBaseChange(this.getControlValue());
      this.eventOnChange.emit(this.getControlValue());
    }
    return false;
  }

  changeFile(): void {
    this.eventBaseChange(this.getControlValue());
    this.eventOnChange.emit(this.getControlValue());
  }

  async writeValue(obj: any): Promise<void> {
    if (obj) {
      if (typeof (obj) === 'string') {
        this.controlValue = JSON.parse(obj).map(item => {
          return {
            uid: item.fileNumber,
            name: item.fileName,
            status: 'done',
            size: item.fileSize,
            url: this.setPathUrl(item.fileUrl)
          };
        });
      } else if (obj instanceof Array) {
        this.controlValue = obj.map(item => {
          return {
            uid: item.fileNumber,
            name: item.fileName,
            status: 'done',
            size: item.fileSize,
            url: this.setPathUrl(item.fileUrl)
          };
        });
        this.eventBaseChange(this.getControlValue());
      }
    }
  }

  registerOnChange(fn: any): void {
    this.eventBaseChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.eventBaseTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.showUploadList.showRemoveIcon = !isDisabled;
  }

  getControlValue(): string {
    const result = this.controlValue.filter(x => x.status === 'done').map(x => {
      return {
        fileNumber: x.uid,
        fileName: x.name,
        fileSize: x.size,
        fileExtension: x.name.substring(x.name.lastIndexOf('.')),
        fileUrl: x.url
      };
    });
    return JSON.stringify(result);
  }

  setPathUrl(url: string): string {
    return `${environment.path}${url}`;
  }

  getPathUrl(url: string): string {
    return url.replace(environment.path, '');
  }
}
