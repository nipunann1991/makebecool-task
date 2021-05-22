import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cartData: any = {
    openCart: true,
    cartItems: 10
  }
 
  getCartData(data: Event) {
    this.cartData = data;
  }

}
