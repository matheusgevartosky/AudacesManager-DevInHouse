import { Pipe, PipeTransform } from '@angular/core';
import { Collection } from '../interfaces/collection';

@Pipe({
  name: 'justSlice'
})
export class JustSlicePipe implements PipeTransform {

  transform(array: Collection[], start:number, end:number): any {
    return array.slice(start, end)
  }

}
