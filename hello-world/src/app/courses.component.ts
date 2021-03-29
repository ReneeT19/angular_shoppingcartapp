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
      `
    //   <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
})
export class CoursesComponent {
    email = "me@example.com";

    isActive = true;
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