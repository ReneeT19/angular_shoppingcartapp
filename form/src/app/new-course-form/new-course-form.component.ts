import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  //use formbuilder class
  form2;

  constructor(fb: FormBuilder) {
    this.form2=fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone:[]
      }),
      topics:fb.array([])
    });
  }


  //use form array
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value='';
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  
  get topics() {
    return this.form.get('topics') as FormArray;
  }



  newCourses = [
    {id:1, name: 'Java'},
    {id:2, name: 'Angular'},
  ]
  log(x) {console.log(x);}
  
  submit(f) {
    console.log(f);
  }
}
