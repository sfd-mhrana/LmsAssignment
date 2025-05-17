import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseStateService } from '@modules/course/services/course-state.service';

@Component({
  selector: 'app-course-filter',
  imports: [
    FormsModule
  ],
  templateUrl: './course-filter.component.html',
  styleUrl: './course-filter.component.scss'
})
export class CourseFilterComponent {
  courseState=inject(CourseStateService);
}
