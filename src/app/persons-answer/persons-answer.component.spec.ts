import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsAnswerComponent } from './persons-answer.component';

describe('PersonsAnswerComponent', () => {
  let component: PersonsAnswerComponent;
  let fixture: ComponentFixture<PersonsAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonsAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
