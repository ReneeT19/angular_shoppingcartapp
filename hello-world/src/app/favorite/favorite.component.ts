import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
  // inputs: ['isFavorite']  //this is another approach and you need to remove @Input decorator but this approach has problem when you change the name of isFavorite
})

export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite = false;
  //isFavorite: boolean;  this is equivalent expression
  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;  
    // way to code the toggling
    // this.change.emit(this.isFavorite);
    this.change.emit({ newValue: this.isFavorite }); //pass an object
  }
}

export interface FavoriteChangedEventArgs {
  newValue:boolean
}
