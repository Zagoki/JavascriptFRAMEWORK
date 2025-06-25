import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dietDetector',
  standalone: true
})
export class DietDetectorPipe implements PipeTransform {
  transform(recipe: any): string {
    if (!recipe) return 'Classic';

    // Liste d'ingrédients d'origine animale courants
    const animalIngredients = [
      'beef', 'chicken', 'pork', 'fish', 'lamb', 'duck', 'turkey', 'veal', 'shrimp', 'crab', 'lobster', 'bacon', 'ham', 'anchovy', 'salmon', 'tuna', 'egg', 'eggs', 'milk', 'cheese', 'cream', 'butter', 'yogurt', 'honey'
    ];

    // Liste d'ingrédients d'origine animale mais autorisés pour végétariens (pas vegan)
    const vegetarianButNotVegan = [
      'egg', 'eggs', 'milk', 'cheese', 'cream', 'butter', 'yogurt', 'honey'
    ];

    // Récupère tous les ingrédients de la recette
    const ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ing = recipe[`strIngredient${i}`];
      if (ing && ing.trim()) {
        ingredients.push(ing.trim().toLowerCase());
      }
    }

    // Si contient viande/poisson : Classic
    if (ingredients.some(ing => animalIngredients.includes(ing) && !vegetarianButNotVegan.includes(ing))) {
      return 'Classic';
    }

    // Si contient oeuf/lait/fromage/beurre/miel : Vegetarian
    if (ingredients.some(ing => vegetarianButNotVegan.includes(ing))) {
      return 'Vegetarian';
    }

    // Sinon : Vegan
    return 'Vegan';
  }
}