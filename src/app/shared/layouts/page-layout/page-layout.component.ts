import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-layout',
  standalone: true, // composannt peux etre utilisé sans etre re re re declaré 
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent {}
