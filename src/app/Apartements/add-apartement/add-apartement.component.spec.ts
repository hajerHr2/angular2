import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApartementComponent } from './add-apartement.component';

describe('AddApartementComponent', () => {
  let component: AddApartementComponent;
  let fixture: ComponentFixture<AddApartementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddApartementComponent]
    });
    fixture = TestBed.createComponent(AddApartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
