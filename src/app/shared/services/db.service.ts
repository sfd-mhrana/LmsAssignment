import { Injectable, signal, WritableSignal } from '@angular/core';
import { ICourse } from '@modules/course/interfaces/course.interfaces';
import { IEnrollment } from '@modules/my-learning/interfaces/enrollment.interface';
import { IUser } from "@modules/profile/interfaces/user.interface";


@Injectable({
  providedIn: 'root'
})
export class DBService {
  constructor() { }

  courses: WritableSignal<Array<ICourse>> = signal([
    {
      id: "c1f3a138-8b8b-41f3-9861-b1741f51918b",
      title: "Python for Beginners",
      description: "An introduction to Python programming with practical examples.",
      category: "Programming",
      isFree: true,
      prerequisites: [],
      duration: 6,
    },
    {
      id: "b99f7a69-19e6-4f3f-96b6-7d4f3d7c8b8d",
      title: "Full-Stack Web Development",
      description: "Become a full-stack developer with HTML, CSS, JavaScript, and Node.js.",
      category: "Programming",
      isFree: false,
      prerequisites: ["c1f3a138-8b8b-41f3-9861-b1741f51918b"],
      duration: 12,
    },
    {
      id: "58e83e22-9e70-4b96-bb5c-61ea91ad49b4",
      title: "Project Management Essentials",
      description: "Learn the fundamentals of managing projects successfully.",
      category: "Business",
      isFree: true,
      prerequisites: [],
      duration: 5,
    },
    {
      id: "f2adad64-88c5-4e7b-81a9-60ce8dfdb42b",
      title: "Data Science & Machine Learning",
      description: "Explore data science concepts with hands-on machine learning exercises.",
      category: "Programming",
      isFree: false,
      prerequisites: ["c1f3a138-8b8b-41f3-9861-b1741f51918b"],
      duration: 10,
    },
    {
      id: "4c761fa1-8415-426b-bdd7-812b4462cdd1",
      title: "Digital Marketing Mastery",
      description: "A complete guide to SEO, content marketing, and social media.",
      category: "Marketing",
      isFree: true,
      prerequisites: [],
      duration: 7,
    },
  ]);

  user: WritableSignal<IUser> = signal({
    userId: "b5a3f4b8-d41e-4e9c-8e5b-f7b203c91cf2",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    preferences: {
      preferredCategories: ["Programming", "Business"],
      notifications: true,
    },
  });

  enrollments: WritableSignal<Array<IEnrollment>> = signal([]);

}
