import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public list: Array<string> = ['Volvo', 'Seat', 'Subaru', 'Skoda', 'Volkswagen', 'Toyota'];
  public selected;

  setElement(element) {
    // cos z nim mozna zrobic
    this.selected = element;
  }

  clearElement() {
    // kiedy chcemy wyczyscic nasza wyszukiwarke
    this.selected = null;
  }
}
