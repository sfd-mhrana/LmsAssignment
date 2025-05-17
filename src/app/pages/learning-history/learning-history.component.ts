import { Component } from '@angular/core';
import { CompletedLearningListComponent } from '@modules/my-learning/components/completed-learning-list/completed-learning-list.component';

@Component({
  selector: 'app-learning-history',
  imports: [
    CompletedLearningListComponent
  ],
  templateUrl: './learning-history.component.html',
  styleUrl: './learning-history.component.scss'
})
export class LearningHistoryComponent {

}
