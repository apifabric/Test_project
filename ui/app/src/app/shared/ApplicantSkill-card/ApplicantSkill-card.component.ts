import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ApplicantSkill-card.component.html',
  styleUrls: ['./ApplicantSkill-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ApplicantSkill-card]': 'true'
  }
})

export class ApplicantSkillCardComponent {


}