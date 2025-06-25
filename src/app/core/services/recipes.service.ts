import { Injectable, signal, computed } from '@angular/core';

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

  // Méthode pour rechercher des recettes par terme
  async searchRecipes(term: string) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(term)}`);
    const data = await res.json();
    return data.meals || [];
  }

  // Méthode pour récupérer une recette par son identifiant
  async getRecipeById(id: string) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    return data.meals ? data.meals[0] : null;
  }
}
