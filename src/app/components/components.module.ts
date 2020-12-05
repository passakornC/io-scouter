import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input/input.component';
import {HeaderComponent} from './header/header.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule} from '@angular/forms';
import { OutputComponent } from './output/output.component';
import {ChartModule} from 'primeng/chart';


@NgModule({
  declarations: [
    InputComponent,
    HeaderComponent,
    OutputComponent
  ],
  exports: [
    InputComponent,
    HeaderComponent,
    OutputComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    ChartModule
  ]
})
export class ComponentsModule {
}
