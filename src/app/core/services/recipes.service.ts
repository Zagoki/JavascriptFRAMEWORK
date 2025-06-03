import { Injectable, signal, effect, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  // Signal pour stocker les catégories de recettes
  readonly categories = signal<string[] | null>(null);

  // Méthode pour charger les catégories depuis TheMealDB
  async fetchCategories() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await res.json();
    this.categories.set(data.categories.map((cat: any) => cat.strCategory));
  }

  // Resource pour récupérer toutes les recettes d'une catégorie
  readonly recipesResource = (category: string) =>
    computed(async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const data = await res.json();
      return data.meals;  
  
    });
}
