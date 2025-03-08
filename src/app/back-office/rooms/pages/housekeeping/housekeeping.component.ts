import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-housekeeping',
  standalone: true,
  imports: [],
  templateUrl: './housekeeping.component.html',
  styleUrl: './housekeeping.component.scss'
})
export class HousekeepingComponent {

  constructor(private router: Router) { }

  goToPage(path: string) {
    this.router.navigate(['housekeepings', path]);
  }
}
