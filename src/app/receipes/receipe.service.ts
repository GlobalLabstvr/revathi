import { Receipe } from './receipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

export class ReceipeService{
receipeSelected = new EventEmitter<Receipe>();

private receipes:Receipe[]=[
        new Receipe(
            'A Test Receipe', 
            'This is simply a test',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('meat', 1),
                new Ingredient('french Fries', 20)
            ]),

            new Receipe(
                'Another Test Receipe', 
                'This is simply a test',
                'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
                [
                    new Ingredient('Buns', 2),
                    new Ingredient('Meat', 20)
                ])
        
      ];

      getReceipes() {
          return this.receipes.slice();
      }
}