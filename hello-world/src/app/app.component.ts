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
}
