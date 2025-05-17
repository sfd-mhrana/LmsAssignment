import { Component, inject, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ChangeContext, NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { IEnrollmentData } from '@modules/my-learning/interfaces/enrollment-list.interface';
import { EnrollApiService } from '@modules/my-learning/services/enroll-api.service';

@Component({
  selector: 'app-slider',
  imports: [
    FormsModule,
    NgxSliderModule
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit {

  enrollApi = inject(EnrollApiService);

  enrollment = input.required<IEnrollmentData>()
  options: Options = {
    floor: 0,
    ceil: 100
  };
  value = 0;

  ngOnInit() {
    this.value = this.enrollment().progress;
    if (this.value == 100) {
      this.options = {
        ...this.options,
        ...{ disabled: true }
      }
    }
  }

  onSliderChange(event: ChangeContext): void {
    const enrollData = structuredClone(this.enrollment());
    enrollData.progress = event.value;
    if (event.value == 100) {
      this.options = {
        ...this.options,
        ...{ disabled: true }
      }
    }
    this.enrollApi.updateEnroll(enrollData);
  }
}
