import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLearningListComponent } from './my-learning-list.component';

describe('MyLearningListComponent', () => {
  let component: MyLearningListComponent;
  let fixture: ComponentFixture<MyLearningListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLearningListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLearningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
