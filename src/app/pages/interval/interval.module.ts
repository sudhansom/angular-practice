import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { IntervalComponent } from './interval.component';

import { MatIconModule } from '@angular/material/icon';

const appRoutes: Routes = [
  {
    path: '',
    component: IntervalComponent,
  },
];

@NgModule({
  declarations: [IntervalComponent],
  imports: [
    CommonModule,
    NavbarModule,
    MatIconModule,
    RouterModule.forChild(appRoutes),
  ],
  exports: [],
  providers: [],
  bootstrap: [],
})
export class IntervalModule {}
