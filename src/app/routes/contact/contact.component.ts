import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  ContactService
} from '../../services/contact.service';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Contact
} from './../../interfaces/contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  constructor(private contactService: ContactService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    // Shows site by id if id is previced in url
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.getContact(params['id']).then(res => console.log(this.contact));
      }
    });
  }

  // Gets a contact from contacts service
  getContact(id: any): Promise < Contact > {
    return this.contactService.find(id)
      .then((res: Contact) => {
        return this.contact = res;
      });
  }
}
