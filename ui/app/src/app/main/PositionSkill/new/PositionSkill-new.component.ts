import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PositionSkill-new',
  templateUrl: './PositionSkill-new.component.html',
  styleUrls: ['./PositionSkill-new.component.scss']
})
export class PositionSkillNewComponent {
  @ViewChild("PositionSkillForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}