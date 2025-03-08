import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRoomVerticalComponent } from './card-room-vertical.component';

describe('CardRoomVerticalComponent', () => {
  let component: CardRoomVerticalComponent;
  let fixture: ComponentFixture<CardRoomVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRoomVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRoomVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
