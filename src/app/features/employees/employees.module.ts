import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './presentation/employees.component';
import { ComponentsModule } from 'src/app/core/components/components.module';



@NgModule({
  declarations: [
    EmployeesComponent
  ],
  exports: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class EmployeesModule { }
