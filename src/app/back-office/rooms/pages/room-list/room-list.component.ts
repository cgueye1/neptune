import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardRoomHorizComponent } from "../../../../shared/components/card-room-horiz/card-room-horiz.component";
import { CardRoomVerticalComponent } from "../../../../shared/components/card-room-vertical/card-room-vertical.component";
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [
    CommonModule,
    CardRoomHorizComponent,
    CardRoomVerticalComponent,
    FullCalendarModule,
  ],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
})
export class RoomListComponent implements OnInit {
  activeView: 'list' | 'grid' | 'calendar' = 'list'; // Default view
  calendarPlugins = [dayGridPlugin, interactionPlugin];
  bienList: any[] = [];
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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getAllBiens();
  }

  handleEventClick(arg: any) {
    console.log(arg.event._def.title, '----');
    this.router.navigate(
      ['/rooms', arg.event._def.title, 'detail-room']
    );
  }

  setView(view: any): void {
    this.activeView = view;
  }

  onCreate() {
    this.router.navigate(['/rooms/create-room']);
  }

  onView(data: any) {
    this.router.navigate(['/rooms', data.id, 'detail-room']);
  }

  getAllBiens() {
    this.bienList = DATA;
  }

  mapEventsWithColors() {
    return DATA.map((room) => {
      let backgroundColor;
      let textColor = '#ffffff'; // Default text color for contrast
      let statusText;

      switch (room.status) {
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

      return {
        title: room.title,
        date: room.date,
        backgroundColor,
        textColor,
        borderColor: backgroundColor,
        extendedProps: {
          statusText
        },
      };
    });
  }

  // Function to render custom event content
  renderEventContent(arg: any) {
    const { title, extendedProps } = arg.event;

    const statusText = extendedProps.statusText || '';

    // Create a custom HTML layout for the event
    return {
      html: `
      <div class="fc-event-custom-content">
        <div class="fc-event-title">${title}</div>
        <div class="fc-event-status">${statusText}</div>
      </div>
    `,
    };
  }
}

const DATA: any[] = [
  {
    id: 'B001',
    title: 'Suite affaires avec vue sur la mer',
    price: '250 000 F CFA',
    location: 'Dakar, Sénégal',
    area: '85m2',
    status: 'RESERVED',
    date: '2024-10-05',
    description:
      'Une chambre de 85 m² avec un lit super King size, toilettes et salle de bain séparées, un vaste salon et un coin salle à manger la rendent très confortable. Repos sur la terrasse privative de 31m² ou dans la baignoire jacuzzi, une suite à vivre selon ses envies.',
    image: 'assets/images/chambres/room1.avif',
  },
  {
    id: 'B002',
    title: 'Villa - Almadies',
    price: '150 000 F CFA',
    location: 'Almadies, Sénégal',
    area: '300m2',
    date: '2024-10-06',
    status: 'BUSY',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    image: 'assets/images/chambres/room2.avif',
  },
  {
    id: 'B003',
    title: 'Appartement F4 - Mermoz',
    price: '85 000 F CFA',
    location: 'Mermoz, Sénégal',
    area: '150m2',
    date: '2024-10-15',
    status: 'AVAILABLE',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    image: 'assets/images/chambres/room3.avif',
  },
  {
    id: 'B004',
    title: 'Terrain - Lac Rose',
    price: '75 000 000 F CFA',
    location: 'Lac Rose, Sénégal',
    area: '500m2',
    date: '2024-10-20',
    status: 'BUSY',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    image: 'assets/images/chambres/room4.avif',
  },
  {
    id: 'B005',
    title: 'Maison - Point E',
    price: '120 000 000 F CFA',
    location: 'Point E, Sénégal',
    area: '250m2',
    date: '2024-10-02',
    status: 'BUSY',
    description:
      'Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc',
    image: 'assets/images/chambres/room5.avif',
  },
];
