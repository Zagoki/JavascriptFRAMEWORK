import { Component, inject, signal, effect } from '@angular/core';
import { FavoritesService } from '../../../core/services/favorites.service';
import { RecipesService } from '../../../core/services/recipes.service';
import { DetailedRecipeCardComponent } from '../detailed-recipe-card/detailed-recipe-card.component';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [NgFor, AsyncPipe, DetailedRecipeCardComponent],
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