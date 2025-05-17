import { Component } from '@angular/core';
import { CourseListTableComponent } from '../../modules/course-list/components/course-list-table/course-list-table.component';

@Component({
  selector: 'app-course-list',
  imports: [
    CourseListTableComponent
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {

}
