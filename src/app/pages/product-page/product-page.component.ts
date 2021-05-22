import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product: any = {
    id: 10154,
    name: "Handmade Stainless Steel Massive Wolf Chain with Odin’s Protection Charm - 50cm / 20in",
    image: "/assets/images/01.png",
    quantity: 1,
    price: 29.95,
    discount_price: 19.95
  }

  cartData: any = {
    openCart: false,
    cartItems: 0,
    data: []
  }

  constructor() { }

  ngOnInit(): void {
   
    if(localStorage.getItem("cartData") != null){
      this.cartData.data = JSON.parse(localStorage.getItem("cartData") || '{}')
    }

    this.cartData.cartItems = this.cartData.data.length; 
  
  } 

  getPrice(): any{

    if(this.product.discount_price != 0){
      return this.product.discount_price * this.product.quantity;
    }else{
      return this.product.price * this.product.quantity;
    }

  } 
 
  getCartData(data: Event) {
    this.cartData = data;
  }

  removeItem(){
    (this.product.quantity != 1)? this.product.quantity-- : ""; 
  }

  addItem(){
    this.product.quantity++;
  }

  onChange(value: any) {
    (this.product.quantity == 0)?  setTimeout(() => { this.product.quantity = 1 }, 100) : "";
  }
  
  addToCart(){
 
    if(this.cartData.data.filter((x: any) => x.id === this.product.id ).length == 0){  
      this.cartData.data.push(Object.assign({}, this.product)); 
      
    }else{

      this.cartData.data.filter((x: any, i: number) => {
        if(x.id === this.product.id ){
          x.quantity = x.quantity + this.product.quantity;
        }
      }) 
      
    } 

    localStorage.setItem("cartData", JSON.stringify(this.cartData.data));
    this.cartData.openCart = true;
    this.product.quantity = 1;
    this.cartData.cartItems = this.cartData.data.length; 
 
  }

}
