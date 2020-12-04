import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input/input.component';
import {HeaderComponent} from './header/header.component';


@NgModule({
  declarations: [
    InputComponent,
    HeaderComponent
  ],
  exports: [
    InputComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule {
}
