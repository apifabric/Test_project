import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Interviewer-new',
  templateUrl: './Interviewer-new.component.html',
  styleUrls: ['./Interviewer-new.component.scss']
})
export class InterviewerNewComponent {
  @ViewChild("InterviewerForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}