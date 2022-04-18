import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  @Input() product: Product;
  quantityList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selected: number = 1;

  constructor(
    private cartService: CartService,
    private detailsService: DetailsService
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

  ngOnInit(): void {
    this.product = this.detailsService.getProduct();
  }

  addToCart(product: Product) {
    product.quantity = this.selected;
    this.cartService.addToCart(product);
  }
}
