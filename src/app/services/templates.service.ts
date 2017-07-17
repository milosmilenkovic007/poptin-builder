import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { TPL_CSS } from './constants';

const FileSaver = require('file-saver');

@Injectable()
export class TemplatesService {

  constructor(private http: Http) { }

  getTemplateHtml(templateName: string): Observable<string> {
    return this.http.get(`/assets/templates/${templateName}.html`)
      .map((r: Response) => r.text())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveEmbeddedScript(templateHtml: string) {

    const script = `(function(w, d, b) {
      var tpl = '${TPL_CSS}${templateHtml}';
      d.addEventListener('DOMContentLoaded', function() {
        var block = document.createElement('div');
        block.innerHTML = tpl;
        d.head.appendChild(css);
        d.body.appendChild(block);
      });
    }(window, document);`;

    const blob = new Blob([script], {type: 'text/javascript;charset=utf-8'});
    FileSaver.saveAs(blob, 'poptin-embedded.js');
  }

}
