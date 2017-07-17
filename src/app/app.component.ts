import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { FONTS, UIFontStyle } from '../foundation/fonts';
import { Store } from '@ngrx/store';
import { AppState, RESET } from 'app/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sideBarOpen = true;

  constructor(private store: Store<AppState>) {

  }

  resetApp() {
    this.store.dispatch({
      type: RESET
    });
  }

  ngOnInit() {

  }
}
