import { Component, OnInit } from '@angular/core';
import { paymentInfo } from 'src/app/models/payment';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  paymentInfo: paymentInfo;
  constructor(private cartService: CartService) {
    this.paymentInfo = {
      name: '',
      address: '',
      card: '',
      total: '',
    };
  }

  ngOnInit(): void {
    this.paymentInfo = this.cartService.getInfo();
  }
}
