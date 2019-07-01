import { Receipe } from './receipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';



@Injectable()
export class ReceipeService{
 receipesChanged = new Subject<Receipe[]>();
private receipes:Receipe[]=[
        new Receipe(
            'A Test Receipe', 
            'This is simply a test',
           'https://az870929.vo.msecnd.net/cdn/media/home/recipes/recipes/s/scrambledeggstomatoesbrie/skilletbbqchickenwithgrilledcornbread320x285/skilletbbqchickenwithgrilledcornbread840x470.ashx',
           //'https://int.search.tb.ask.com/search/AJimage.jhtml?&enc=0&n=&pg=AJimage&pn=1&qs=&searchfor=burger+images&ss=sub&st=site&tpr=sbt&imgs=1p&filter=on&imgDetail=true',
            //'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            //'https://int.search.tb.ask.com/search/AJimage.jhtml?&enc=0&n=783a5cf1&p2=%5EHJ%5Expu281%5ETTAB02%5Ein&pg=AJimage&pn=1&ptb=59F726FC-AC1F-4612-9F47-C91089AD5E6C&qs=&searchfor=burger+image&si=045454656&ss=sub&st=sb&tpr=sbt&imgs=1p&filter=on&imgDetail=true',
            [
                new Ingredient('meat', 1),
                new Ingredient('french Fries', 20)
            ]),

            new Receipe(
                'Another Test Receipe', 
                'This is simply a test',
                //'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBEEd8bd1Ig7jAYPj4FHwMgPr234c1whB0lvlMDaX4gxRFxeQb',
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

      addReceipe(receipe: Receipe) {
        this.receipes.push(receipe);
        this.receipesChanged.next(this.receipes.slice());
      }
    
      updateReceipe(index: number, newReceipe: Receipe) {
        this.receipes[index] = newReceipe;
        this.receipesChanged.next(this.receipes.slice());
      }
    
      deleteReceipe(index: number) {
        this.receipes.splice(index, 1);
        this.receipesChanged.next(this.receipes.slice());
      } 
}