import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarificationEditComponent } from './tarification-edit.component';

describe('TarificationEditComponent', () => {
  let component: TarificationEditComponent;
  let fixture: ComponentFixture<TarificationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarificationEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarificationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
