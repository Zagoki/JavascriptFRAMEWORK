import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-category',
  standalone: true,
  imports: [],
  templateUrl: './recipe-category.component.html',
  styleUrl: './recipe-category.component.scss'
})
export class RecipeCategoryComponent {
  @Input() category: string | null = null;
}
