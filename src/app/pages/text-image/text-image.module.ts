import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TextImageComponent } from './text-image.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TextImageComponent,
  },
];

@NgModule({
  declarations: [TextImageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  exports: [],
  providers: [],
  bootstrap: [],
})
export class TextImageModule {}
