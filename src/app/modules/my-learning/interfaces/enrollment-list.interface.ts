import { ICourse } from "@modules/course/interfaces/course.interfaces";

export interface IEnrollmentData {
  course?: ICourse;
  status: 'enrolled' | 'completed';
  progress: number;
  enrolledAt: string;
  completedAt?: string;
}
