import { Component, inject } from '@angular/core';
import { EnrollStateService } from '@modules/my-learning/services/enroll-state.service';

@Component({
  selector: 'app-completed-learning-list',
  imports: [],
  templateUrl: './completed-learning-list.component.html',
  styleUrl: './completed-learning-list.component.scss'
})
export class CompletedLearningListComponent {
  enrollState = inject(EnrollStateService);


}
