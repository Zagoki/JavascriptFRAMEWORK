import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../../shared/layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [PageLayoutComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {}
