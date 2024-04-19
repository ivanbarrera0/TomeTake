import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedoutbooksComponent } from './checkedoutbooks.component';

describe('CheckedoutbooksComponent', () => {
  let component: CheckedoutbooksComponent;
  let fixture: ComponentFixture<CheckedoutbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckedoutbooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckedoutbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
