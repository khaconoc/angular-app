import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import {PageNotFoundRouters} from './page-not-found.routing';
import { NzResultModule } from 'ng-zorro-antd/result';




@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    PageNotFoundRouters,
    NzResultModule
  ]
})
export class PageNotFoundModule { }
