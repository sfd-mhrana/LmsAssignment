export interface IEnrollment {
  userId: string;
  courseId: string;
  status: 'enrolled' | 'completed';
  progress: number;
  enrolledAt: string;
  completedAt?: string;
}
