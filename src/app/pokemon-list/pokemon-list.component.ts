import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component , inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, } from '@angular/forms';
//import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component'; 


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule,RouterModule, FormsModule ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  http = inject(HttpClient);
  pokemonList: any[] = [];
  isLoading = false;

  constructor() {
    this.fetchPokemon();
  }

  fetchPokemon() {
    this.isLoading = true;
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151').subscribe(
      (response) => {
        const pokemonResults = response.results;
        
        // ดึงข้อมูลรายละเอียดของแต่ละโปเกมอน
        this.pokemonList = pokemonResults.map((pokemon: any, index: number) => ({
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
          url: pokemon.url
        }));

        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching Pokémon:', error);
        this.isLoading = false;
      }
    );
  }
}
