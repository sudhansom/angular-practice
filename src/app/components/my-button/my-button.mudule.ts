import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MyButtonComponent } from "./my-button.component";

@NgModule({
  declarations: [
    MyButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[MyButtonComponent],
  providers: [],
  bootstrap: [],
})
export class MyButtonModule {}
