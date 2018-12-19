import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ControlComponent } from './control/control.component';
import { ScrollComponent } from './scroll/scroll.component';

import { AceEditorModule } from 'ng2-ace-editor';
import { AceComponent } from './ace/ace.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ControlComponent,
    ScrollComponent,
    AceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
