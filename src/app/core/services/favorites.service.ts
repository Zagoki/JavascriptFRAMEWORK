import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private readonly STORAGE_KEY = 'favorite_recipes';
  public favorites = signal<string[]>(this.loadFavorites());

  private loadFavorites(): string[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveFavorites(favs: string[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favs));
    this.favorites.set(favs);
  }

  addFavorite(id: string) {
    const favs = this.favorites();
    if (!favs.includes(id)) {
      this.saveFavorites([...favs, id]);
    }
  }

  removeFavorite(id: string) {
    const favs = this.favorites().filter(fav => fav !== id);
    this.saveFavorites(favs);
  }

  isFavorite(id: string): boolean {
    return this.favorites().includes(id);
  }
}