import { Receipe } from './receipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class ReceipeService{
receipeSelected = new EventEmitter<Receipe>();

private receipes:Receipe[]=[
        new Receipe(
            'A Test Receipe', 
            'This is simply a test',
           //'https://int.search.tb.ask.com/search/AJimage.jhtml?&enc=0&n=&pg=AJimage&pn=1&qs=&searchfor=burger+images&ss=sub&st=site&tpr=sbt&imgs=1p&filter=on&imgDetail=true',
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

      constructor(private slService: ShoppingListService) {}

      getReceipes() {
          return this.receipes.slice();
      }

      addIngredientsToShoppingList(Ingredients: Ingredient[]) {
        this.slService.addIngredients(Ingredients);
      }
}