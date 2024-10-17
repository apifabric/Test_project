import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewAssignmentHomeComponent } from './home/InterviewAssignment-home.component';
import { InterviewAssignmentNewComponent } from './new/InterviewAssignment-new.component';
import { InterviewAssignmentDetailComponent } from './detail/InterviewAssignment-detail.component';

const routes: Routes = [
  {path: '', component: InterviewAssignmentHomeComponent},
  { path: 'new', component: InterviewAssignmentNewComponent },
  { path: ':assignment_id', component: InterviewAssignmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'InterviewAssignment-detail-permissions'
      }
    }
  }
];

export const INTERVIEWASSIGNMENT_MODULE_DECLARATIONS = [
    InterviewAssignmentHomeComponent,
    InterviewAssignmentNewComponent,
    InterviewAssignmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewAssignmentRoutingModule { }