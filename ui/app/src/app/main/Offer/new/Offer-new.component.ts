import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Offer-new',
  templateUrl: './Offer-new.component.html',
  styleUrls: ['./Offer-new.component.scss']
})
export class OfferNewComponent {
  @ViewChild("OfferForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}