import { Component, Input, computed, inject } from '@angular/core';
import { RecipesService } from '../../../core/services/recipes.service';
import { NgIf, NgFor } from '@angular/common';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipe-category',
  standalone: true,
  imports: [NgIf, NgFor, RecipeCardComponent],
  template: `
    <div *ngIf="category">
      <h2>Recettes pour la catégorie : {{ category }}</h2>
      <div class="recipes-list">
        <app-recipe-card
          *ngFor="let recipe of recipes()"
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
    if (!this.category) return [];
    // Attention: recipesResource est async, il faut gérer la promesse
    // Ici, on suppose que tu as adapté pour retourner un signal synchronisé ou tu utilises un async pipe dans le template
    // Pour simplifier, on suppose que recipesResource retourne un signal ou tu adaptes le template avec async pipe
    return this.recipesService.recipesResource(this.category)();
  });
}
