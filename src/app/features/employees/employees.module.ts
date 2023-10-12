import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './presentation/employees.component';
import { ComponentsModule } from 'src/app/core/components/components.module';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeesNewComponent } from './components/employee-new/employee-new.component';
import { DepartmentInfoComponent } from './components/department-info/department-info.component';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';



@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesListComponent,
    EmployeesNewComponent,
    DepartmentInfoComponent,
    MenuComponent,
    MenuItemComponent
  ],
  exports: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterOutlet
  ]
})
export class EmployeesModule { }
