import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Interviewer-card.component.html',
  styleUrls: ['./Interviewer-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Interviewer-card]': 'true'
  }
})

export class InterviewerCardComponent {


}