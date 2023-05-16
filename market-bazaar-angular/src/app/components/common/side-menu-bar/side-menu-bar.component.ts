import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu-bar',
  templateUrl: './side-menu-bar.component.html',
  styleUrls: ['./side-menu-bar.component.css']
})
export class SideMenuBarComponent {

  @Input() routerParameter="";
  @Input() label = "";
  @Input() activeLink =""



}
