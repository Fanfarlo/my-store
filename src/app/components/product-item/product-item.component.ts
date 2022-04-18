import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { DetailsService } from 'src/app/services/details.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product;
  quantityList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selected: number = 1;


  constructor(
    private cartService: CartService,
    private detailsService: DetailsService,
    private auth: AuthService
  ) {
    this.product = {
      id: 0,
      name: '',
      price: 1,
      url: '',
      description: '',
      quantity: 1,
    };
  }

  addToDetails(product: Product) {
    this.detailsService.addToDetails(product);
  }
  addToCart(product: Product) {
    product.quantity = this.selected;
    this.cartService.addToCart(product);
  }
}
