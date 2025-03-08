import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ThemeService } from '../../../shared/services/theme.service';
import { FormsModule } from '@angular/forms';
import { InfosPersComponent } from "../components/infos-pers/infos-pers.component";
import { LogoComponent } from "../components/logo/logo.component";
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-mon-compte',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    FormsModule,
    InfosPersComponent,
    LogoComponent
  ],
  templateUrl: './mon-compte.component.html',
  styleUrl: './mon-compte.component.scss',
})
export class MonCompteComponent implements OnInit {
  activeTabIndex = 0; // Default to first tab
  // Default colors
  defaultPrimaryColor: string = '#333333'; // Default primary color
  defaultSecondaryColor: string = '#053C5E'; // Default secondary color (Columbia blue)

  primaryColor: string = this.defaultPrimaryColor;
  secondaryColor: string = this.defaultSecondaryColor;

  @ViewChild('formDialog') formDialog!: TemplateRef<any>;

  tabsConfig = [
    { title: 'Informations personnelles' },
    { title: 'Abonnements' },
    { title: 'Logo' },
    { title: 'Fiche de renseignement' },
  ];

  constructor(
    private location: Location,
    public dialog: NgbModal,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.initColor();
  }

  initColor() {
    // Load saved colors from localStorage or apply defaults
    const savedPrimaryColor = localStorage.getItem('primaryColor');
    const savedSecondaryColor = localStorage.getItem('secondaryColor');

    if (savedPrimaryColor) {
      this.primaryColor = savedPrimaryColor;
    }

    if (savedSecondaryColor) {
      this.secondaryColor = savedSecondaryColor;
    }
  }

  hide = true;
  hideConfirmPassword = true;

  onUpdateInfos() {
    Swal.fire({
      icon: 'success',
      html: 'Informations modifiées avec succès.',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  onUpdatePassword() {
    Swal.fire({
      html: 'Votre mot de passe a été changé avec succès.',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      this.onCloseDialog();
    });
  }

  openModal(): void {
    this.dialog.open(this.formDialog, {
      size: '600px',
    });
  }

  onCloseDialog() {
    this.dialog.dismissAll();
  }

  onReset() {
    this.location.back();
  }

  onPrimaryColorChange(event: any) {
    this.primaryColor = event.target.value;
  }

  onSecondaryColorChange(event: any) {
    this.secondaryColor = event.target.value;
  }

  applyColors() {
    this.themeService.changePrimaryColor(this.primaryColor);
    this.themeService.changeSecondaryColor(this.secondaryColor);
  }

  restoreDefaultColors() {
    // Restore default colors
    this.primaryColor = this.defaultPrimaryColor;
    this.secondaryColor = this.defaultSecondaryColor;
    this.applyColors(); // Apply the default colors
  }

  // Handle tab change
  onTabChange(event: number) {
    this.activeTabIndex = event;
  }

  // Get the current tab title
  getTabTitle(): string {
    return this.tabsConfig[this.activeTabIndex].title;
  }
}
