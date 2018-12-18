import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ControlComponent } from './control/control.component';
import { ScrollComponent } from './scroll/scroll.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
