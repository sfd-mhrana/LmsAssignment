import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layout/components/layout/layout.component').then(c => c.LayoutComponent),
    loadChildren: () => [
      {
        path: '',
        loadComponent: () => import('./pages/course-list/course-list.component').then(c => c.CourseListComponent),
      },{
        path: 'my-learning',
        loadComponent: () => import('./pages/my-learning/my-learning.component').then(c => c.MyLearningComponent),
      }, {
        path: 'learning-history',
        loadComponent: () => import('./pages/learning-history/learning-history.component').then(c => c.LearningHistoryComponent),
      }, {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(c => c.ProfileComponent),
      },{
        path: 'course-details/:courseId',
        loadComponent: () => import('./pages/course-details/course-details.component').then(c => c.CourseDetailsComponent),
      }
    ],
  },

];
