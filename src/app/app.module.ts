import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent,
    ProductCardComponent,
    RegisterComponent,
    CartComponent,
    ProductDetailsComponent,
    AddProductsComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    CheckoutComponent,
    ViewOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
