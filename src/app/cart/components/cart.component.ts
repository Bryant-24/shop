import { Component, Input } from '@angular/core';

import { Product } from './../../products/model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  @Input()
  cart: Array<Product>;

}
