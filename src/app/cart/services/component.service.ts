import { Injectable } from '@angular/core';

import { Product } from './../../products/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getProducts(): Array<Product> {
    return [];
  }

  addProductToCart(cart: Array<Product>, product: Product) {
    cart.push(product);
  }
}
