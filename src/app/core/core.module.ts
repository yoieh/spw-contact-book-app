import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';

import { CollapseModule } from 'ngx-bootstrap';
import { CoreRoutingModule } from './core.routing';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    CoreRoutingModule,
  ],
  exports: [ NavComponent ],
  declarations: [NavComponent]
})
export class CoreModule { }
