// This is the routing file and all page routes sould go here
import { HomeComponent } from '../routes/home/home.component';
import { ContactsComponent } from '../routes/contacts/contacts.component';
import { ContactComponent } from '../routes/contact/contact.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routs array
const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/:id', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // export routs to use in other modules
})
export class CoreRoutingModule { }
