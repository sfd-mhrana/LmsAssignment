import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { CourseApiService } from './course-api.service';

@Injectable()
export class CourseStateService {
  courseApi = inject(CourseApiService);

  search: WritableSignal<string | null> = signal(null);
  categorySearch: WritableSignal<string | null> = signal(null);
  statusSearch: WritableSignal<boolean | null> = signal(null);
  sortBy: WritableSignal<number | null> = signal(null);

  courseList = computed(() => {
    const search = this.search();
    const categorySearch = this.categorySearch();
    const statusSearch = this.statusSearch();
    const sortBy = this.sortBy();

    let courses = structuredClone(this.courseApi.getCourseList());

    if (search)
      courses = courses.filter((course) => {
        return ((course.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) || course.category.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      })

    if (categorySearch)
      courses = courses.filter((course) => {
        return course.category.includes(categorySearch)
      })

    if (statusSearch)
      courses = courses.filter((course) => {
        return course.isFree == statusSearch;
      })

    if (sortBy) {
      if (sortBy == 1)
        courses.sort((a, b) => a.title.localeCompare(b.title));
      else
        courses.sort((a, b) => a.duration - b.duration);
    }

    return courses;
  })


}
