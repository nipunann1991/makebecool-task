import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component'; 
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  { path: 'product-page', component: ProductPageComponent },
  { path: 'home',  component: HomePageComponent },
  { path: '', redirectTo: '/product-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
