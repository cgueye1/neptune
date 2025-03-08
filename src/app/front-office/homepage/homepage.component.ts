import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MenuPortailComponent } from "../../shared/layouts/menu-portail/menu-portail.component";
import { FooterPortailComponent } from "../../shared/layouts/footer-portail/footer-portail.component";
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MenuPortailComponent,
    FooterPortailComponent,
    NgbCarouselModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomepageComponent {
  roomsSuperieure = [
    'assets/images/chambres/room1.avif',
    'assets/images/chambres/room2.avif',
    'assets/images/chambres/room3.avif',
    'assets/images/chambres/room4.avif',
    'assets/images/chambres/room5.avif',
  ];
  roomsSuite = [
    'assets/images/chambres/room8.avif',
    'assets/images/chambres/room9.avif',
    'assets/images/chambres/room10.avif',
  ];
  roomsStandart = [
    'assets/images/chambres/room6.avif',
    'assets/images/chambres/room7.avif',
  ];
  constructor(private router: Router, config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  onViewBien(id: number) {
    this.router.navigate(['/chambres-suites', id, 'detail']);
  }

  onViewAllBiens() {
    this.router.navigate(['/chambres-suites']);
  }

  onSearch() {
    this.router.navigate(['/chambres-suites']);
  }

  onRegister() {
    this.router.navigate(['/auth/register']);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const btnScrollToTop = document.querySelector('#btnScrollToTop');

    if (window.scrollY > 200) {
      btnScrollToTop?.classList.add('show');
    } else {
      btnScrollToTop?.classList.remove('show');
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
