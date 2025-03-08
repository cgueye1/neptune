import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  hide = true;

  constructor(private router: Router, private spinner: NgxSpinnerService) {}

  onLogin() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.router.navigate(['/dashboard']);
      this.spinner.hide();
    }, 2000);
  }

  onRegister() {
    this.router.navigate(['/auth/register']);
  }

  onForgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }
}
