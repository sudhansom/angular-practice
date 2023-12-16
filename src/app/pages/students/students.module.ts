import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { StudentsComponent } from "./students.component";
import { StudentComponent } from "./student/student.component";
import { CreateStudentComponent } from "./create-student/create-student.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";

import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {path: '',
  component: StudentsComponent
}
]

@NgModule({
  declarations: [StudentsComponent, StudentComponent, CreateStudentComponent, StudentDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
  ],
})
export class StudentsModule {

}
