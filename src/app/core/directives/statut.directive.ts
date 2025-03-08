import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appStatus]',
  standalone: true,
})
export class StatusDirective implements OnChanges {
  @Input('appStatus') status: string | boolean = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['status']) {
      this.updateStatus(this.status);
    }
  }

  private updateStatus(status: string | boolean): void {
    const { text, class: className } = this.getStatusDetails(status);


    // Ajouter la classe et le texte correspondant
    this.renderer.addClass(this.el.nativeElement, className);
    this.renderer.setProperty(this.el.nativeElement, 'textContent', text);
  }

  private getStatusDetails(status: string | boolean): {
    text: string;
    class: string;
  } {
    switch (status) {
      case 'CANCELED':
        return { text: 'Annulé', class: 'danger' };
      case 'PAID':
        return { text: 'Payé', class: 'success' };
      case 'DONE':
        return { text: 'Fait', class: 'success' };
      case 'PENDING':
        return { text: 'En attente', class: 'warning' };
      case 'RESOLVED':
        return { text: 'Résolu', class: 'success' };
      case 'NOTDONE':
        return { text: 'Pas fait', class: 'info' };
      case 'INPROGRESS':
        return { text: 'En cours', class: 'light' };
      case 'RESERVED':
        return { text: 'Réservé', class: 'danger' };
      case 'NOTINSPECT':
        return { text: 'Pas inpecté', class: 'danger' };
      case 'SOLD':
        return { text: 'Vendu', class: 'success' };
      case 'AVAILABLE':
        return { text: 'Disponible', class: 'warning' };
      case 'INSPECT':
        return { text: 'Inspecté', class: 'warning' };
      case 'ACTIF':
        return { text: 'Actif', class: 'success' };
      case 'INACTIF':
        return { text: 'Inactif', class: 'danger' };
      case 'SAVED':
        return { text: 'Enregistré', class: 'light' };
      case true:
        return { text: 'Actif', class: 'success' };
      case false:
        return { text: 'Inactif', class: 'danger' };
      default:
        return { text: 'Enregistré', class: 'light' };
    }
  }
}
