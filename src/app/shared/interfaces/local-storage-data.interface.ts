import { ICourse } from "@modules/course/interfaces/course.interfaces";
import { IEnrollment } from "@modules/my-learning/interfaces/enrollment.interface";
import { IUser } from "@modules/profile/interfaces/user.interface";


export interface ILocalStorageData {
  courses: ICourse[];
  enrollments: IEnrollment[];
  user: IUser;
}
