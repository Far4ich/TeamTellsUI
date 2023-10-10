import { Component } from '@angular/core';
import { IMenuItem } from '../../interfaces/imenu-item';

@Component({
  selector: 'app-core-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public menuItems: IMenuItem[] = [
    {
      text: "Пользователи",
      icon: "../../../../assets/menu-employees.svg"
    },
    {
      text: "Роли",
      icon: "../../../../assets/menu-roles.svg"
    }
  ]
}
