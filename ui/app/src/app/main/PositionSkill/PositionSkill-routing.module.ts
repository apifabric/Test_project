import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionSkillHomeComponent } from './home/PositionSkill-home.component';
import { PositionSkillNewComponent } from './new/PositionSkill-new.component';
import { PositionSkillDetailComponent } from './detail/PositionSkill-detail.component';

const routes: Routes = [
  {path: '', component: PositionSkillHomeComponent},
  { path: 'new', component: PositionSkillNewComponent },
  { path: ':position_skill_id', component: PositionSkillDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PositionSkill-detail-permissions'
      }
    }
  }
];

export const POSITIONSKILL_MODULE_DECLARATIONS = [
    PositionSkillHomeComponent,
    PositionSkillNewComponent,
    PositionSkillDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionSkillRoutingModule { }