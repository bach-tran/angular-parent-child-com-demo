import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../Pokemon';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit {

  // @Input on top of a field will expose that field as a property on which you can do property binding
  @Input()
  pokemon!: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
