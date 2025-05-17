import { Component, inject, input } from '@angular/core';
import { ICourse } from '@modules/course/interfaces/course.interfaces';
import { EnrollApiService } from '@modules/my-learning/services/enroll-api.service';
import { CourseStatusPipe } from '@shared/pipe/course-status.pipe';

@Component({
  selector: 'app-course-details-data',
  imports: [
    CourseStatusPipe
  ],
  templateUrl: './course-details-data.component.html',
  styleUrl: './course-details-data.component.scss'
})
export class CourseDetailsDataComponent {
  course = input.required<ICourse>();
  enrollApi = inject(EnrollApiService);
  isAlreadyEnroll = false;

  ngOnInit() {
    this.isAlreadyEnroll = this.enrollApi.checkCourseEnrollStatus(this.course().id);
  }

  enrollCourse() {
    this.enrollApi.enrollCourse(this.course().id);
    this.isAlreadyEnroll=true;
  }

}
