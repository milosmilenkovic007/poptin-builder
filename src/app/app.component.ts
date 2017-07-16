import { Component } from '@angular/core';

import { FONTS, UIFontStyle } from '../foundation/fonts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideBarOpen = true;
  font = new UIFontStyle();
  backgroundColor = '#c87960';
}
