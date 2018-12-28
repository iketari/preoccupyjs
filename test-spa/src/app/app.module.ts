import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ControlComponent } from './control/control.component';
import { ScrollComponent } from './scroll/scroll.component';

import { AceEditorModule } from 'ng2-ace-editor';
import { NgxSummernoteModule } from 'ngx-summernote';
import { AceComponent } from './ace/ace.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    AceEditorModule,
    NgxSummernoteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
