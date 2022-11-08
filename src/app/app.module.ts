import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxBadgeModule, IgxSelectModule, IgxInputGroupModule, IgxButtonGroupModule, IgxCardModule, IgxListModule, IgxAvatarModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    AllProductsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxBadgeModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxButtonGroupModule,
    IgxCardModule,
    FormsModule,
    IgxListModule,
    IgxAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
