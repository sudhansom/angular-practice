import { EventEmitter, Injectable } from "@angular/core";

import { Student } from "../models/student";

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  selectedStudent = new EventEmitter<Student>()
students: Student[] = [
  new Student(1, 'Bal Krishna', 'bk', '123456'),
  new Student(2, 'Bhuwan Krishna', 'bk', '123456'),
  new Student(3, 'Resham Krishna', 'rk', '123456'),
  new Student(4, 'Birendra Kumar', 'bk', '123456'),
]

selectStudent(student: Student){
  console.log('student: ', student);
  this.selectedStudent.emit(student);
}
deleteStudent(id: number){
  this.students = this.students.filter(student => student.id !== id);
  console.log(this.students.length);
}
}
