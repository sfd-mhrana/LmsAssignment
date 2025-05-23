import { Injectable } from '@angular/core';
import { ICourse } from '@modules/course/interfaces/course.interfaces';
import { IEnrollment } from '@modules/my-learning/interfaces/enrollment.interface';
import { IUser } from '@modules/profile/interfaces/user.interface';
import { ILocalStorageData } from '@shared/interfaces/local-storage-data.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  storageKey = 'data';
  constructor() { }

  getLocalStorageData(): ILocalStorageData | null {
    const data = localStorage.getItem(this.storageKey);
    if (data)
      return JSON.parse(data) as ILocalStorageData;
    return null
  }

  setCourseList(courses: Array<ICourse>) {
    const data = this.getLocalStorageData();
    if (data) {
      const newData = { ...data, ...{ courses } };
      localStorage.setItem(this.storageKey, JSON.stringify(newData));
      return;
    }
    localStorage.setItem(this.storageKey, JSON.stringify({ courses }));
  }

  setUser(user: IUser) {
    const data = this.getLocalStorageData();
    if (data) {
      const newData = { ...data, ...{ user } };
      localStorage.setItem(this.storageKey, JSON.stringify(newData));
      return;
    }
    localStorage.setItem(this.storageKey, JSON.stringify({ user }));
  }

  setEnrollCourse(enrollments: Array<IEnrollment>) {
    const data = this.getLocalStorageData();
    if (data) {
      const newData = { ...data, ...{ enrollments } };
      localStorage.setItem(this.storageKey, JSON.stringify(newData));
      return;
    }
    localStorage.setItem(this.storageKey, JSON.stringify({ enrollments }));
  }

}
