import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleReunionListComponent } from './salle-reunion-list.component';

describe('SalleReunionListComponent', () => {
  let component: SalleReunionListComponent;
  let fixture: ComponentFixture<SalleReunionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalleReunionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalleReunionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
