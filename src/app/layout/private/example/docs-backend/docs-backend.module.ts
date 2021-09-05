import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsBackendComponent } from './docs-backend.component';
import { DocsBackendRoutes } from './docs-backend.routing';

@NgModule({
  imports: [
    CommonModule,
    DocsBackendRoutes,
  ],
  declarations: [DocsBackendComponent]
})
export class DocsBackendModule { }
