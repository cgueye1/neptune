import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarificationListComponent } from './tarification-list.component';

describe('TarificationListComponent', () => {
  let component: TarificationListComponent;
  let fixture: ComponentFixture<TarificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarificationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
