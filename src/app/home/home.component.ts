import { Component, OnInit } from '@angular/core';
import { Shirt } from '../shirt';
import data from '../../assets/products.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	items: Shirt[] = [];
	featured: Shirt[] = [];
	
  constructor() { }

  ngOnInit() {
		for (let shirt of data) {
			this.items.push(new Shirt(shirt.name, shirt.topic, shirt.description, shirt.src, shirt.number));
		}
		this.featured = [this.items[5], this.items[10], this.items[15]]
  }

}
