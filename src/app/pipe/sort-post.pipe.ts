import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPost'
})
export class SortPostPipe implements PipeTransform {

  transform(value: any[], ...args: any): any[] {
    if (args == 'name') {
      value.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
    }
    return value;
  }

}
