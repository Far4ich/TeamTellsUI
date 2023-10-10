import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { InputFieldComponent } from './input-field/input-field.component';

@NgModule({
  declarations: [
    CardComponent,
    InputFieldComponent,
  ],
  exports: [
    CardComponent,
    InputFieldComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }
