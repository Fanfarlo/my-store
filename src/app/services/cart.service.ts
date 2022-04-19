import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import * as _ from 'lodash';
import { paymentInfo } from '../models/payment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: Product[] = [];
  storageList: Product[] = [];
  amount: number = 0;
  paymentInfo: paymentInfo;
  totalAmount: string;

  constructor() {
    this.paymentInfo = {
      name: '',
      address: '',
      card: '',
      total: '',
    };
    this.totalAmount = '';
  }

  // storageProducts(){
  //   localStorage.setItem('cartList', JSON.stringify(this.cartList))
  //   this.cartList = JSON.parse(localStorage.getItem('cartList')!);
  //   return this.cartList
  // }
  getCartList() {
    if (this.cartList === null) {
      this.cartList = [];
      return this.cartList;
    } else {
      this.cartList = JSON.parse(localStorage.getItem('cartList')!);
      return this.cartList;
    }

    // this.cartList = JSON.parse(localStorage.getItem('cartList')!);
    // return this.cartList;
  }

  addToCart(product: Product) {
    const addedItem = this.cartList.find(element => element.id == product.id);

    if (addedItem?.quantity && product.quantity) {
      addedItem.quantity =
        Number(addedItem.quantity) + Number(product.quantity);
      localStorage.setItem('cartList', JSON.stringify(this.cartList));
      alert('Updated cart');
    } else {
      this.cartList.unshift(product);
      localStorage.setItem('cartList', JSON.stringify(this.cartList));
      alert('Added  to the cart');
    }
  }

  removeProduct(product: Product) {
    _.forEach(this.cartList, (p, index) => {
      if (product.id == p.id) {
        this.cartList.splice(index, 1);
      }
    });
    alert('Product was removed');
  }

  updateAmount() {
    let value: number = 0;
    _.forEach(this.cartList, p => {
      value += p.quantity * p.price;
    });
    localStorage.setItem('cartList', JSON.stringify(this.cartList));
    return (this.totalAmount = value.toFixed(2));
  }

  addInfo(paymentInfo: paymentInfo) {
    // let empty: Product[] = []
    this.paymentInfo = paymentInfo;
    // localStorage.removeItem('cartList')
    // this.cartList = empty
    // localStorage.setItem('cartList', JSON.stringify(this.cartList))
  }

  getInfo() {
    return this.paymentInfo;
  }
}
