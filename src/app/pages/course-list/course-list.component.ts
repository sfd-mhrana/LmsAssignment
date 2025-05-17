import { Component } from '@angular/core';
import { CourseListTableComponent } from '../../modules/course-list/components/course-list-table/course-list-table.component';
import { CourseFilterComponent } from '@modules/course-list/components/course-filter/course-filter.component';

@Component({
  selector: 'app-course-list',
  imports: [
    CourseListTableComponent,
    CourseFilterComponent
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {

}
