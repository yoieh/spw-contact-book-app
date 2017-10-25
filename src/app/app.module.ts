import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { ContactsComponent } from './routes/contacts/contacts.component';
import { ContactComponent } from './routes/contact/contact.component';

import { CoreModule } from './core/core.module';
import { CoreRoutingModule } from './core/core.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoreRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
