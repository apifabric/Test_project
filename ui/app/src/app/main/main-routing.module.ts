import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Applicant', loadChildren: () => import('./Applicant/Applicant.module').then(m => m.ApplicantModule) },
    
        { path: 'ApplicantSkill', loadChildren: () => import('./ApplicantSkill/ApplicantSkill.module').then(m => m.ApplicantSkillModule) },
    
        { path: 'Application', loadChildren: () => import('./Application/Application.module').then(m => m.ApplicationModule) },
    
        { path: 'Document', loadChildren: () => import('./Document/Document.module').then(m => m.DocumentModule) },
    
        { path: 'Interview', loadChildren: () => import('./Interview/Interview.module').then(m => m.InterviewModule) },
    
        { path: 'InterviewAssignment', loadChildren: () => import('./InterviewAssignment/InterviewAssignment.module').then(m => m.InterviewAssignmentModule) },
    
        { path: 'Interviewer', loadChildren: () => import('./Interviewer/Interviewer.module').then(m => m.InterviewerModule) },
    
        { path: 'Offer', loadChildren: () => import('./Offer/Offer.module').then(m => m.OfferModule) },
    
        { path: 'Position', loadChildren: () => import('./Position/Position.module').then(m => m.PositionModule) },
    
        { path: 'PositionSkill', loadChildren: () => import('./PositionSkill/PositionSkill.module').then(m => m.PositionSkillModule) },
    
        { path: 'Review', loadChildren: () => import('./Review/Review.module').then(m => m.ReviewModule) },
    
        { path: 'Skill', loadChildren: () => import('./Skill/Skill.module').then(m => m.SkillModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }