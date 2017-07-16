import { Component, OnInit, Input } from '@angular/core';
import { FONTS } from 'foundation/fonts';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() fontSize = 13;
  @Input() fontFamily = FONTS[0];
  @Input() fontColor = '#ccc';
  @Input() backgroundColor = '#c87960';

  get fonts(): string[] {
    return FONTS;
  }

  constructor() { }

  ngOnInit() {
  }

}
