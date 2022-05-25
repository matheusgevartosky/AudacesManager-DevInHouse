import { Pipe, PipeTransform } from '@angular/core';
import { Collection } from '../interfaces/collection';


@Pipe({
  name: 'orderPipe'
})
export class OrderPipePipe implements PipeTransform {

  transform(array: Collection[], args: any): Collection[] {
    array.sort((a: any, b: any) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
