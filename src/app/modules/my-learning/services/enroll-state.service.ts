import { computed, inject, Injectable } from '@angular/core';
import { EnrollApiService } from './enroll-api.service';
import { DBService } from '@shared/services/db.service';
import { IEnrollmentData } from '../interfaces/enrollment-list.interface';

@Injectable({
  providedIn: 'root'
})
export class EnrollStateService {
  enrollApiService=inject(EnrollApiService);
  db=inject(DBService);

  myEnrollList = computed(():Array<IEnrollmentData> => {
    const courses = this.db.courses();
    const enrollments = structuredClone(this.enrollApiService.getMyEnrollList());
    return enrollments.filter((item)=>item.status=='enrolled').map((enroll)=>{
      return {
        course:courses.find((course)=>course.id==enroll.courseId),
        status:enroll.status,
        progress:enroll.progress,
        enrolledAt:enroll.enrolledAt,
        completedAt:enroll.completedAt,
      }
    })
  })

  myCompleteEnrollList = computed(():Array<IEnrollmentData> => {
    const courses = this.db.courses();
    const enrollments = structuredClone(this.enrollApiService.getMyEnrollList());
    return enrollments.filter((item)=>item.status=='completed').map((enroll)=>{
      return {
        course:courses.find((course)=>course.id==enroll.courseId),
        status:enroll.status,
        progress:enroll.progress,
        enrolledAt:enroll.enrolledAt,
        completedAt:enroll.completedAt,
      }
    })
  })
}
