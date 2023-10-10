import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  onChangeName(name: string) {
    console.log('Твоё имя: ', name)
  }
}
