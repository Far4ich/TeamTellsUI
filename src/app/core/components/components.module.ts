import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MainContentCardComponent } from './main-content-card/main-content-card.component';
import { MenuComponent } from './menu/menu.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import { DepartmentComponent } from './department/department.component';
import { ButtonRedComponent } from './button-red/button-red.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ButtonBackComponent } from './button-back/button-back.component';
import { InputFieldComponent } from './input-field/input-field.component';

@NgModule({
  declarations: [
    CardComponent,
    MainContentCardComponent,
    MenuComponent,
    EmployeeItemComponent,
    DepartmentComponent,
    ButtonRedComponent,
    MenuItemComponent,
    ButtonBackComponent,
    InputFieldComponent,
  ],
  exports: [
    CardComponent,
    MainContentCardComponent,
    MenuComponent,
    EmployeeItemComponent,
    DepartmentComponent,
    ButtonRedComponent,
    ButtonBackComponent,
    InputFieldComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})

export class ComponentsModule { }
