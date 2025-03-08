import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRoomHorizComponent } from './card-room-horiz.component';

describe('CardRoomHorizComponent', () => {
  let component: CardRoomHorizComponent;
  let fixture: ComponentFixture<CardRoomHorizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRoomHorizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRoomHorizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
