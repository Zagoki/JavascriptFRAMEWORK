import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent {}
