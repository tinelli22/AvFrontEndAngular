import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ProductsComponent } from './products.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import localebr from '@angular/common/locales/br';
registerLocaleData(localebr, 'br');

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    MatIconModule,
  ],
  exports: [
    ProductsComponent
  ],
  providers: [

  ]
})
export class ProductsModule { }
