import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';
import { MenuComponent } from "../menu/menu.component";
import { MENU_ITEMS } from '../menu/menu.constants';
import { LogoService } from '../../services/logo.service';
interface IMenu {
  menId: number;
  menPath: string;
  menTitle: string;
  menIconType: string;
  type: "link" | "sub";
  childrens?: {
    menId: number;
    menPath: string;
    menTitle: string;
  }[];
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, MenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  menuState: { [key: string]: boolean } = {};
  menuIconName = 'panel-right-close';
  menuItems: IMenu[] = MENU_ITEMS;
  logoUrl: string = '';

  constructor(private _router: Router, private logoService: LogoService) {
    // Subscribe to logo changes
    this.logoService.currentLogo$.subscribe((logo) => {
      this.logoUrl = logo;
    });
  }
  ngOnInit(): void {}

  onViewCompte() {
    this._router.navigate(['/settings/accounts']);
  }
}
