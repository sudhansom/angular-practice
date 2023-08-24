import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodopageComponent } from "./todopage.component";
import { HeaderModule } from "src/app/components/header/header.module";
import { TasksModule } from "src/app/components/tasks/tasks.module";

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
    HeaderModule,
    TasksModule,
  ],
  exports:[],
  providers: [],
  bootstrap: [],
})
export class TodopageModule {}
