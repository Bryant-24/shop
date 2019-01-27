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

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.cart = this.cartService.getProducts();
  }

  onBuy(product: Product): void {
    this.cartService.addProductToCart(this.cart, product);
  }
}
