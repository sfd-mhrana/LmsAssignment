import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseStatus'
})
export class CourseStatusPipe implements PipeTransform {

  transform(value: boolean): unknown {
    return value ? 'free' : 'paid';
  }

}
