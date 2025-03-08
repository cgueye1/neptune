import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenageListComponent } from './menage-list.component';

describe('MenageListComponent', () => {
  let component: MenageListComponent;
  let fixture: ComponentFixture<MenageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenageListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
