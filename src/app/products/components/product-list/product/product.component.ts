import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input()
  product: Product;

  @Output()
  bought: EventEmitter<Product> = new EventEmitter<Product>();

  onBuy() {
    console.log(`Вы добавили в корзину ${this.product.name}`);
    this.bought.emit(this.product);
  }

}
