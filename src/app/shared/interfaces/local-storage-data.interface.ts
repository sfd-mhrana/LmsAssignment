import { ICourse } from "@modules/course-list/interfaces/course.interfaces";
import { Enrollment } from "@modules/my-learning/interfaces/enrollment.interfaces";
import { User } from "@modules/profile/interfaces/user.interface";


export interface ILocalStorageData {
  courses: ICourse[];
  enrollments: Enrollment[];
  user: User;
}
