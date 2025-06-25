import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FavoritesService } from '../../../core/services/favorites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  template: `
    <mat-card class="recipe-card" (click)="goToRecipe()">
      <button mat-icon-button (click)="toggleFavorite($event)">
        <mat-icon color="warn">{{ isFavorite() ? 'favorite' : 'favorite_border' }}</mat-icon>
      </button>
      <img mat-card-image [src]="recipe.strMealThumb" [alt]="recipe.strMeal" />
      <mat-card-title>{{ recipe.strMeal }}</mat-card-title>
    </mat-card>
  `,
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input() recipe: any;
  constructor(private router: Router, private favorites: FavoritesService) {}

  goToRecipe() {
    this.router.navigate(['/recipe', this.recipe.idMeal]);
  }

  isFavorite() {
    return this.favorites.isFavorite(this.recipe.idMeal);
  }

  toggleFavorite(event: Event) {
    event.stopPropagation();
    if (this.isFavorite()) {
      this.favorites.removeFavorite(this.recipe.idMeal);
    } else {
      this.favorites.addFavorite(this.recipe.idMeal);
    }
  }
}
