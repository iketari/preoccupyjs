import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ControlComponent } from './control/control.component';
import { ScrollComponent } from './scroll/scroll.component';
import { AceComponent } from './ace/ace.component';

const routes: Routes = [
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'control',
    component: ControlComponent
  },
  {
    path: 'scroll',
    component: ScrollComponent
  },
  {
    path: 'ace',
    component: AceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
