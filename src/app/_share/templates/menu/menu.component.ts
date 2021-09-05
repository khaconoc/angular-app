import { Component, Input, OnInit } from '@angular/core';

interface IMenu {
  id: number;
  name: string;
  url: string;
  parentId: number | null;
  children?: IMenu[];
  level?: number;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  @Input() isCollapsed: boolean;

  listFlatMenu: IMenu[] = [
    // { id: 1, name: 'Gen Code', url: '/private/gen-code', parentId: null, },
    { id: 1, name: 'Dashboard', url: '/dashboard', parentId: null, },
    // { id: 2, name: 'Example', url: '/example', parentId: null, },
    // { id: 3, name: 'Form basic', url: '/example/form-basic', parentId: 2, },
    // { id: 4, name: 'Example Control', url: '/thiet-lap/example-control', parentId: 3, },
    // { id: 5, name: 'Form Array', url: '/example/form-basic/example-array', parentId: 3, },
    // { id: 6, name: 'Icon', url: '/example/icon', parentId: 2, },
    { id: 2, name: 'Quản lý tài khoản', url: '', parentId: null, },
    { id: 3, name: 'Danh mục tài khoản', url: '/private/account/account-crud', parentId: 2, },
    { id: 4, name: 'Phân quyền tài khoản', url: '/private/account/account-permission', parentId: 2, },
    { id: 10, name: 'Example', url: '', parentId: null, },
    { id: 11, name: 'Crud', url: '/private/example/crud', parentId: 10, },
    { id: 12, name: 'Icon', url: '/private/example/icon', parentId: 10, },
    { id: 13, name: 'Docs Backend', url: '/private/example/docs-backend', parentId: 10, },
  ];

  ngOnInit(): void {
    const nest = (items, id = null, link = 'parentId', level = 1) =>
      items
        .filter(item => item[link] === id)
        .map(item => ({ ...item, level, children: nest(items, item.id, 'parentId', level + 1) }));

    this.listFlatMenu = nest(this.listFlatMenu);

    console.log('tree menu', this.listFlatMenu);
  }

}
