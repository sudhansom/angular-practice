import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NavbarComponent,
  },
];

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  exports: [],
  providers: [],
  bootstrap: [],
})
export class NavbarModule {}
