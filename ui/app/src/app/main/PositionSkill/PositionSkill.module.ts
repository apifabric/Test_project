import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {POSITIONSKILL_MODULE_DECLARATIONS, PositionSkillRoutingModule} from  './PositionSkill-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PositionSkillRoutingModule
  ],
  declarations: POSITIONSKILL_MODULE_DECLARATIONS,
  exports: POSITIONSKILL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PositionSkillModule { }