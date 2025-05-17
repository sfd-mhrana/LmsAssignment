import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedLearningListComponent } from './completed-learning-list.component';

describe('CompletedLearningListComponent', () => {
  let component: CompletedLearningListComponent;
  let fixture: ComponentFixture<CompletedLearningListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedLearningListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedLearningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
