import { Injectable } from "@angular/core";

import { Student } from "../models/student";

@Injectable({
  providedIn: 'root',
})
export class StudentService {
students: Student[] = [
  new Student(1, 'Bal Krishna', 'bk', '123456'),
  new Student(1, 'Bhuwan Krishna', 'bk', '123456'),
  new Student(1, 'Resham Krishna', 'rk', '123456'),
  new Student(1, 'Birendra Kumar', 'bk', '123456'),
]
}
