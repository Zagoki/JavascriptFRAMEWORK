import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailed-recipe-card',
  standalone: true,
  imports: [MatCardModule, NgFor],
  template: `
    <mat-card class="detailed-recipe-card" (click)="goToRecipe()">
      <img mat-card-image [src]="recipe?.strMealThumb" [alt]="recipe?.strMeal" />
      <mat-card-title>{{ recipe?.strMeal }}</mat-card-title>
      <mat-card-content>
        <p><strong>Catégorie :</strong> {{ recipe?.strCategory }}</p>
        <p><strong>Origine :</strong> {{ recipe?.strArea }}</p>
        <p><strong>Ingrédients :</strong></p>
        <ul>
          <li *ngFor="let ing of ingredients">{{ ing }}</li>
        </ul>
      </mat-card-content>
    </mat-card>
  `
  // styleUrl: './detailed-recipe-card.component.scss'
})
export class DetailedRecipeCardComponent {
  @Input() recipe: any;
  constructor(private router: Router) {}

  goToRecipe() {
    if (this.recipe?.idMeal) {
      this.router.navigate(['/recipe', this.recipe.idMeal]);
    }
  }

  get ingredients(): string[] {
    if (!this.recipe) return [];
    const ings: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ing = this.recipe[`strIngredient${i}`];
      const measure = this.recipe[`strMeasure${i}`];
      if (ing && ing.trim()) {
        ings.push(`${ing}${measure ? ' (' + measure + ')' : ''}`);
      }
    }
    return ings;
  }
}