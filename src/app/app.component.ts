import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; // Ajout du module

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule], // Ajout ici
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cooking-buddy';
}
