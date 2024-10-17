import { MenuRootItem } from 'ontimize-web-ngx';

import { ApplicantCardComponent } from './Applicant-card/Applicant-card.component';

import { ApplicantSkillCardComponent } from './ApplicantSkill-card/ApplicantSkill-card.component';

import { ApplicationCardComponent } from './Application-card/Application-card.component';

import { DocumentCardComponent } from './Document-card/Document-card.component';

import { InterviewCardComponent } from './Interview-card/Interview-card.component';

import { InterviewAssignmentCardComponent } from './InterviewAssignment-card/InterviewAssignment-card.component';

import { InterviewerCardComponent } from './Interviewer-card/Interviewer-card.component';

import { OfferCardComponent } from './Offer-card/Offer-card.component';

import { PositionCardComponent } from './Position-card/Position-card.component';

import { PositionSkillCardComponent } from './PositionSkill-card/PositionSkill-card.component';

import { ReviewCardComponent } from './Review-card/Review-card.component';

import { SkillCardComponent } from './Skill-card/Skill-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Applicant', name: 'APPLICANT', icon: 'view_list', route: '/main/Applicant' }
    
        ,{ id: 'ApplicantSkill', name: 'APPLICANTSKILL', icon: 'view_list', route: '/main/ApplicantSkill' }
    
        ,{ id: 'Application', name: 'APPLICATION', icon: 'view_list', route: '/main/Application' }
    
        ,{ id: 'Document', name: 'DOCUMENT', icon: 'view_list', route: '/main/Document' }
    
        ,{ id: 'Interview', name: 'INTERVIEW', icon: 'view_list', route: '/main/Interview' }
    
        ,{ id: 'InterviewAssignment', name: 'INTERVIEWASSIGNMENT', icon: 'view_list', route: '/main/InterviewAssignment' }
    
        ,{ id: 'Interviewer', name: 'INTERVIEWER', icon: 'view_list', route: '/main/Interviewer' }
    
        ,{ id: 'Offer', name: 'OFFER', icon: 'view_list', route: '/main/Offer' }
    
        ,{ id: 'Position', name: 'POSITION', icon: 'view_list', route: '/main/Position' }
    
        ,{ id: 'PositionSkill', name: 'POSITIONSKILL', icon: 'view_list', route: '/main/PositionSkill' }
    
        ,{ id: 'Review', name: 'REVIEW', icon: 'view_list', route: '/main/Review' }
    
        ,{ id: 'Skill', name: 'SKILL', icon: 'view_list', route: '/main/Skill' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    ApplicantCardComponent

    ,ApplicantSkillCardComponent

    ,ApplicationCardComponent

    ,DocumentCardComponent

    ,InterviewCardComponent

    ,InterviewAssignmentCardComponent

    ,InterviewerCardComponent

    ,OfferCardComponent

    ,PositionCardComponent

    ,PositionSkillCardComponent

    ,ReviewCardComponent

    ,SkillCardComponent

];