import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header.component";
import { MyButtonModule } from "../my-button/my-button.mudule";


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MyButtonModule,
  ],
  exports:[HeaderComponent],
  providers: [],
  bootstrap: [],
})
export class HeaderModule {}
