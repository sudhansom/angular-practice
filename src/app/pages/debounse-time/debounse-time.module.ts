import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DebounseTimeComponent } from './debounse-time.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DebounseTimeComponent,
  },
];

@NgModule({
  declarations: [DebounseTimeComponent],
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  exports: [],
  providers: [],
  bootstrap: [],
})
export class ObservableModule {}
