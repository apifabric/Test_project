import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Interview-card.component.html',
  styleUrls: ['./Interview-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Interview-card]': 'true'
  }
})

export class InterviewCardComponent {


}