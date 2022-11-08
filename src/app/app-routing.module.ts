import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'product-details', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'product-details', component: ProductDetailsComponent, data: { text: 'Product Details' } },
  { path: 'shopping-cart', component: ShoppingCartComponent, data: { text: 'Shopping Cart' } },
  { path: 'all-products', component: AllProductsComponent, data: { text: 'All Products' } },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
