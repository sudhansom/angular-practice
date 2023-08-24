import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodopageComponent } from "./todopage.component";

const appRoutes: Routes = [
  {
    path: '',
    component: TodopageComponent
  }
]

@NgModule({
  declarations: [
    TodopageComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  exports:[],
  providers: [],
  bootstrap: [],
})
export class TodopageModule {}
