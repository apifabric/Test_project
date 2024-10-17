import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantSkillHomeComponent } from './home/ApplicantSkill-home.component';
import { ApplicantSkillNewComponent } from './new/ApplicantSkill-new.component';
import { ApplicantSkillDetailComponent } from './detail/ApplicantSkill-detail.component';

const routes: Routes = [
  {path: '', component: ApplicantSkillHomeComponent},
  { path: 'new', component: ApplicantSkillNewComponent },
  { path: ':applicant_skill_id', component: ApplicantSkillDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ApplicantSkill-detail-permissions'
      }
    }
  }
];

export const APPLICANTSKILL_MODULE_DECLARATIONS = [
    ApplicantSkillHomeComponent,
    ApplicantSkillNewComponent,
    ApplicantSkillDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantSkillRoutingModule { }