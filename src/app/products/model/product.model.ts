export enum Size {
  XL = 7,
  L = 6,
  M = 5,
  S = 3
}

interface IProduct {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  color: string;
  size: Size;
}

export class Product implements IProduct {

  constructor(
    public name: string,
    public description: string,
    public price: number,
    public isAvailable: boolean,
    public color: string,
    public size: Size
  ) { }
}
