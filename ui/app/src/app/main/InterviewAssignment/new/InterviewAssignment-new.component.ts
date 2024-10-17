import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'InterviewAssignment-new',
  templateUrl: './InterviewAssignment-new.component.html',
  styleUrls: ['./InterviewAssignment-new.component.scss']
})
export class InterviewAssignmentNewComponent {
  @ViewChild("InterviewAssignmentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}