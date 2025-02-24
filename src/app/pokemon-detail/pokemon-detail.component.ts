import { CommonModule } from '@angular/common';
import { Component , inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {
  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  pokemon: any = null;
  isLoading = false;

  constructor() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.fetchPokemonDetail(id);
      }
    });
  }

  fetchPokemonDetail(id: string) {
    this.isLoading = true;
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe(
      (response) => {
        this.pokemon = response;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching Pokémon details:', error);
        this.isLoading = false;
      }
    );
  }
}