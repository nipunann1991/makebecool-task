import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  openMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  toggleNav(){
    this.openMenu = !this.openMenu;
  }

}
