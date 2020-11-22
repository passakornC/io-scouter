import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InputPageRoutingModule} from './input-page-routing.module';
import {InputPageComponent} from './input-page/input-page.component';


@NgModule({
  declarations: [
    InputPageComponent
  ],
  imports: [
    CommonModule,
    InputPageRoutingModule
  ]
})
export class InputPageModule {
}
