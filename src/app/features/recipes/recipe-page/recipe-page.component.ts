import { Component, inject, signal, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../../core/services/recipes.service';
import { AsyncPipe, NgIf, NgFor, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { YTHoverPlayDirective } from '../../../shared/directives/yt-hover-play-directive';
import { DietDetectorPipe } from '../../../shared/pipes/diet-detector.pipe';

@Component({
  selector: 'app-recipe-page',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, MatCardModule, YTHoverPlayDirective, CommonModule, DietDetectorPipe],
  template: `
    <ng-container *ngIf="recipe() as recipe">
      <mat-card>
        <mat-card-header>
          <mat-card-title>{{ recipe.strMeal }}</mat-card-title>
          <mat-card-subtitle>
            Catégorie : {{ recipe.strCategory }} | Origine : {{ recipe.strArea }}
            <a *ngIf="recipe.strSource" [href]="recipe.strSource" target="_blank" style="margin-left:1rem;">Source</a>
            <span style="margin-left:1rem;">
              <span class="diet-badge">
                {{ recipe | dietDetector }}
              </span>
            </span>
          </mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <img mat-card-image [src]="recipe.strMealThumb" [alt]="recipe.strMeal" style="max-width:300px;"/>
          <h3>Ingrédients</h3>
          <ul>
            <li *ngFor="let ing of ingredients(recipe)">
              {{ ing }}
            </li>
          </ul>
          <div *ngIf="recipe.strYoutube">
            <h3>Vidéo</h3>
            <iframe width="560" height="315"
              [src]="youtubeEmbedUrl(recipe.strYoutube)"
              frameborder="0"
              allowfullscreen
              appYTHoverPlay>
            </iframe>
          </div>
          <h3>Instructions</h3>
          <p>{{ recipe.strInstructions }}</p>
        </mat-card-content>
      </mat-card>
    </ng-container>
  `
})
export class RecipePageComponent {
  private route = inject(ActivatedRoute);
  private recipesService = inject(RecipesService);

  public recipe = signal<any | null>(null);

  constructor() {
    effect(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.recipesService.getRecipeById(id).then((data) => {
          this.recipe.set(data);
        });
      }
    });
  }

  ingredients(recipe: any): string[] {
    const ings: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ing = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ing && ing.trim()) {
        ings.push(`${ing}${measure ? ' (' + measure + ')' : ''}`);
      }
    }
    return ings;
  }

  youtubeEmbedUrl(url: string): string {
    const id = url.split('v=')[1];
    return id ? `https://www.youtube.com/embed/${id}?enablejsapi=1` : '';
  }
}