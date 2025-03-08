import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovisionnementDetailComponent } from './approvisionnement-detail.component';

describe('ApprovisionnementDetailComponent', () => {
  let component: ApprovisionnementDetailComponent;
  let fixture: ComponentFixture<ApprovisionnementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovisionnementDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovisionnementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
