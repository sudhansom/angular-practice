import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about.component';

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
    FormsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [],
})
export class AboutModule {}
