import { Component } from '@angular/core';
import { LogoService } from '../../../../shared/services/logo.service';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  // Logo URL (initially set by the service)
  logoUrl: string = '';

  constructor(private logoService: LogoService) {
    // Subscribe to logo changes from the service
    this.logoService.currentLogo$.subscribe((logo) => {
      this.logoUrl = logo;
    });
  }

  // Method to handle logo file change
  onLogoChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const newLogoUrl = e.target.result; // Get the new logo's data URL
        this.logoService.updateLogo(newLogoUrl); // Update the logo in the service
      };
      reader.readAsDataURL(file);
    }
  }

  // Method to restore the logo to the default one
  restoreLogo(): void {
    this.logoService.restoreDefaultLogo(); // Call the restore method in the service
  }
}
