import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string;

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("favorite changed", eventArgs);
  }

  tweet={
    body: '...',
    likesCount: 10,
    isLiked: true
  }


  canSave = false;

  task = {
    title: 'Review application',
    assignee: null
  }

  courses= [1,2];

  viewMode = 'map';

  courses2 = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
  ];

  courses3;

  onAdd() {
    this.courses2.push({ id: 4, name: 'course4'});
  }

  onRemove(course) {
    let index =  this.courses2.indexOf(course);
    this.courses2.splice(index,1);
  }

  onChange(course) {
    course.name = 'UPDATED';
  }

  loadCourses() {
    this.courses3 = [
      {id: 1001, name: 'course1001'},
      {id: 1002, name: 'course1002'},
      {id: 1003, name: 'course1003'},
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
  

}
