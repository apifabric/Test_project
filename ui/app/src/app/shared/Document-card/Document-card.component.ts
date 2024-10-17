import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Document-card.component.html',
  styleUrls: ['./Document-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Document-card]': 'true'
  }
})

export class DocumentCardComponent {


}