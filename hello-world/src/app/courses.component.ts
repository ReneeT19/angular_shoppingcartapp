import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',  // <div class="courses"> in css  selector: ".courses" or "#courses"
//    template: '<h2>{{"Title: " + title}}</h2>'
//    template: '<h2>{{ getTitle() }}</h2>'
      template: `
        <h2> {{title}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li> 
        </ul>
      `
})
export class CoursesComponent {
    title = " List of courses";
    //method
    getTitle() {
        return this.title;
    }

    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}