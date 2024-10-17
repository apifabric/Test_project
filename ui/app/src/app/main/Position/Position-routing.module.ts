import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionHomeComponent } from './home/Position-home.component';
import { PositionNewComponent } from './new/Position-new.component';
import { PositionDetailComponent } from './detail/Position-detail.component';

const routes: Routes = [
  {path: '', component: PositionHomeComponent},
  { path: 'new', component: PositionNewComponent },
  { path: ':position_id', component: PositionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Position-detail-permissions'
      }
    }
  },{
    path: ':position_id/Application', loadChildren: () => import('../Application/Application.module').then(m => m.ApplicationModule),
    data: {
        oPermission: {
            permissionId: 'Application-detail-permissions'
        }
    }
},{
    path: ':position_id/PositionSkill', loadChildren: () => import('../PositionSkill/PositionSkill.module').then(m => m.PositionSkillModule),
    data: {
        oPermission: {
            permissionId: 'PositionSkill-detail-permissions'
        }
    }
}
];

export const POSITION_MODULE_DECLARATIONS = [
    PositionHomeComponent,
    PositionNewComponent,
    PositionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionRoutingModule { }