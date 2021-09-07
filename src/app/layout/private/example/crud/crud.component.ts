import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PagingModel } from '../../../../_base/models/response-model';
import { ExampleCrudService } from '../../../../_share/services/example/example-crud-service.service';
import { TableConfigModel } from '../../../../_base/models/table-config-model';
import { DialogMode, DialogService, DialogSize } from '../../../../_base/services/dialog.service';
import { CrudDialogComponent } from './crud-dialog/crud-dialog.component';
import { MessageService } from '../../../../_base/services/message.service';
import { ExampleCategoryService } from '../../../../_share/services/example/example-category-service.service';

interface IExample {
  id: number;
  colText: string;
  colNumber: number;
  colDate: string;
  colBool: boolean;
  colFloat: number;
  colIdCategory: number;
  colBegin: number;
  colEnd: number;
  colFile: string;
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  formSearch: FormGroup;
  listOfData: IExample[] = [];
  isLoading = false;

  public tableConfig: TableConfigModel = new TableConfigModel({
    keyId: 'id',
    isAllChecked: false,
    indeterminate: false,
    itemSelected: new Set<any>()
  });

  public paging: PagingModel = {
    count: 0,
  };

  constructor(
    private fb: FormBuilder,
    private exampleCrudService: ExampleCrudService,
    private exampleCategoryService: ExampleCategoryService,
    private dialogService: DialogService,
    private messageService: MessageService,
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.formSearch = this.fb.group({
      id: [null],
      fullName: [null],
    });
    await this.getData();
  }

  async getData(paging: PagingModel = {page: 1, size: 10}): Promise<void> {
    const params = {
      page: paging.page,
      size: paging.size
    };
    this.isLoading = true;
    const rs = await this.exampleCrudService.get<any>(params, 'GetPaging');

    const tempData = [
      {colIdCategory: 1, ids: [1, 2]},
      {colIdCategory: 3, ids: [3, 4, 5]},
      {colIdCategory: 4, ids: [1, 2]},
      {colIdCategory: 1, ids: [3, 2]},
    ];

    await this.exampleCategoryService.getCombobox({page: 1, size: 100, valueSearch: [1, 3, 4]});

    let dataDraw = await tempData.getMappingCombobox('colIdCategory', 'NameCategory', this.exampleCategoryService, 'getCombobox');
    dataDraw = await tempData.getMappingCombobox('ids', 'idsName', this.exampleCategoryService, 'getCombobox');
    console.log('dataDraw', dataDraw);

    if (rs.ok) {
      console.log(rs);
      this.listOfData = rs.result.data;
      this.paging = {
        ...this.paging,
        size: paging.size,
        page: paging.page,
        count: rs.result.paging.count
      };
      console.log(this.paging);
    }
    this.isLoading = false;
  }

  show(id: number): void {
    const dialog = this.dialogService.openDialog(options => {
      options.title = 'Example show';
      options.size = DialogSize.full;
      options.component = CrudDialogComponent;
      options.inputs = {
        id,
        mode: DialogMode.view
      };
    }, (eventName, eventValue) => {
      if (eventName === 'onClose') {
        if (eventValue) {
          this.getData();
        }
        this.dialogService.closeDialogById(dialog.id);
      }
    });
  }

  edit(id: any): void {

  }

  async delete(ids: any[]): Promise<void> {
    this.dialogService.confirmWithCallBack(options => {
      options.content = 'Xóa dữ liệu';
      options.type = 'danger';
    }, async () => {
      const paramsDelete = {
        id: ids
      };
      const rsDelete = await this.exampleCrudService.post(paramsDelete, 'Delete');
      if (rsDelete.ok) {
        this.messageService.showMessageSuccess('Xóa thành công');
        this.getData();
      } else {
        this.messageService.notiMessageError(rsDelete.error);
      }
    });
  }

  async addDataDialog(): Promise<void> {
    const dialog = this.dialogService.openDialog(options => {
      options.title = 'Example add';
      options.size = DialogSize.full;
      options.component = CrudDialogComponent;
      options.inputs = {};
    }, (eventName, eventValue) => {
      if (eventName === 'onClose') {
        this.dialogService.closeDialogById(dialog.id);
      }
    });
  }

  async editBtn(): Promise<void> {

  }
}
