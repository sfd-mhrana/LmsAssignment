import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsDataComponent } from './course-details-data.component';

describe('CourseDetailsDataComponent', () => {
  let component: CourseDetailsDataComponent;
  let fixture: ComponentFixture<CourseDetailsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetailsDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetailsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
