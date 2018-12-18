import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ControlComponent } from './control/control.component';
import { ScrollComponent } from './scroll/scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ControlComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
