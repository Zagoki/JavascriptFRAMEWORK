import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card class="recipe-card" (click)="goToRecipe()">
      <img mat-card-image [src]="recipe.strMealThumb" [alt]="recipe.strMeal" />
      <mat-card-title>{{ recipe.strMeal }}</mat-card-title>
    </mat-card>
  `,
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input() recipe: any;
  constructor(private router: Router) {}

  goToRecipe() {
    this.router.navigate(['/recipe', this.recipe.idMeal]);
  }
}