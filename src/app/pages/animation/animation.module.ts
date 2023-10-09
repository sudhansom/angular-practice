import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimationComponent } from './animation.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AnimationComponent,
  },
];

@NgModule({
  declarations: [AnimationComponent],
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  exports: [],
  providers: [],
  bootstrap: [],
})
export class AnimationModule {}
