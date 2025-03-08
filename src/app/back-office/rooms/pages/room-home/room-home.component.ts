import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-home',
  standalone: true,
  imports: [],
  templateUrl: './room-home.component.html',
  styleUrl: './room-home.component.scss',
})
export class RoomHomeComponent {
  constructor(private router: Router) {}

  goToPage(path: string) {
    this.router.navigate(['rooms', path]);
  }
}
