import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InputPageComponent} from './input-page/input-page.component';

const routes: Routes = [
  {path: '', component: InputPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputPageRoutingModule {
}
