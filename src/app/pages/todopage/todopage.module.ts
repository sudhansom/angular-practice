import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodopageComponent } from "./todopage.component";
import { EachTaskComponent } from "src/app/components/each-task/each-task.component";
import { HeaderComponent } from "src/app/components/header/header.component";
import { TasksComponent } from "src/app/components/tasks/tasks.component";


const appRoutes: Routes = [
  {
    path: '',
    component: TodopageComponent
  }
]

@NgModule({
  declarations: [
    TodopageComponent,
    EachTaskComponent,
    HeaderComponent,
    TasksComponent
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
