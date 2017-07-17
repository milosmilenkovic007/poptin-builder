import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ColorPickerModule } from 'angular2-color-picker';

// ngMaterial dependencies
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditorComponent } from './editor/editor.component';

import { TemplatesService } from './services/templates.service';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

// Store setup
import { StoreModule } from '@ngrx/store';
import { AppState, initialState, backgroundReducer, templateReducer, dirtyReducer } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EditorComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserAnimationsModule,
    ColorPickerModule,
    MaterialModule,
    BrowserModule,
    StoreModule.provideStore({
      backgroundColor: backgroundReducer,
      isDirty: dirtyReducer,
      templateHTML: templateReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    FormsModule,
    HttpModule
  ],
  providers: [
    TemplatesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
