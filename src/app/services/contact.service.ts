import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import {
  ContactResults
} from '../interfaces/contact';
import {
  SearchContactsPipe
} from '../pipes/search-contacts.pipe';
import {
  Contact
} from './../interfaces/contact';

@Injectable()
export class ContactService {
  private api = 'https://randomuser.me/api/';
  private seed = '?seed=5294e1f64f0126bd';

  constructor(private Http: HttpClient) {}

  // Used find a contact by id.value
  find(id: any) {
    return new Promise((resolve, reject) => {
      return this.get().then((res: ContactResults) => {
        return res.results.map(contact => {
          if (contact.id.value === id) {
            resolve(contact);
          }
        });
      });
    });
  }

  // Getting all contacts
  get() {
    return new Promise((resolve, reject) => {
      return this.Http.get < ContactResults > (this.api + this.seed +
          '&results=500&nat=us,dk,fr,gb&inc=gender,name,email,phone,cell,picture,id,location')
        .subscribe(res => resolve(res));
    });
  }

}
