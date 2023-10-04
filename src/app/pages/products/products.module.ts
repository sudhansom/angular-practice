import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  exports: [],
  providers: [],
  bootstrap: [],
})
export class ProductsModule {}
