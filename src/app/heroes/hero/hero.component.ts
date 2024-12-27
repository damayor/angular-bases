import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman'
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription() {
    return `${this.name} - ${this.age}`
  }

  changeHero() {

    this.name = 'spiderman'
  }

  changeAge() {
    this.age = 17
  }

  resetForm() {
    this.name = 'ironman';
    this.age = 45;
  }
}
