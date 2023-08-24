import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EachTaskComponent } from "./each-task.component";

@NgModule({
  declarations:[EachTaskComponent],
  imports: [CommonModule],
  exports: [EachTaskComponent],
  providers:[]
})

export class EachTaskModule{

}
