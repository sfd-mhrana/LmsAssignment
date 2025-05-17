import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
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
  courseState=inject(CourseStateService);
}
