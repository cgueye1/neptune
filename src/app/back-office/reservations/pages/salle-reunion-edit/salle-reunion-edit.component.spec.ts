import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleReunionEditComponent } from './salle-reunion-edit.component';

describe('SalleReunionEditComponent', () => {
  let component: SalleReunionEditComponent;
  let fixture: ComponentFixture<SalleReunionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalleReunionEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalleReunionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
