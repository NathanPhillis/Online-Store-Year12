import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { StoreComponent } from './store/store.component'
import { ItemComponent } from './item/item.component'
import { CartComponent } from './cart/cart.component'
import { CheckoutComponent } from './checkout/checkout.component'
import { AboutUsComponent } from './about-us/about-us.component'

const routes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'store', component: StoreComponent},
	{path: 'item/:id', component: ItemComponent},
	{path: 'cart', component: CartComponent},
	{path: 'checkout', component: CheckoutComponent},
	{path: 'about-us', component: AboutUsComponent},
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
