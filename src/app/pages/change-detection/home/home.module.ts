import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, NewsletterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [],
})
export class HomeModule {}
