import { Component, inject, signal, effect } from '@angular/core';
import { FavoritesService } from '../../../core/services/favorites.service';
import { RecipesService } from '../../../core/services/recipes.service';
import { DetailedRecipeCardComponent } from '../detailed-recipe-card/detailed-recipe-card.component';
import { NgFor, AsyncPipe } from '@angular/common';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
=======
>>>>>>> 400314572df4361d0183fdade37e28022de7f022

@Component({
  selector: 'app-favorites-page',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, NgFor, AsyncPipe, DetailedRecipeCardComponent],
=======
  imports: [NgFor, AsyncPipe, DetailedRecipeCardComponent],
>>>>>>> 400314572df4361d0183fdade37e28022de7f022
  template: `
    <h2>Mes recettes favorites</h2>
    <ng-container *ngIf="recipes() as favs">
      <app-detailed-recipe-card
        *ngFor="let recipe of favs"
        [recipe]="recipe">
      </app-detailed-recipe-card>
      <p *ngIf="!favs.length">Aucune recette favorite.</p>
    </ng-container>
  `
})
export class FavoritesPageComponent {
  private favorites = inject(FavoritesService);
  private recipesService = inject(RecipesService);
  public recipes = signal<any[]>([]);

  constructor() {
    effect(() => {
      const ids = this.favorites.favorites();
      Promise.all(ids.map(id => this.recipesService.getRecipeById(id)))
        .then(results => this.recipes.set(results.filter(r => !!r)));
    });
  }
}