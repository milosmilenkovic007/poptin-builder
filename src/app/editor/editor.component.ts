import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

import { TemplatesService } from 'app/services/templates.service';
import { Store } from '@ngrx/store';
import { AppState, SET_BACKGROUND_COLOR, SET_TEMPLATE_DEFAULT, SET_TEMPLATE, MARK_AS_DIRTY } from 'app/store';

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
  isDirty = true;
  originalTemplate = '';

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
        (template) => {
          this.store.dispatch({ type: SET_TEMPLATE_DEFAULT, payload: template });
          this.originalTemplate = '' + template;
          this.onTemplateFetch(template);
        },
        () => this.templateHtml = 'Failed to get template'
      );

    this.store.select('isDirty').subscribe((dirty: boolean) => {
      /** Reset editor when isDirty changes from true to false **/
      if (!dirty) {
        this.templateHtml = '';
        // Async call with timeout required to detect and apply changes by Angular
        setTimeout(() => this.onTemplateFetch(this.originalTemplate + ''));
      }
    });
  }

  onTemplateFetch(template: string) {
    this.templateHtml = template;

    this.store.dispatch({
      type: SET_TEMPLATE_DEFAULT,
      payload: template
    });

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

    if (!isEditable) {
      this.commitHtmlChanges();
    }
  }

  commitHtmlChanges() {
    this.store.dispatch({
      type: SET_TEMPLATE,
      payload: $(this.hostElement).find('.popt').html()
    });
  }

  /**
   * Register jQuery hooks on template markup
   *
   * @memberof EditorComponent
   */
  registerEditorHooks() {
    $(this.hostElement)
      .on('blur keyup paste input', '[contenteditable]', () => {
        this.store.dispatch({
          type: MARK_AS_DIRTY
        });

        this.commitHtmlChanges();
      })
      .find('[data-control]')
      .on('click', (event: MouseEvent) => {

        this.store.dispatch({
          type: MARK_AS_DIRTY
        });

        this.setEditableElementStatus(event, true);
        return false;
      })
      .on('keydown', (event: KeyboardEvent) => {
        if (event.keyCode === KEY_ESCAPE) {
          this.setEditableElementStatus(event, false);
        }
      })
      .draggable({
        cancel: false,
        start: () => {
          this.store.dispatch({ type: MARK_AS_DIRTY });
          this.commitHtmlChanges();
        }
      });

    this.store.select('backgroundColor').subscribe((newColor: string) => {
      this.store.dispatch({
        type: MARK_AS_DIRTY
      });

      $(this.hostElement)
        .find('.popt')
        .css({
          'background-color': newColor
        });

      this.store.dispatch({
        type: SET_TEMPLATE,
        payload: $(this.hostElement).find('.popt').html()
      });
    });
  }

}
