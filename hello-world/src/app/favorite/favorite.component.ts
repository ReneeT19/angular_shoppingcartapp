import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  isFavorite = false;
  //isFavorite: boolean;  this is equivalent expression
  

  constructor() { }

  ngOnInit(): void {
  }

}
