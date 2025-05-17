import { Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CourseStateService } from '@modules/course/services/course-state.service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',

})
export class HeaderComponent {
  courseState = inject(CourseStateService);
  router = inject(Router);
  constructor() {
    effect(() => {
      const search = this.courseState.search();
      if (search)
        this.router.navigate(['/'])
    })
  }
}
