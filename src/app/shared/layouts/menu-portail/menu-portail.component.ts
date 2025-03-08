import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-portail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-portail.component.html',
  styleUrl: './menu-portail.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MenuPortailComponent implements OnInit {
  @Input() isDark: boolean = false;
  isScrolled: boolean = false;

  logoWhite = 'assets/images/logo-app-white.svg';
  logoDark = 'assets/images/logo-app-black.svg';

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const menuBtn = document.getElementById('menu-btn');
      const navLinks = document.getElementById('nav-links');
      const menuBtnIcon = menuBtn!.querySelector('i');

      menuBtn!.addEventListener('click', () => {
        if (!navLinks || !menuBtnIcon) {
          console.error('Menu button or navigation links not found');
          return;
        }

        // Toggle the 'open' class for navigation links
        navLinks.classList.toggle('open');

        // Toggle the icon text between 'menu' and 'close'
        const isOpen = navLinks.classList.contains('open');
        menuBtnIcon.textContent = isOpen ? 'close' : 'menu';
      });

      navLinks!.addEventListener('click', () => {
        navLinks!.classList.remove('open');
        menuBtnIcon!.setAttribute('class', 'menu');
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    // Set the scroll threshold, e.g., 100px
    if (scrollPosition > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
