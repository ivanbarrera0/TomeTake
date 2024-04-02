import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsebookComponent } from './browsebook.component';

describe('BrowsebookComponent', () => {
  let component: BrowsebookComponent;
  let fixture: ComponentFixture<BrowsebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowsebookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowsebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
