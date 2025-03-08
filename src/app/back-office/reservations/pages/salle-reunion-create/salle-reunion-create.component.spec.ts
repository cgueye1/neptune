import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleReunionCreateComponent } from './salle-reunion-create.component';

describe('SalleReunionCreateComponent', () => {
  let component: SalleReunionCreateComponent;
  let fixture: ComponentFixture<SalleReunionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalleReunionCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalleReunionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
