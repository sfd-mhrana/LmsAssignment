import { inject, Injectable } from '@angular/core';
import { DBService } from '@shared/services/db.service';
import { LocalStorageService } from '@shared/services/local-storage.service';
import { IEnrollment } from '../interfaces/enrollment.interface';
import { IEnrollmentData } from '../interfaces/enrollment-list.interface';

@Injectable({
  providedIn: 'root'
})
export class EnrollApiService {
  localStorage = inject(LocalStorageService);
  db = inject(DBService);

  getMyEnrollList() {
    return this.db.enrollments().filter((enroll) => enroll.userId == this.db.user().userId);
  }

  enrollCourse(courseId: string) {
    const newEnrollObject: IEnrollment = {
      userId: this.db.user().userId,
      courseId,
      status: 'enrolled',
      progress: 0,
      enrolledAt: new Date().toLocaleDateString(),
    }
    this.db.enrollments.update((prev) => {
      prev.push(newEnrollObject);
      return prev;
    })
    this.localStorage.setEnrollCourse(this.db.enrollments());
  }

  checkCourseEnrollStatus(courseId: string) {
    return this.db.enrollments().find(enroll => enroll.courseId == courseId) ? true : false;
  }

  updateEnroll(enroll: IEnrollmentData) {
    this.db.enrollments.update((prev) => {
      const newValue = prev.map((item) => {
        if (item.courseId == enroll.course?.id) {
          if (enroll.progress == 100) {
            return { ...item, ...{ progress: enroll.progress, status: 'completed', completedAt: new Date().toDateString() } } as IEnrollment
          }
          return { ...item, ...{ progress: enroll.progress } }
        }
        return item;
      })
      return newValue;
    });
    this.localStorage.setEnrollCourse(this.db.enrollments());
  }

}
