import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarificationCreateComponent } from './tarification-create.component';

describe('TarificationCreateComponent', () => {
  let component: TarificationCreateComponent;
  let fixture: ComponentFixture<TarificationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarificationCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarificationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
