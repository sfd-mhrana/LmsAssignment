import { inject, Injectable } from '@angular/core';
import { DBService } from '@shared/services/db.service';

@Injectable({
  providedIn: 'root'
})
export class CourseApiService {

  db = inject(DBService);

  getCourseList() {
    return this.db.courses();
  }

  getCourseById(courseId: string) {
    return this.db.courses().find((course) => course.id == courseId) ?? null;
  }

}
