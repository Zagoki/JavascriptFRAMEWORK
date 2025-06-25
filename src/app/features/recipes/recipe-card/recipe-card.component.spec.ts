import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card class="recipe-card">
      <img mat-card-image [src]="recipe.strMealThumb" [alt]="recipe.strMeal" />
      <mat-card-title>{{ recipe.strMeal }}</mat-card-title>
    </mat-card>
  `,
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input() recipe: any;
}
