import { Component } from '@angular/core';

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

  onFavoriteChange() {
    console.log("favorite change");
  }
}
