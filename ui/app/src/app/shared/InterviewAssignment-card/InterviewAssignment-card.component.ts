import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './InterviewAssignment-card.component.html',
  styleUrls: ['./InterviewAssignment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.InterviewAssignment-card]': 'true'
  }
})

export class InterviewAssignmentCardComponent {


}