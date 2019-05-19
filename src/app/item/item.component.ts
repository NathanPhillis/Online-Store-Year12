import { Component, OnInit, Input } from '@angular/core';
import { Shirt } from '../shirt';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
	@Input() shirt: Shirt;
	
	private total: number;
	
	addToCart() {
		this.carthandler.total += this.shirt.price;
		this.carthandler.items.push(this.shirt);
	}
	
  constructor(private carthandler: CartService) {
	}

  ngOnInit() {}

}
