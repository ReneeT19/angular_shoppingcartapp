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

<<<<<<< HEAD
  canSave = false;

  task = {
    title: 'Review application',
    assignee: null
  }
=======
  courses= [1,2];

  viewMode = 'map';
  
>>>>>>> 91fc5a46a5b491d61acbf6c7fab6653cc1208759
}
