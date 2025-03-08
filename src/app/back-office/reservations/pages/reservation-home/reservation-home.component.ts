import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-home',
  standalone: true,
  imports: [],
  templateUrl: './reservation-home.component.html',
  styleUrl: './reservation-home.component.scss',
})
export class ReservationHomeComponent {
  constructor(private router: Router) {}

  goToPage(path: string) {
    this.router.navigate(['reservations', path]);
  }
}
