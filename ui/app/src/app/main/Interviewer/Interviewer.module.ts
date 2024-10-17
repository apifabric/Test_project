import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INTERVIEWER_MODULE_DECLARATIONS, InterviewerRoutingModule} from  './Interviewer-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    InterviewerRoutingModule
  ],
  declarations: INTERVIEWER_MODULE_DECLARATIONS,
  exports: INTERVIEWER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InterviewerModule { }