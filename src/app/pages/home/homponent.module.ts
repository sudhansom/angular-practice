import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomepageComponent } from "./homepage.component";
import { CarousalModule } from "src/app/components/carousal/carousal.module";
import { BetterHighlightDirective } from "src/app/directives/better-highlight.directive";
import { BasicHighlightDirective } from "src/app/directives/basic-highlight.directive";
import { NavbarModule } from "src/app/components/navbar/navbar.module";

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }
]

@NgModule({
  declarations: [
    HomepageComponent,
    BetterHighlightDirective,
    BasicHighlightDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    CarousalModule,
    NavbarModule,
  ],
  exports:[],
  providers: [],
  bootstrap: [],
})
export class HomepageModule {}
