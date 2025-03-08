import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import { StatusDirective } from '../../../../core/directives/statut.directive';


@Component({
  selector: 'app-salle-reunion-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    RouterLink,
    FullCalendarModule,
    StatusDirective
  ],
  templateUrl: './salle-reunion-list.component.html',
  styleUrl: './salle-reunion-list.component.scss',
})
export class SalleReunionListComponent implements OnInit {
  activeView: 'list' | 'calendar' = 'list'; // Default view
  calendarPlugins = [dayGridPlugin, interactionPlugin];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: this.calendarPlugins,
    slotMinTime: '08:00',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridDay,dayGridWeek,dayGridMonth',
    },
    locale: frLocale,
    events: this.mapEventsWithColors(),
    editable: false,
    eventClick: this.handleEventClick.bind(this),
    eventContent: this.renderEventContent.bind(this), // Use a custom rendering function
  };
  
  handleEventClick(arg: any) {
    console.log(arg.event._def.title, '----');
      this.router.navigate([arg.event._def.title, 'edit'], {
        relativeTo: this.activatedRoute,
      });
  }

  setView(view: any): void {
    this.activeView = view;
  }

  page = 1;
  pageSize = 10;
  collectionSize = DATA.length;
  reservations: any[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    this.reservations = DATA.map((reservation, i) => ({
      id: i + 1,
      ...reservation,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  editSalle(name: string) {
    this.router.navigate([name, 'edit'], {
      relativeTo: this.activatedRoute,
    });
  }

  cancelSalle(dataId: number) {
    Swal.fire({
      title: 'Annulation Réservation',
      text: 'Cette action est irréversible. Êtes-vous sûr de vouloir annuler cette réservation ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmer Annulation!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Annulation Réservation!', 'Réservation annulée', 'success');
      }
    });
  }

  onAdd() {
    this.router.navigate(['salles-de-reunion/create'], {
      relativeTo: this.activatedRoute.parent,
    });
  }

  mapEventsWithColors() {
    return DATA.map((reservation) => {
      let backgroundColor;
      let textColor = '#ffffff'; // Default text color for contrast
      let statusText;

      switch (reservation.status) {
        case 'RESERVED':
          backgroundColor = '#28a745'; // Green for reserved
          statusText = 'Réservé';
          break;
        case 'BUSY':
          backgroundColor = '#dc3545'; // Red for busy
          statusText = 'Occupé';
          break;
        case 'AVAILABLE':
          backgroundColor = '#17a2b8'; // Blue for available
          statusText = 'Disponible';
          break;
        default:
          backgroundColor = '#6c757d'; // Gray for unknown
          textColor = '#ffffff';
          statusText = 'En attente';
          break;
      }

      // Join the services array into a string
      const services = reservation.services
        ? reservation.services.join(', ')
        : 'Aucun service';

      return {
        title: reservation.room, // Set only the room as the title
        date: reservation.date,
        backgroundColor,
        textColor,
        borderColor: backgroundColor,
        extendedProps: {
          statusText,
          services,
        },
      };
    });
  }

  // Function to render custom event content
  renderEventContent(arg: any) {
    const { title, extendedProps } = arg.event;

    const statusText = extendedProps.statusText || '';
    const services = extendedProps.services || '';

    // Generate the list items for the services
    const servicesList = services
      .split(', ')
      .map((service: string) => `<li>${service}</li>`)
      .join('');

    // Create a custom HTML layout for the event
    return {
      html: `
      <div class="fc-event-custom-content">
        <div class="fc-event-title">${title}</div>
        <div class="fc-event-status">${statusText}</div><hr>
        <ul class="fc-event-services">
          ${servicesList}
        </ul>
      </div>
    `,
    };
  }
}

const DATA: any[] = [
  {
    id: 3,
    room: 'Salle A',
    date: '2024-10-25',
    duree: '2h',
    services: ['Catering', 'Matériel audiovisuel'],
    status: 'BUSY',
  },
  {
    reservationId: 2,
    room: 'Salle B',
    date: '2024-10-05',
    duree: '2h',
    services: ['Catering', 'Matériel audiovisuel'],
    status: 'AVAILABLE',
  },
  {
    reservationId: 1,
    room: 'Salle A',
    date: '2024-10-12',
    duree: '2h',
    services: ['Catering', 'Matériel audiovisuel'],
    status: 'RESERVED',
  },
];

