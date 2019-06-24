import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Receipe} from '../receipe.model'
import { ReceipeService } from '../receipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
 
 receipes: Receipe[];

  constructor(private receipeService: ReceipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.receipes = this.receipeService.getReceipes();
  }
  onNewReceipe() {

  }
}
