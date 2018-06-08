import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'learnPipe'
})
export class LearnPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }

}
