import { Injectable } from '@angular/core';

import { Product, Size } from './../model/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
      new Product(
        'Мяч баскетбольный Jogel JB-100',
        'Jogel JB-100 №3 – это классический резиновый баскетбольный мяч.',
        464,
        true,
        'Коричневый',
        Size.S
      ),
      new Product(
        'Мяч баскетбольный Molten GR7',
        'Баскетбольный мяч Molten произведен из специальной резины с увеличенной износостойкостью.',
        747,
        true,
        'Синий',
        Size.XL
      ),
      new Product(
        'Мяч баскетбольный Nike Swoosh Mini',
        'Мягкое резиновое покрытие. Текстура предотвращающая налипание грязи и пыли.',
        686,
        true,
        'Желтый',
        Size.S
      )
    ];
  }
}
