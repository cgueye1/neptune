import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { StatusDirective } from '../../../core/directives/statut.directive';

@Component({
  selector: 'app-card-room-vertical',
  standalone: true,
  imports: [CommonModule, StatusDirective],
  templateUrl: './card-room-vertical.component.html',
  styleUrl: './card-room-vertical.component.scss',
})
export class CardRoomVerticalComponent {
  @Input() data!: any;
  @Input() isActions = true;

  @Output() callback = new EventEmitter<void>();

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  onCardClick() {
    this.callback.emit();
  }

}
