import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantHomeComponent } from './home/Applicant-home.component';
import { ApplicantNewComponent } from './new/Applicant-new.component';
import { ApplicantDetailComponent } from './detail/Applicant-detail.component';

const routes: Routes = [
  {path: '', component: ApplicantHomeComponent},
  { path: 'new', component: ApplicantNewComponent },
  { path: ':applicant_id', component: ApplicantDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Applicant-detail-permissions'
      }
    }
  },{
    path: ':applicant_id/ApplicantSkill', loadChildren: () => import('../ApplicantSkill/ApplicantSkill.module').then(m => m.ApplicantSkillModule),
    data: {
        oPermission: {
            permissionId: 'ApplicantSkill-detail-permissions'
        }
    }
},{
    path: ':applicant_id/Application', loadChildren: () => import('../Application/Application.module').then(m => m.ApplicationModule),
    data: {
        oPermission: {
            permissionId: 'Application-detail-permissions'
        }
    }
}
];

export const APPLICANT_MODULE_DECLARATIONS = [
    ApplicantHomeComponent,
    ApplicantNewComponent,
    ApplicantDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }