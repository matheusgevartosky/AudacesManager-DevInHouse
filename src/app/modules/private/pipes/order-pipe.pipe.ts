import { Pipe, PipeTransform } from '@angular/core';
import { Collection } from '../interfaces/collection';

@Pipe({
  name: 'orderPipe'
})
export class OrderPipePipe implements PipeTransform {

  transform(array: Collection[], args: any): any {
    array.sort((a: any, b: any) => {
      return b.orcamento - a.orcamento
    });
    return array;
    
  }
}
