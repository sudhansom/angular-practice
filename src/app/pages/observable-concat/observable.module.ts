import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ObservableComponent } from "./observable.component";

const appRoutes: Routes = [
  {
    path: '',
    component: ObservableComponent
  }
]

@NgModule({
  declarations: [
    ObservableComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  exports:[],
  providers: [],
  bootstrap: [],
})
export class ObservableModule {}
