import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getPokeData(species : String): Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + species);
  }

  constructor(private http:HttpClient) { }
}
