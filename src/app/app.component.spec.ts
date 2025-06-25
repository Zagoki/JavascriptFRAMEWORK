import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { YTHoverPlayDirective } from '../../shared/directives/yt-hover-play.directive';
import { DietDetectorPipe } from '../../../shared/pipes/diet-detector.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSlideToggleModule,
    AsyncPipe,
    NgIf,
    NgFor,
    MatCardModule,
    DietDetectorPipe
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cooking-buddy';
}
