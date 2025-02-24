import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter , Route, Routes } from '@angular/router';

// import { routes } from './app.routes';
import { StarPatternComponent } from './star-pattern/star-pattern.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),StarPatternComponent  ],
};
