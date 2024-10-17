import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewHomeComponent } from './home/Interview-home.component';
import { InterviewNewComponent } from './new/Interview-new.component';
import { InterviewDetailComponent } from './detail/Interview-detail.component';

const routes: Routes = [
  {path: '', component: InterviewHomeComponent},
  { path: 'new', component: InterviewNewComponent },
  { path: ':interview_id', component: InterviewDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Interview-detail-permissions'
      }
    }
  },{
    path: ':interview_id/InterviewAssignment', loadChildren: () => import('../InterviewAssignment/InterviewAssignment.module').then(m => m.InterviewAssignmentModule),
    data: {
        oPermission: {
            permissionId: 'InterviewAssignment-detail-permissions'
        }
    }
}
];

export const INTERVIEW_MODULE_DECLARATIONS = [
    InterviewHomeComponent,
    InterviewNewComponent,
    InterviewDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewRoutingModule { }