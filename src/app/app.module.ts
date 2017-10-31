import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { ContactsComponent } from './routes/contacts/contacts.component';
import { ContactComponent } from './routes/contact/contact.component';

import { CoreModule } from './core/core.module';
import { CoreRoutingModule } from './core/core.routing';

import { ContactService } from './services/contact.service';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SearchContactsPipe } from './pipes/search-contacts.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { OrderByNamePipe } from './pipes/order-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    ContactComponent,
    SearchContactsPipe,
    CapitalizePipe,
    OrderByNamePipe
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoreRoutingModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
