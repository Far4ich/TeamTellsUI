import { Component, Input } from '@angular/core';
import { IMenuItem } from 'src/app/core/interfaces/imenu-item';

@Component({
  selector: 'app-core-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  isCurrentPage: boolean = false;
  @Input() params: IMenuItem = 
  {
    icon: "",
    text: "menu item"
  };
}
