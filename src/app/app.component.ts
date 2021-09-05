import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from './_share/templates/menu/menu.component';
import { Router } from '@angular/router';
import { UserService } from './_share/services/user.service';

interface IMenu {
  id: number;
  name: string;
  url: string;
  parentId: number | null;
  children?: IMenu[];
  level?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isCollapsed = false;

  @ViewChild('appMenu') appMenu: MenuComponent;

  constructor(
    private router: Router,
    public userService: UserService
  ) {
  }

  listFlatMenu: IMenu[] = [
    { id: 1, name: 'Dashboard', url: '/dashboard', parentId: null, },
    { id: 2, name: 'Example', url: '/example', parentId: null, },
    { id: 3, name: 'Form basic', url: '/example/form-basic', parentId: 2, },
    { id: 4, name: 'Example Control', url: '/thiet-lap/example-control', parentId: 3, },
    { id: 5, name: 'Form Array', url: '/example/form-basic/example-array', parentId: 3, },
    { id: 6, name: 'Icon', url: '/example/icon', parentId: 2, },
  ];

  ngOnInit(): void {
    const nest = (items, id = null, link = 'parentId', level = 1) =>
      items
        .filter(item => item[link] === id)
        .map(item => ({ ...item, level, children: nest(items, item.id, 'parentId', level + 1) }));

    this.listFlatMenu = nest(this.listFlatMenu);

    console.log('tree menu', this.listFlatMenu);
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  onLogout(): void {
    localStorage.removeItem('token');
    this.userService.currentUser = null;
    this.router.navigate(['/public/login'], { queryParams: { redirect: this.router.url }, replaceUrl: true });
  }
}
