import {
  Pipe,
  PipeTransform
} from '@angular/core';

import {
  Contact,
} from '../interfaces/contact';

@Pipe({
  name: 'searchContacts'
})
export class SearchContactsPipe implements PipeTransform {
  public transform(items: Contact[], term: any): any {
    if (!items) {
      return items;
    }

    return items.filter(item => {
      if (item.name.first.startsWith(term) ||
        item.name.last.startsWith(term) ||
        item.phone.startsWith(term) ||
        item.email.includes(term)) {
        return true;
      }
      return false;
    });
  }
}
