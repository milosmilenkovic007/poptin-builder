import { Component, OnInit } from '@angular/core';

import { TemplatesService } from 'app/services/templates.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  templateHtml = '';

  constructor(private tpl: TemplatesService) { }

  ngOnInit() {
    this.tpl.getTemplateHtml('default')
      .subscribe(
        (template) => this.onTemplateFetch(template),
        () => this.templateHtml = 'Failed to get template'
      );
  }

  onTemplateFetch(template: string) {
    this.templateHtml = template;

  }

}
