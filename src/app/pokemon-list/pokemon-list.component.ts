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

  typeIcons: { [key: string]: string } = {
    normal: '⚪', fire: '🔥', water: '💧', electric: '⚡', grass: '🌿', ice: '❄️',
    fighting: '🥊', poison: '☠️', ground: '🌎', flying: '🕊️', psychic: '🔮',
    bug: '🐛', rock: '🪨', ghost: '👻', dragon: '🐉', dark: '🌑', steel: '🔩', fairy: '✨'
  };
  

  http = inject(HttpClient);
  pokemonList: any[] = [];
  filteredPokemon: any[] = [];
  isLoading = false;
  searchText = '';
  expandedPokemonId: number | null = null; //  ID

  

  constructor() {
    this.fetchPokemon();
  }

  fetchPokemon() {
    this.isLoading = true;
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151').subscribe(
      (response) => {
        this.pokemonList = response.results.map((pokemon: any, index: number) => ({
          id: index + 1,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
          url: pokemon.url,
          details: null 
        }));
        this.filteredPokemon = [...this.pokemonList];
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching Pokémon:', error);
        this.isLoading = false;
      }
    );
  }

  filterPokemon() {
    this.filteredPokemon = this.pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  


  fetchPokemonDetails(pokemon: any) {
    if (pokemon.details) {
      this.expandedPokemonId = this.expandedPokemonId === pokemon.id ? null : pokemon.id;
      return;
    }
  
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`).subscribe(
      (data) => {
        pokemon.details = {
          weight: data.weight,
          height: data.height,
          abilities: data.abilities.map((a: any) => a.ability.name),
          types: data.types.map((t: any) => t.type.name),
          stats: data.stats.map((s: any) => ({
            name: s.stat.name,
            value: s.base_stat
          }))
        };
        this.expandedPokemonId = pokemon.id;
      },
      (error) => {
        console.error('Error fetching Pokémon details:', error);
      }
    );
  }
  }

