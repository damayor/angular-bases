import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames = ['Spiderman', 'IronMan', ' Hulk', 'She Hulk', 'Thor']
  public deletedHero?: string ;


  public removeLastHero() {
    this.deletedHero = this.heroNames.pop();
  }

}
