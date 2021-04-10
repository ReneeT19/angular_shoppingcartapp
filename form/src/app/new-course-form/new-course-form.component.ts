import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
  newCourses = [
    {id:1, name: 'Java'},
    {id:2, name: 'Angular'},
  ]
  log(x) {console.log(x);}
  
  constructor() { }

  ngOnInit(): void {
  }
  submit(f) {
    console.log(f);
  }
}
