import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INTERVIEW_MODULE_DECLARATIONS, InterviewRoutingModule} from  './Interview-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    InterviewRoutingModule
  ],
  declarations: INTERVIEW_MODULE_DECLARATIONS,
  exports: INTERVIEW_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InterviewModule { }