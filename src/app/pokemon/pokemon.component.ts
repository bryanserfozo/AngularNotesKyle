import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../IPokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  entry : String = "";

  image : String = "";

  result : IPokemon = {
    name : "",
    hp : 0,
    atk : 0,
    def : 0,
    sp_atk : 0,
    sp_def : 0,
    speed :0
  }

  search(species: String){
    this.pokemonService.getPokeData(species)
    .subscribe((data:any) => {
      console.log(data.sprites.back_default)
      this.image = data.sprites.back_default;
      this.result = {
        name : data.name,
        hp : data.stats[0].base_stat,
        atk : data.stats[1].base_stat,
        def : data.stats[2].base_stat,
        sp_atk : data.stats[3].base_stat,
        sp_def : data.stats[4].base_stat,
        speed : data.stats[5].base_stat,
      }
    })
  }

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
  }

}
