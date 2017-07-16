import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TemplatesService {

  constructor(private http: Http) { }

  getTemplateHtml(templateName: string): Observable<string> {
    return this.http.get(`/assets/templates/${templateName}.html`)
      .map((r: Response) => r.text())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
