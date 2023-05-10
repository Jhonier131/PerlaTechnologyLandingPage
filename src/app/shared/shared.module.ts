import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './layoutComponents/navbar/navbar.component';
import { HeaderComponent } from './layoutComponents/header/header.component';
import { CalidadComponent } from './layoutComponents/calidad/calidad.component';
import { PortafolioComponent } from './customComponents/portafolio/portafolio.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    CalidadComponent,
    PortafolioComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    CalidadComponent,
    PortafolioComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, 
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule { }
