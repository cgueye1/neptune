import { CommonModule } from "@angular/common";
import { Component, Inject, PLATFORM_ID, Renderer2, ViewEncapsulation } from "@angular/core";
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { MenuComponent } from "../menu/menu.component";
import { IMenu, MENU_ITEMS } from "../menu/menu.constants";

import Swal from "sweetalert2";
import { LogoService } from "../../services/logo.service";
declare var bootstrap: any;

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    SidebarComponent,
    MenuComponent,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent {
  menuState: { [key: string]: boolean } = {};
  menuIconName = 'menu';
  menuItems: IMenu[] = MENU_ITEMS;
  logoUrl: string = 'assets/images/logo-app-black.svg';

  constructor(
    private logoService: LogoService,
    private _router: Router,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Subscribe to logo changes
    // this.logoService.currentLogo$.subscribe((logo) => {
    //   this.logoUrl = logo;
    // });
  }

  ngOnInit(): void {}

  logOut() {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir vous déconnecter ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Oui, me déconnecter',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this._router.navigate(['/auth/login']);
      }
    });
  }

  activeToggle(): void {
    if (window.innerWidth <= 767) {
      const offcanvasElement = document.getElementById('offcanvasSidebar');
      if (offcanvasElement) {
        const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
        bsOffcanvas.toggle();
      }
    } else {
      const $wrapper = document.querySelector('#wrapper');
      const $sidebar = document.querySelector('#sidebar-wrapper');
      if ($wrapper && $sidebar) {
        $wrapper.classList.toggle('toggled');
        $sidebar.classList.toggle('active');

        // Change icon name based on sidebar state
        // this.menuIconName =
        //   this.menuIconName === "panel_right_open"
        //     ? "panel_right_close"
        //     : "panel_right_open";
      }
    }
  }

  onViewCompte() {
    this._router.navigate(['/settings/accounts']);
  }
}
