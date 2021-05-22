import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HeaderComponent } from './component/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    HeaderComponent,
    HomePageComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
