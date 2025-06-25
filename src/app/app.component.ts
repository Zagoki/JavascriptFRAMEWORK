import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PageLayoutComponent } from './shared/layouts/page-layout/page-layout.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
// Make sure the path is correct and the directive is standalone
import { YTHoverPlayDirective } from './shared/directives/yt-hover-play.directive';
import { DietDetectorPipe } from './shared/pipes/diet-detector.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, MatSlideToggleModule, PageLayoutComponent, AsyncPipe, NgIf, NgFor, MatCardModule, YTHoverPlayDirective, DietDetectorPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cooking-buddy';
}
