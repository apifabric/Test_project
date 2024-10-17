import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INTERVIEWASSIGNMENT_MODULE_DECLARATIONS, InterviewAssignmentRoutingModule} from  './InterviewAssignment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    InterviewAssignmentRoutingModule
  ],
  declarations: INTERVIEWASSIGNMENT_MODULE_DECLARATIONS,
  exports: INTERVIEWASSIGNMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InterviewAssignmentModule { }