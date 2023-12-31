import { Component , inject, EventEmitter, Output} from '@angular/core';
import { StudentService } from '../services/student.service';

import { Student } from '../models/student';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
})
export class CreateStudentComponent {
  @Output() onCreate = new EventEmitter();
  dataService = inject(StudentService);
  submitForm(form: NgForm){
    this.dataService.students.push(new Student(form.value.id, form.value.name, form.value.userName, form.value.password));
    form.reset();
    this.onCreate.emit();
  }
}
