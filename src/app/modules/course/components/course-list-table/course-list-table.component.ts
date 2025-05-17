import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseStateService } from '@modules/course/services/course-state.service';
import { CourseStatusPipe } from '@shared/pipe/course-status.pipe';

@Component({
  selector: 'app-course-list-table',
  imports: [
    CourseStatusPipe,
    RouterLink
  ],
  templateUrl: './course-list-table.component.html',
  styleUrl: './course-list-table.component.scss'
})
export class CourseListTableComponent {
  courseState = inject(CourseStateService);

}
