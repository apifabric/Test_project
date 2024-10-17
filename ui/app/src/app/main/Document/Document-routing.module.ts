import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentHomeComponent } from './home/Document-home.component';
import { DocumentNewComponent } from './new/Document-new.component';
import { DocumentDetailComponent } from './detail/Document-detail.component';

const routes: Routes = [
  {path: '', component: DocumentHomeComponent},
  { path: 'new', component: DocumentNewComponent },
  { path: ':document_id', component: DocumentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Document-detail-permissions'
      }
    }
  }
];

export const DOCUMENT_MODULE_DECLARATIONS = [
    DocumentHomeComponent,
    DocumentNewComponent,
    DocumentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }