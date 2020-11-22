import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InputPageComponent} from './input-page/input-page/input-page.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./input-page/input-page.module').then(m => m.InputPageModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
