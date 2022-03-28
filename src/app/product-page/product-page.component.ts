import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  route: any;
  productService: any;
  constructor() { }

  ngOnInit(): void {
  }
  imageUrl: string = '';
  product: Product | undefined;

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService
      .getProduct(id)
      .subscribe((product: Product | undefined) => (this.product = product));
  }
}
