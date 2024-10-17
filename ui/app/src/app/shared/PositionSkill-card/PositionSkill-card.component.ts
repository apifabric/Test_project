import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PositionSkill-card.component.html',
  styleUrls: ['./PositionSkill-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PositionSkill-card]': 'true'
  }
})

export class PositionSkillCardComponent {


}