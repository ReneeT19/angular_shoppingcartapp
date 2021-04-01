import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',  // <div class="courses"> in css  selector: ".courses" or "#courses"
//    template: '<h2>{{"Title: " + title}}</h2>'
//    template: '<h2>{{ getTitle() }}</h2>'
      template: `
        <button class="btn btn-primary" [class.active]="isActive">Save</button> 
        <button [style.backgroundColor]="isActive ? 'blue': 'white'"></button>
        <div (click)="onDivClicked()">
        <button (click)="onSave($event)">SaveAgain</button>
        </div>

        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        {{course.title | uppercase}}<br/>
        {{course.students | number}}<br/>
        {{course.rating | number: '1.2-2'}} <br/>
        {{course.price | currency: 'AUD': true: '3.2-2'}}<br/>
        {{course.releaseDate | date: 'shortDate'}}

        {{text | summary: 10}}

      `
    //   <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
})
export class CoursesComponent {

    text = `fdsalfhanwviej;newdiw;e`;

    email = "me@example.com";
    isActive = true;

    course = {
        title: "abc",
        rating: 4.6381,
        students: 3007,
        price: 500.95,
        releaseDate: new Date(2021,3,31)
    }
    onDivClicked() {
        
        console.log("Div clicked.");
    }
    onSave($event) {
        $event.stopPropagation();
        console.log("Clicked", $event);
    }

    // onKeyUp(email) {
    //     console.log("Enter was pressed." + email);
    // }
    onKeyUp() {
        console.log(this.email);
    }

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