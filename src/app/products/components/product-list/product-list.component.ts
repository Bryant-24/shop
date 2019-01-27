import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input()
  products: Array<Product>;

  @Output()
  bought: EventEmitter<Product> = new EventEmitter();

  onBuy(product: Product) {
    this.bought.emit(product);
  }

}
