import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DOCUMENT_MODULE_DECLARATIONS, DocumentRoutingModule} from  './Document-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DocumentRoutingModule
  ],
  declarations: DOCUMENT_MODULE_DECLARATIONS,
  exports: DOCUMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DocumentModule { }