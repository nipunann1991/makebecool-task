import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  subTotal: any = 0 

  @Input() cartData: any;

  ngOnInit(): void {
   
  }

  closeCart(){
    this.cartData.openCart = !this.cartData.openCart;
  }

  getSubTotal(data: any){
    this.subTotal = 0;
    data.map((x: any) =>{
      this.subTotal =  this.subTotal + (x.quantity * x.discount_price);
    })

    return this.subTotal;  
  }

  removeItem(index: number){ 
    this.cartData.data[index].quantity--; 
    this.removeItemOnZero(index);
  }

  addItem(index: number){
    this.cartData.data[index].quantity++;
  }

  onChange(value: any, index: any) {
    (value == 0)? this.removeItemOnZero(index) : "";
  }

  removeItemOnZero(index: any){
    if(this.cartData.data[index].quantity == 0){
      this.cartData.data.splice(index, 1); 
      this.cartData.openCart = false;
      this.cartData.cartItems = this.cartData.data.length; 
    }
  }
  

}
