import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CarousalComponent } from "./carousal.component";

@NgModule({
  declarations: [
    CarousalComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports:[CarousalComponent],
  providers: [],
  bootstrap: [],
})
export class CarousalModule {}
