import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import {Receipe} from '../receipe.model'
import { ReceipeService } from '../receipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit, OnDestroy {
 
 
 receipes: Receipe[];
  subscription: Subscription;

  constructor(private receipeService: ReceipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.receipeService.receipesChanged
    .subscribe(
      (receipes: Receipe[]) => {
        this.receipes = receipes;
      }
    );
    
    this.receipes = this.receipeService.getReceipes();
  }
  onNewReceipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
   this.subscription.unsubscribe();
  }
}
