import { Component, OnInit } from '@angular/core';
import { Shirt } from '../shirt';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	
	items: Shirt[] = [];
	
  constructor(private carthandler: CartService) {
		this.items = carthandler.items;
	}
	
	clearCart() {
		this.carthandler.items = [];
		this.carthandler.total = 0;
		this.items = [];
	}

  ngOnInit() {
  }

}
