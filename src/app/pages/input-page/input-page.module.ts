import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InputPageRoutingModule} from './input-page-routing.module';
import {InputPageComponent} from './input-page/input-page.component';
import {CardModule} from 'primeng/card';
import {PagesModule} from '../pages.module';
import {ComponentsModule} from '../../components/components.module';


@NgModule({
  declarations: [
    InputPageComponent
  ],
  imports: [
    CommonModule,
    InputPageRoutingModule,
    CardModule,
    PagesModule,
    ComponentsModule
  ]
})
export class InputPageModule {
}
