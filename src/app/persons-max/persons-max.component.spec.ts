import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsMaxComponent } from './persons-max.component';

describe('PersonsMaxComponent', () => {
  let component: PersonsMaxComponent;
  let fixture: ComponentFixture<PersonsMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsMaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonsMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
