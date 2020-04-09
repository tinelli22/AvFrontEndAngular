import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from './search.component';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
