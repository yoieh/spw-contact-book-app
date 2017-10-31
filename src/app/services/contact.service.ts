import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ContactResults } from '../interfaces/contact';
import { SearchContactsPipe } from '../pipes/search-contacts.pipe';

@Injectable()
export class ContactService {
  private api = 'https://randomuser.me/api/';
  private seed = '?seed=5294e1f64f0126bd';

  constructor(private Http: HttpClient) {
  }

  get() {
    return new Promise((resolve, reject) => {
      this.Http.get<ContactResults>(this.api + this.seed + '&results=500&nat=us,dk,fr,gb&inc=gender,name,email,phone,picture,id,location')
      .subscribe(res => {
        resolve(res);
      });
    });
  }

}
