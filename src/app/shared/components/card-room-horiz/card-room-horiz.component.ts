import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StatusDirective } from '../../../core/directives/statut.directive';

@Component({
  selector: 'app-card-room-horiz',
  standalone: true,
  imports: [CommonModule, StatusDirective],
  templateUrl: './card-room-horiz.component.html',
  styleUrl: './card-room-horiz.component.scss',
})
export class CardRoomHorizComponent {
  @Input() data!: any;

  @Output() callback = new EventEmitter<void>();

  onCardClick() {
    this.callback.emit();
  }
}
