import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { FONTS } from 'foundation/fonts';
import { AppState, SET_BACKGROUND_COLOR } from 'app/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  /* Unused */
  fontSize = 13;
  fontFamily = FONTS[0];
  fontColor = '#ccc';

  /* Used */
  backgroundColor = '#c87960';

  get currentBackgroundColor() {
    return this.backgroundColor;
  }

  set currentBackgroundColor(newValue: string) {
    this.store.dispatch({
      type: SET_BACKGROUND_COLOR,
      payload: newValue
    });
  }

  get fonts(): string[] {
    return FONTS;
  }

  constructor(private store: Store<AppState>) {
    store.select('backgroundColor').subscribe((newValue: string) => {
      this.backgroundColor = newValue;
    });
  }

  ngOnInit() {
  }
}
