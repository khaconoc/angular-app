import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {ExampleControlComponent} from "./example-control.component";

const routes: Routes = [
  {path: '', component: ExampleControlComponent}
]

export const ExampleControlRouting = RouterModule.forChild(routes);
