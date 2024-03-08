import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateOutletComponent } from './template-outlet.component';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [{ path: '', component: TemplateOutletComponent }];

@NgModule({
  declarations: [TemplateOutletComponent],
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  exports: [TemplateOutletComponent],
  providers: [],
  bootstrap: [],
})
export class TemplateOutletModule {}
