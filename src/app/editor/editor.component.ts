import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

import { TemplatesService } from 'app/services/templates.service';
import { Store } from '@ngrx/store';
import { AppState, SET_BACKGROUND_COLOR } from 'app/store';

// We need jQuery here because we use external templates HTML
// And to take less size of HTML template do not clog up it with Angular tags
// We will use dynamic watchers and bindings to DOM using jQuery
const $ = window['jQuery'];

const KEY_ESCAPE = 27;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit {
  templateHtml = '';

  public get hostElement() {
    return this.elementRef.nativeElement;
  }

  constructor(
    private tpl: TemplatesService,
    private elementRef: ElementRef,
    private store: Store<AppState>
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.tpl.getTemplateHtml('default')
      .subscribe(
        (template) => this.onTemplateFetch(template),
        () => this.templateHtml = 'Failed to get template'
      );
  }

  onTemplateFetch(template: string) {
    this.templateHtml = template;
    setTimeout(() => this.registerEditorHooks(), 150);
  }

  /**
   * Set editable mode on template part
   *
   * @param {Event} event Event source
   * @param {boolean} isEditable Is element editable
   * @memberof EditorComponent
   */
  setEditableElementStatus(event: Event, isEditable: boolean) {
    const element: HTMLElement = <HTMLElement> event.target;
    element.contentEditable = isEditable.toString();
  }

  /**
   * Register jQuery hooks on template markup
   *
   * @memberof EditorComponent
   */
  registerEditorHooks() {
    $(this.hostElement)
      .find('[data-control]')
      .on('click', (event: MouseEvent) => {
        this.setEditableElementStatus(event, true)
      })
      .on('keydown', (event: KeyboardEvent) => {
        if (event.keyCode === KEY_ESCAPE) {
          this.setEditableElementStatus(event, false);
        }
      })
      .draggable();

    this.store.select('backgroundColor').subscribe((newColor: string) => {
      $(this.hostElement)
        .find('.popt')
        .css({
          'background-color': newColor
        });
    });
  }

}
