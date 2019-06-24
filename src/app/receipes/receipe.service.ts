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
            //'https://int.search.tb.ask.com/search/AJimage.jhtml?&enc=0&n=783a5cf1&p2=%5EHJ%5Expu281%5ETTAB02%5Ein&pg=AJimage&pn=1&ptb=59F726FC-AC1F-4612-9F47-C91089AD5E6C&qs=&searchfor=burger+image&si=045454656&ss=sub&st=sb&tpr=sbt&imgs=1p&filter=on&imgDetail=true',
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
      getReceipe(index: number) {
    return this.receipes[index];
      }

      addIngredientsToShoppingList(Ingredients: Ingredient[]) {
        this.slService.addIngredients(Ingredients);
      }
}