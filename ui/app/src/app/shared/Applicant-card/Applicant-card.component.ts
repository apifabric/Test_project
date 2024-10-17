import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Applicant-card.component.html',
  styleUrls: ['./Applicant-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Applicant-card]': 'true'
  }
})

export class ApplicantCardComponent {


}