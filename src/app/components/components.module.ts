import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input/input.component';
import {HeaderComponent} from './header/header.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    InputComponent,
    HeaderComponent,
  ],
  exports: [
    InputComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule {
}
