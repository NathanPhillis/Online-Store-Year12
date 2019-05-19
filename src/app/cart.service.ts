import { Injectable } from '@angular/core';
import { Shirt } from './shirt';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	
	total: number = 0;
	
	items: Shirt[] = [];

  constructor() { }
}
