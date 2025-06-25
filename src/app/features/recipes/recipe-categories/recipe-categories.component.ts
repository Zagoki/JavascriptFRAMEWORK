import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-recipe-categories',
  standalone: true,
  imports: [MatButtonModule, NgFor, NgClass],
  template: `
    <div class="categories-list">
      <button
        mat-raised-button
        *ngFor="let cat of categories"
        [color]="cat === selectedCategory ? 'primary' : undefined"
        (click)="selectCategory(cat)"
        [ngClass]="{ selected: cat === selectedCategory }"
      >
        {{ cat }}
      </button>
    </div>
  `,
  styleUrl: './recipe-categories.component.scss'
})
export class RecipeCategoriesComponent {
  @Input() categories: string[] | null = null;
  @Input() selectedCategory: string | null = null;
  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(cat: string) {
    this.categorySelected.emit(cat);
  }
}
