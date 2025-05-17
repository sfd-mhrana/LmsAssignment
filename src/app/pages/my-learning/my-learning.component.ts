import { Component } from '@angular/core';
import { MyLearningListComponent } from '@modules/my-learning/components/my-learning-list/my-learning-list.component';

@Component({
  selector: 'app-my-learning',
  imports: [
    MyLearningListComponent
  ],
  templateUrl: './my-learning.component.html',
  styleUrl: './my-learning.component.scss'
})
export class MyLearningComponent {

}
