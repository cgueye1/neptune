import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';


interface IMenu {
  menId: number;
  menPath: string;
  menTitle: string;
  menIconType: string;
  type: 'link' | 'sub';
  childrens?: {
    menId: number;
    menPath: string;
    menTitle: string;
  }[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() menuItems: IMenu[] = [];
  @Input() menuState: { [key: string]: boolean } = {};

  constructor(private router:Router) {}

  isSubMenuActive(menu: IMenu): boolean {
    return (
      menu.childrens?.some((subMenu) =>
        location.pathname.includes(subMenu.menPath)
      ) || false
    );
  }

  toggleSubMenu(menu: IMenu) {
    // If menu is not in the state, initialize it
    if (!this.menuState.hasOwnProperty(menu.menPath)) {
      this.menuState[menu.menPath] = true; // Open by default
    } else {
      this.menuState[menu.menPath] = !this.menuState[menu.menPath]; // Toggle only on parent menu click
    }
  }

  closeMenuIfNotSubMenu(event: MouseEvent, menu: IMenu) {
    // Prevent toggling the parent menu if the sub-menu is active or clicked
    event.stopPropagation(); // Ensure that submenu click does not close the collapse
  }

  logOut() {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir vous déconnecter ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Oui, me déconnecter',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/auth/login']);
      }
    });
  }
}
