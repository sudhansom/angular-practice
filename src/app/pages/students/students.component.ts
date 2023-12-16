import { Component, OnInit, inject } from '@angular/core';
import { Student } from './models/student';
import { StudentService } from './services/student.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsComponent implements OnInit {
  dataService = inject(StudentService);
  allStudents$: Observable<Student[]>;

  ngOnInit(): void {
      this.allStudents$ = this.dataService.getAllStudents();
  }
}
