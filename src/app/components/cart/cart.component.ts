import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { paymentInfo } from 'src/app/models/payment';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList: Product[] = [];
  totalAmount: string = '';
  name: string = '';
  address: string = '';
  card: string = '';

  constructor(
    private cartService: CartService,
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList();
    
    this.totalAmount = this.cartService.updateAmount();
  }

  updateCart(product: Product) {
    if (product.quantity == 0) {
      this.cartService.removeProduct(product);
      this.totalAmount = '0';
    }
    this.totalAmount = this.cartService.updateAmount();
  }

  onSubmit() {
    const paymentInfo: paymentInfo = {
      name: this.name,
      total: this.totalAmount,
      address: this.address,
      card: this.card,
    };
    this.cartService.addInfo(paymentInfo);
    this.router.navigate(['/confirmation']);
  }
}
