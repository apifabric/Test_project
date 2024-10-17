import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Applicant-new',
  templateUrl: './Applicant-new.component.html',
  styleUrls: ['./Applicant-new.component.scss']
})
export class ApplicantNewComponent {
  @ViewChild("ApplicantForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}