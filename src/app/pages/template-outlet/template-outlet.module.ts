import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TemplateOutletComponent } from './template-outlet.component';
import { CustomTableComponent } from 'src/app/components/custom-table/custom-table.component';

const appRoutes: Routes = [{ path: '', component: TemplateOutletComponent }];

@NgModule({
  declarations: [TemplateOutletComponent, CustomTableComponent],
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  exports: [TemplateOutletComponent],
  providers: [],
  bootstrap: [],
})
export class TemplateOutletModule {}
