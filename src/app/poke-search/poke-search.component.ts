import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pokemon } from '../Pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.css']
})
export class PokeSearchComponent implements OnInit {

  pokemonService: PokemonService;
  pokemonId!: number;

  @Output() // @Output() creates a "custom event", which in this case is called pokemonRetrieved
  // We can then listen for this event in the parent component
  // The actual event object in this case will be a Pokemon object
  pokemonRetrieved: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  @Output()
  clear: EventEmitter<void> = new EventEmitter<void>();

  constructor(pokemonService: PokemonService) {
    this.pokemonService = pokemonService;
  }

  ngOnInit(): void {
  }

  addPokemon() {
    this.pokemonService.getPokemonById(this.pokemonId).subscribe((res) => {
      this.pokemonRetrieved.emit(res.body!); // Trigger an actual pokemonRetrieved event, where the object will represent
      // an actual Pokemon
    });
  }

  clearPokemon() {
    this.clear.emit();
  }

}
