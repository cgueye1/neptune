import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-room-assignment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-assignment.component.html',
  styleUrl: './room-assignment.component.scss',
})
export class RoomAssignmentComponent implements OnInit {
  roomAssignmentForm!: FormGroup;
  roomTypes = ['Simple', 'Double', 'Suite'];
  calendarDays = ['2024-10-20', '2024-10-21', '2024-10-22', '2024-10-23']; // Example days
  rooms = [
    {
      name: 'Chambre 101',
      type: 'Simple',
      occupancy: 1,
      preferences: 'vueMer',
      availability: ['Disponible', 'Occupée', 'Disponible', 'Disponible'],
    },
    {
      name: 'Chambre 202',
      type: 'Double',
      occupancy: 2,
      preferences: 'balcon',
      availability: ['Disponible', 'Disponible', 'Disponible', 'Occupée'],
    },
    {
      name: 'Chambre 303',
      type: 'Suite',
      occupancy: 3,
      preferences: 'procheAscenseur',
      availability: ['Occupée', 'Disponible', 'Disponible', 'Disponible'],
    },
  ];
  filteredRooms:any[] = [];
  selectedRoom:any = null;

  constructor(private fb: FormBuilder) {
    this.roomAssignmentForm = this.fb.group({
      roomType: [''],
      occupancy: [''],
      preferences: [''],
    });
  }

  ngOnInit(): void {
    // Initialize with all rooms
    this.filteredRooms = this.rooms;
  }

  filterRooms() {
    const { roomType, occupancy, preferences } = this.roomAssignmentForm.value;

    // Filter logic based on room type, occupancy, and preferences
    this.filteredRooms = this.rooms.filter((room) => {
      return (
        (!roomType || room.type === roomType) &&
        (!occupancy || room.occupancy >= occupancy) &&
        (!preferences || room.preferences === preferences)
      );
    });
  }

  assignRoom(room:any) {
    this.selectedRoom = room;
  }

  confirmAssignment() {
    if (this.selectedRoom) {
      console.log('Chambre attribuée:', this.selectedRoom);
      // Logic to save the assignment to the backend or update the booking
      alert(
        `La chambre ${this.selectedRoom.name} a été attribuée avec succès !`
      );
      this.selectedRoom = null; // Reset the selection
    }
  }
}
