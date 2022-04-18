import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  productDetail: Product;
  constructor() {
    this.productDetail = {
      id: 0,
      name: '',
      price: 1,
      url: '',
      description: '',
      quantity: 1,
    };
  }

  getProduct() {
    return this.productDetail;
  }

  addToDetails(product: Product) {
    this.productDetail = product;
    return this.productDetail;
  }
}
