import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ItemComponent } from '../item/item.component';
import { Shirt } from '../shirt'
import data from '../../assets/products.json';

export interface Tag { name: string; }

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
	removable = true;
	readonly separatorKeysCodes: number[] = [ENTER, COMMA];
	addOnBlur = true;
	tagCap = 10;
	
	tags: Tag[] = [];
	items: Shirt[] = [];
	
	//Tag stuff
	add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
		    if ((value || '').trim() && this.tags.length < this.tagCap) {
      this.tags.push({name: value.trim()});
    }
    if (input) {
      input.value = '';
    }
	}
	
	remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);
		if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
	
	//Make a <app-item> for every shirt in the array.
	ngOnInit() {
		for (let shirt of data) {
			this.items.push(new Shirt(shirt.name, shirt.topic, shirt.description, shirt.src, shirt.number));
		}
  }
}
