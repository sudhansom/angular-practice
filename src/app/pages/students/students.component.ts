import { Component, inject } from '@angular/core';
import { Student } from './models/student';
import { StudentService } from './services/student.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsComponent {
  dataService = inject(StudentService);
  allStudents: Student[] = this.dataService.students;

}
