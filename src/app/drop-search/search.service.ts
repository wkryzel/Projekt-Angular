import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  findMatchingElements(elements: Array<string>, text: string): Array<string> {
    return elements.filter((element: string) => {
      let index = element.toLowerCase().indexOf(text.toLowerCase())
      return index > -1;
    })
  }
}
