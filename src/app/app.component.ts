import { Component, OnInit } from '@angular/core';

import { Product } from './products/model/product.model';
import { ProductService } from './products/services/product.service';
import { CartService } from './cart/services/component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products: Array<Product>;
  cart: Array<Product>;

  constructor(private ProductService: ProductService, private CartService: CartService) {}

  ngOnInit() {
    this.products = this.ProductService.getProducts();
    this.cart = [];
  }

  onBuy(product: Product): void {
    this.CartService.addProductToCart(this.cart, product);
  }
}
