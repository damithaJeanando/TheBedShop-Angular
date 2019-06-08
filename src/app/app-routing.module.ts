import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'admin/orders', component: AdminOrdersComponent},
  {path: 'admin/products', component: AdminProductsComponent},
  {path: 'admin/products/:productId', component: AddProductsComponent},
  {path: 'cart/checkout', component: CheckoutComponent},
  {path: 'view-orders', component: ViewOrdersComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
