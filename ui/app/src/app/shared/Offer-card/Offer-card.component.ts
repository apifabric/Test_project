import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Offer-card.component.html',
  styleUrls: ['./Offer-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Offer-card]': 'true'
  }
})

export class OfferCardComponent {


}