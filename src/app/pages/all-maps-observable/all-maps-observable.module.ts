import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AllMapsObservableComponent } from "./all-maps-observable.component";

const appRoutes: Routes = [
  {
    path: '',
    component: AllMapsObservableComponent
  }
]

@NgModule({
  declarations: [
    AllMapsObservableComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  exports:[],
  providers: [],
  bootstrap: [],
})
export class AllMapsObservableModule {}
