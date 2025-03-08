import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarificationDetailComponent } from './tarification-detail.component';

describe('TarificationDetailComponent', () => {
  let component: TarificationDetailComponent;
  let fixture: ComponentFixture<TarificationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarificationDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
