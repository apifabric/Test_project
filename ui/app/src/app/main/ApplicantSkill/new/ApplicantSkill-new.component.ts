import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ApplicantSkill-new',
  templateUrl: './ApplicantSkill-new.component.html',
  styleUrls: ['./ApplicantSkill-new.component.scss']
})
export class ApplicantSkillNewComponent {
  @ViewChild("ApplicantSkillForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}