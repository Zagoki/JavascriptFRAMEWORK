import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PageLayoutComponent } from './shared/layouts/page-layout/page-layout.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule, PageLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cooking-buddy';
}
