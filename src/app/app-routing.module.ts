import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./container/home/home.module').then(mod => mod.HomeModule) },
  { path: 'admin', loadChildren: () => import('./container/admin/admin.module').then(mod => mod.AdminModule) },
  { path: 'aboutus', loadChildren: () => import('./container/aboutus/aboutus.module').then(mod => mod.AboutusModule) },
  { path: 'contactus', loadChildren: () => import('./container/contactus/contactus.module').then(mod => mod.ContactusModule) },
  { path: 'shopping', loadChildren: () => import('./container/shopping/shopping.module').then(mod => mod.ShoppingModule) },
  { path: 'productDetails/:id', loadChildren: () => import('./container/productDetails/productDetails.module').then(mod => mod.ProductDetailsModule) },
  { path: 'login', loadChildren: () => import('./container/login/login.module').then(mod => mod.LoginModule) },
  { path: 'cart', loadChildren: () => import('./container/cart/cart.module').then(mod => mod.CartModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
