import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Receipe} from '../receipe.model'

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
 @Output() receipeWasSelected=new EventEmitter<Receipe>();
  receipes:Receipe[]=[
    new Receipe('A Test Receipe', 'This is simply a test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }
  onReceipeSelected(receipe:Receipe) {
this.receipeWasSelected.emit(receipe);
  }

}
