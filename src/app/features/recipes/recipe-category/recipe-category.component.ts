import { Component, Input, computed, inject } from '@angular/core';
import { RecipesService } from '../../../core/services/recipes.service';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipe-category',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, RecipeCardComponent],
  template: `
    <div *ngIf="category">
      <h2>Recettes pour la catégorie : {{ category }}</h2>
      <div class="recipes-list">
        <app-recipe-card
          *ngFor="let recipe of recipes() | async"
          [recipe]="recipe">
        </app-recipe-card>
      </div>
    </div>
  `,
  styleUrl: './recipe-category.component.scss'
})
export class RecipeCategoryComponent {
  @Input() category: string | null = null;
  private recipesService = inject(RecipesService);

  recipes = computed(() => {
    if (!this.category) return Promise.resolve([]);
    return this.recipesService.recipesResource(this.category)();
  });
}