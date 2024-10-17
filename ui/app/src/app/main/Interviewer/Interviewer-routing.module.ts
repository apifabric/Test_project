import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewerHomeComponent } from './home/Interviewer-home.component';
import { InterviewerNewComponent } from './new/Interviewer-new.component';
import { InterviewerDetailComponent } from './detail/Interviewer-detail.component';

const routes: Routes = [
  {path: '', component: InterviewerHomeComponent},
  { path: 'new', component: InterviewerNewComponent },
  { path: ':interviewer_id', component: InterviewerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Interviewer-detail-permissions'
      }
    }
  },{
    path: ':interviewer_id/InterviewAssignment', loadChildren: () => import('../InterviewAssignment/InterviewAssignment.module').then(m => m.InterviewAssignmentModule),
    data: {
        oPermission: {
            permissionId: 'InterviewAssignment-detail-permissions'
        }
    }
},{
    path: ':interviewer_id/Review', loadChildren: () => import('../Review/Review.module').then(m => m.ReviewModule),
    data: {
        oPermission: {
            permissionId: 'Review-detail-permissions'
        }
    }
}
];

export const INTERVIEWER_MODULE_DECLARATIONS = [
    InterviewerHomeComponent,
    InterviewerNewComponent,
    InterviewerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewerRoutingModule { }