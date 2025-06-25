import { Component, inject, signal, effect } from '@angular/core';
import { RecipesService } from '../../../core/services/recipes.service';
import { RecipeCategoryComponent } from '../../recipes/recipe-category/recipe-category.component';
import { RecipeCategoriesComponent } from '../../recipes/recipe-categories/recipe-categories.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RecipeCategoryComponent,
    RecipeCategoriesComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public recipesService = inject(RecipesService);
  public selectedCategory = signal<string | null>(null);

  constructor() {
    this.recipesService.fetchCategories();
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
}
