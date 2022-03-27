import { Component, OnInit, Input } from '@angular/core';
import { PRODUCTS } from '../mock-product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
