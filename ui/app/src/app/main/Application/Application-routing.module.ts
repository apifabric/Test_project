import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationHomeComponent } from './home/Application-home.component';
import { ApplicationNewComponent } from './new/Application-new.component';
import { ApplicationDetailComponent } from './detail/Application-detail.component';

const routes: Routes = [
  {path: '', component: ApplicationHomeComponent},
  { path: 'new', component: ApplicationNewComponent },
  { path: ':application_id', component: ApplicationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Application-detail-permissions'
      }
    }
  },{
    path: ':application_id/Document', loadChildren: () => import('../Document/Document.module').then(m => m.DocumentModule),
    data: {
        oPermission: {
            permissionId: 'Document-detail-permissions'
        }
    }
},{
    path: ':application_id/Interview', loadChildren: () => import('../Interview/Interview.module').then(m => m.InterviewModule),
    data: {
        oPermission: {
            permissionId: 'Interview-detail-permissions'
        }
    }
},{
    path: ':application_id/Offer', loadChildren: () => import('../Offer/Offer.module').then(m => m.OfferModule),
    data: {
        oPermission: {
            permissionId: 'Offer-detail-permissions'
        }
    }
},{
    path: ':application_id/Review', loadChildren: () => import('../Review/Review.module').then(m => m.ReviewModule),
    data: {
        oPermission: {
            permissionId: 'Review-detail-permissions'
        }
    }
}
];

export const APPLICATION_MODULE_DECLARATIONS = [
    ApplicationHomeComponent,
    ApplicationNewComponent,
    ApplicationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }