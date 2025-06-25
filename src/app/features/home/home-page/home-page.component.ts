import { Component, inject, signal, effect, computed } from '@angular/core';
import { RecipesService } from '../../../core/services/recipes.service';
import { RecipeCategoryComponent } from '../../recipes/recipe-category/recipe-category.component';
import { RecipeCategoriesComponent } from '../../recipes/recipe-categories/recipe-categories.component';
import { DetailedRecipeCardComponent } from '../../recipes/detailed-recipe-card/detailed-recipe-card.component'; // à créer
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RecipeCategoryComponent,
    RecipeCategoriesComponent,
    DetailedRecipeCardComponent,
    FormsModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public recipesService = inject(RecipesService);
  public selectedCategory = signal<string | null>(null);
  public searchTerm = '';
  public searchResults = signal<any[]>([]);

  constructor() {
    // Charge les catégories au chargement du composant
    this.recipesService.fetchCategories();
    // Sélectionne la première catégorie automatiquement si aucune sélectionnée
    effect(() => {
      const cats = this.recipesService.categories();
      if (cats && cats.length && !this.selectedCategory()) {
        this.selectedCategory.set(cats[0]);
      }
    });
  }

  onCategorySelected(category: string) {
    this.selectedCategory.set(category);
  }

  async onSearchChange(term: string) {
    this.searchTerm = term;
    if (term && term.length > 0) {
      const results = await this.recipesService.searchRecipes(term);
      this.searchResults.set(results || []);
    } else {
      this.searchResults.set([]);
    }
  }
}