import { Component, inject, Inject } from '@angular/core';
import { CourseApiService } from '@modules/course-list/services/course-api.service';
import { CourseStatusPipe } from '@shared/pipe/course-status.pipe';

@Component({
  selector: 'app-course-list-table',
  imports: [
    CourseStatusPipe
  ],
  templateUrl: './course-list-table.component.html',
  styleUrl: './course-list-table.component.scss'
})
export class CourseListTableComponent {
  courseApi = inject(CourseApiService);

  get courses(){
    return this.courseApi.getCourseList();
  }

}
