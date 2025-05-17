import { Component, inject } from '@angular/core';
import { EnrollStateService } from '@modules/my-learning/services/enroll-state.service';
import { SliderComponent } from '@shared/components/slider/slider.component';

@Component({
  selector: 'app-my-learning-list',
  imports: [
    SliderComponent
  ],
  templateUrl: './my-learning-list.component.html',
  styleUrl: './my-learning-list.component.scss'
})
export class MyLearningListComponent {
  enrollState = inject(EnrollStateService);



}
