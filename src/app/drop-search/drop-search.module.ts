import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropSearchComponent } from './drop-search/drop-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [DropSearchComponent],
  exports: [DropSearchComponent]
})
export class DropSearchModule { }
