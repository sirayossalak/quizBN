import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarPatternComponent } from './star-pattern/star-pattern.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StarPatternComponent,PokemonListComponent,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sweet';
}
