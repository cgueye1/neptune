import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAssignmentComponent } from './room-assignment.component';

describe('RoomAssignmentComponent', () => {
  let component: RoomAssignmentComponent;
  let fixture: ComponentFixture<RoomAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
