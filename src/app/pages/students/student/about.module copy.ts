import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './student.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [],
})
export class AboutModule {}
