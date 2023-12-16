import { Component , inject, EventEmitter, Output} from '@angular/core';
import { StudentService } from '../services/student.service';

import { Student } from '../models/student';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateStudentComponent {
  @Output() onCreate = new EventEmitter();
  dataService = inject(StudentService);
  submitForm(form: any){
    console.log(form.value);
    this.dataService.students.push(new Student(form.value.id, form.value.name, form.value.userName, form.value.password));
    this.onCreate.emit();
  }
}
