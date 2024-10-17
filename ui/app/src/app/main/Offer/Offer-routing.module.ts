import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferHomeComponent } from './home/Offer-home.component';
import { OfferNewComponent } from './new/Offer-new.component';
import { OfferDetailComponent } from './detail/Offer-detail.component';

const routes: Routes = [
  {path: '', component: OfferHomeComponent},
  { path: 'new', component: OfferNewComponent },
  { path: ':offer_id', component: OfferDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Offer-detail-permissions'
      }
    }
  }
];

export const OFFER_MODULE_DECLARATIONS = [
    OfferHomeComponent,
    OfferNewComponent,
    OfferDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }