import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Receipe } from '../../receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  @Input() receipe:Receipe;
  @Output() receipeSelected=new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onSelected() {
this.receipeSelected.emit();
  }

}
