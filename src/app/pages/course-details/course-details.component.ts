import { Component, inject, Input, OnInit } from '@angular/core';
import { CourseDetailsDataComponent } from '@modules/course/components/course-details-data/course-details-data.component';
import { ICourse } from '@modules/course/interfaces/course.interfaces';
import { CourseApiService } from '@modules/course/services/course-api.service';

@Component({
  selector: 'app-course-details',
  imports: [
    CourseDetailsDataComponent
  ],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnInit {
  @Input('courseId') courseId: string = '';
  courseApi=inject(CourseApiService);
  course: ICourse | null = null;

  ngOnInit() {
    if(this.courseId){
      this.course=this.courseApi.getCourseById(this.courseId);
    }
  }
}
