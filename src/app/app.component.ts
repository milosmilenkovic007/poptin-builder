import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { FONTS, UIFontStyle } from '../foundation/fonts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sideBarOpen = true;

  ngOnInit() {

  }
}
