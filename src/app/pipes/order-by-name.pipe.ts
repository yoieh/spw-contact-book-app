import {
  Pipe,
  PipeTransform
} from '@angular/core';
import {
  Contact,
} from '../interfaces/contact';

@Pipe({
  name: 'orderByName'
})
export class OrderByNamePipe implements PipeTransform {

  public transform(items: Contact[], orderby: string, direction: number): any {
    if (!items) {
      return items;
    }
    return items.sort((a: Contact, b: Contact) => {
      if (a.name[orderby] < b.name[orderby]) {
        return -1 * direction;
      } else if (a.name[orderby] > b.name[orderby]) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }
}
