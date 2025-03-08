import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenageDetailComponent } from './menage-detail.component';

describe('MenageDetailComponent', () => {
  let component: MenageDetailComponent;
  let fixture: ComponentFixture<MenageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenageDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
