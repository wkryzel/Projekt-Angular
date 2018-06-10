import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-drop-search',
  templateUrl: './drop-search.component.html',
  styleUrls: ['./drop-search.component.css']
})
export class DropSearchComponent implements OnInit, OnChanges {

  @Input() readonly resultTemplate;
  @Input() readonly elements: Array<string>;
  @Input() readonly selected: string;

  @Output() elementSelected = new EventEmitter();

  public inputModel: string = '';
  public selectedElement;

  public matchedResults = [];

  constructor(
    public searchService: SearchService,
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.selected) {
      this.selectedElement = changes.selected.currentValue;
    }
  }

  // Prosta Wyszukiwarka

  searchChanged(value) {
    this.inputModel = value;
    this.matchedResults = this.searchService.findMatchingElements(this.elements, value);
  }

  clearSearch() {
    this.inputModel = '';
  }

  // Lista

  selectElement(element) {
    this.selectedElement = element;
    this.inputModel = '';

    this.elementSelected.emit(element);
  }

  removeSelection() {
    this.selectedElement = null;
  }
}
