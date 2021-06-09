import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'Pokeapp';
  pokemons: {name: string, health: number, img: string}[] = [
    {name: 'Carapuce', health: 70, img: 'assets/carapuce.png'},
    {name: 'Dracaufeu', health: 120, img: 'assets/dracaufeu.png'}
  ];
}
