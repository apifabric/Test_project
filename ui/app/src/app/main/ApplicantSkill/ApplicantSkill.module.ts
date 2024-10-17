import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {APPLICANTSKILL_MODULE_DECLARATIONS, ApplicantSkillRoutingModule} from  './ApplicantSkill-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ApplicantSkillRoutingModule
  ],
  declarations: APPLICANTSKILL_MODULE_DECLARATIONS,
  exports: APPLICANTSKILL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicantSkillModule { }