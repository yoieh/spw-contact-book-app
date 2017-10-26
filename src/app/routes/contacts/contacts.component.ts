import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public keysOfContact;

  @Input() contacts: Contact;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.list().then(contacts => this.getkeys(contacts));
  }

  // Getts all keys of retrevide sites for easyer lopping list of cards
  getkeys(contacts: Contact): Promise<string[]> {
    return new Promise((resolve) =>
      resolve(this.keysOfContact = Object.keys(contacts)));
  }

  // Gets list of sites from sitesSerivce
  list(): Promise<Contact> {
    return this.contactService.get()
      .then((res: Contact) => this.contacts = res);
  }
}
