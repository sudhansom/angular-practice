import { Component, Input, inject } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentComponent {
@Input() student: Student;
dataService = inject(StudentService);

displayDetail(student: Student){
  this.dataService.selectStudent(student);
}
deleteItem(id: number){
this.dataService.deleteStudent(id);
}
}
