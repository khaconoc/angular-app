import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudDialogComponent } from '../../example/crud/crud-dialog/crud-dialog.component';
import { DialogService, DialogSize } from '../../../../_base/services/dialog.service';
import { AccountCrudDialogComponent } from './account-crud-dialog/account-crud-dialog.component';
import { TableConfigModel } from '../../../../_base/models/table-config-model';
import { AccountService } from '../../../../_share/services/account.service';
import { PagingModel } from '../../../../_base/models/response-model';

interface IUser {
  id: number;
  userName: string;
  password: string;
  fullName: string;
  dob: string;
  avatar: string;
  address: string;
  status: string;
  createAt: string;
}

@Component({
  selector: 'app-account-crud',
  templateUrl: './account-crud.component.html',
  styleUrls: ['./account-crud.component.scss']
})
export class AccountCrudComponent implements OnInit {

  formSearch: FormGroup;
  listOfData: IUser[] = [];
  isLoading = false;
  public paging: PagingModel = {
    count: 0,
  };

  public tableConfig: TableConfigModel = new TableConfigModel({
    keyId: 'id',
    isAllChecked: false,
    indeterminate: false,
    itemSelected: new Set<any>()
  });

  constructor(
    private fb: FormBuilder,
    private dialogService: DialogService,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.formSearch = this.fb.group({
      id: [],
      name: []
    });
    this.getData();
  }

  async getData(paging: PagingModel = {page: 1, size: 10}): Promise<void> {
    this.isLoading = true;
    const rs = await this.accountService.get<any>({
      page: paging.page,
      size: paging.size
    }, 'GetPaging');
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

  async show(id: number): Promise<void> {
    const dialog = this.dialogService.openDialog(options => {
      options.title = 'Tai khoan';
      options.size = DialogSize.full;
      options.component = AccountCrudDialogComponent;
      options.inputs = {
        id,
      };
    }, (eventName, eventValue) => {
      if (eventName === 'onClose') {
        this.dialogService.closeDialogById(dialog.id);
      }
    });
  }

  async addDataDialog(): Promise<void> {
    const dialog = this.dialogService.openDialog(options => {
      options.title = 'Them tai khoan';
      options.size = DialogSize.full;
      options.component = AccountCrudDialogComponent;
      options.inputs = {

      };
    }, (eventName, eventValue) => {
      if (eventName === 'onClose') {
        this.dialogService.closeDialogById(dialog.id);
      }
    });
  }

}
