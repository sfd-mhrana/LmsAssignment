import { Component } from '@angular/core';
import { CourseListTableComponent } from '../../modules/course/components/course-list-table/course-list-table.component';
import { CourseFilterComponent } from '@modules/course/components/course-filter/course-filter.component';
import { CourseStateService } from '@modules/course/services/course-state.service';

@Component({
  selector: 'app-course-list',
  imports: [
    CourseListTableComponent,
    CourseFilterComponent
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss',
})
export class CourseListComponent {

}
