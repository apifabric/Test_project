import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillHomeComponent } from './home/Skill-home.component';
import { SkillNewComponent } from './new/Skill-new.component';
import { SkillDetailComponent } from './detail/Skill-detail.component';

const routes: Routes = [
  {path: '', component: SkillHomeComponent},
  { path: 'new', component: SkillNewComponent },
  { path: ':skill_id', component: SkillDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Skill-detail-permissions'
      }
    }
  },{
    path: ':skill_id/ApplicantSkill', loadChildren: () => import('../ApplicantSkill/ApplicantSkill.module').then(m => m.ApplicantSkillModule),
    data: {
        oPermission: {
            permissionId: 'ApplicantSkill-detail-permissions'
        }
    }
},{
    path: ':skill_id/PositionSkill', loadChildren: () => import('../PositionSkill/PositionSkill.module').then(m => m.PositionSkillModule),
    data: {
        oPermission: {
            permissionId: 'PositionSkill-detail-permissions'
        }
    }
}
];

export const SKILL_MODULE_DECLARATIONS = [
    SkillHomeComponent,
    SkillNewComponent,
    SkillDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillRoutingModule { }