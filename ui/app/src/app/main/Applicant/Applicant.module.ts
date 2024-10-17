import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {APPLICANT_MODULE_DECLARATIONS, ApplicantRoutingModule} from  './Applicant-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ApplicantRoutingModule
  ],
  declarations: APPLICANT_MODULE_DECLARATIONS,
  exports: APPLICANT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicantModule { }