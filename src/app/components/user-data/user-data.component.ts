import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { CartService } from 'src/app/services/cart.service';
import { paymentInfo } from 'src/app/models/payment';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  @Input() totalAmount: string = '';
  @Output() emptyCart = new EventEmitter<Product[]>();
  name: string = '';
  address: string = '';
  card: string = '';
  emptyArray: Product[] = [];
  constructor(
    private cartService: CartService,
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const paymentInfo: paymentInfo = {
      name: this.name,
      total: this.totalAmount,
      address: this.address,
      card: this.card,
    };
    this.cartService.addInfo(paymentInfo);
    this.router.navigate(['/confirmation']);
    this.emptyCart.emit(this.emptyArray);
  }
}
