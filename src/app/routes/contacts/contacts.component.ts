import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import {
  ContactService
} from '../../services/contact.service';
import {
  Contact,
  ContactResults
} from '../../interfaces/contact';
import {
  OrderByNamePipe
} from './../../pipes/order-by-name.pipe';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  public direction: number; // Sorting direction 1 or -1
  public isDesc: boolean;   // Desc or not
  public sortBy: string;    // FirstName or LastName

  @Input() contacts: Contact[];
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.isDesc = false;
    this.sortBy = 'last';
    this.list().then(contacts => {});
  }

  // Gets list of contact from contactsSerivce
  list(): Promise < Contact[] > {
    return this.contactService.get()
      .then((res: ContactResults) => {
        return this.contacts = res.results;
      });
  }

  // triggers Sorting pip
  sort(property: string) {
    this.isDesc = !this.isDesc; // change the direction
    this.sortBy = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  // Query search from search box
  search(q: any) {
    this.contacts = this.contacts.filter(contact => contact.name.first.startsWith(q));
  }
}
