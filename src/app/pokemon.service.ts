import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getPokemonById(id: number): Observable<HttpResponse<Pokemon>> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      observe: 'response'
    })
  }

}
