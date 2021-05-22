import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() event: any;
  openMenu: boolean = false;
  openCart: boolean = false;
  cartData: any;
  
  @Output() cartDataOnclick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.cartData =  this.event 
  }

  toggleNav(){
    this.openMenu = !this.openMenu;
  }

  toggleCart() { 
    this.cartData.openCart = !this.cartData.openCart; 
    this.cartDataOnclick.emit(this.cartData);
  }

}
