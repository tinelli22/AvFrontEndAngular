import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchmobileComponent } from './searchmobile.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    SearchmobileComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    SearchmobileComponent,
  ]
})
export class SearchmobileModule { }
