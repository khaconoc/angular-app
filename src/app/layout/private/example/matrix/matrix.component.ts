import { Component, OnInit } from '@angular/core';
import { TableConfigModel } from '../../../../_base/models/table-config-model';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {

  listOfData: any[] = [
    {name: 'dashboard', },
    {name: 'crud', },
    {name: 'example', },
    {name: 'example', },
    {name: 'example', },
    {name: 'example', },
    {name: 'example', },
    {name: 'example', },
  ];
  listTask = [
    { id: 1, name: 'Xem'},
    { id: 2, name: 'Sửa'},
    { id: 3, name: 'Xóa'},
    { id: 4, name: 'Thêm mới'},
    { id: 5, name: 'Phân quyền'},
    { id: 6, name: 'Thiết lập'},
    { id: 7, name: 'Tra cứu'},
    { id: 8, name: 'logword'},
    { id: 9, name: 'Đánh boss'},
    { id: 10, name: 'Treo ải'},
  ];
  public tableConfig: TableConfigModel = new TableConfigModel({
    keyId: 'id',
    isAllChecked: false,
    indeterminate: false,
    itemSelected: new Set<any>()
  });
  // public tableTreeConfig: TableTreeConfigModel = new TableTreeConfigModel({
  //   keyId: 'id',
  //   keyParentId: 'parentId',
  //   collapseDefault: true,
  //   mapOfExpandedData: {}
  // });
  isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {

  }
}
