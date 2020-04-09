import { Component, OnInit } from '@angular/core';
import * as data from '../../db/products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = (data as any).default;

  constructor() { }

  ngOnInit(): void {
    console.log(this.products);
  }

}
