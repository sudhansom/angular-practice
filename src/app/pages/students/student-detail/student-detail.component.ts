import { Component, OnInit, inject } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentDetailComponent implements OnInit {
studentService = inject(StudentService);
selectedStudent: Student;

ngOnInit(){
  this.studentService.selectedStudent.subscribe(student => this.selectedStudent = student);
}
}
