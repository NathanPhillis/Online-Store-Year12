import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material'
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ItemComponent } from '../item/item.component'

export interface Tag {
	name: string;
}

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
	items = [];
	
	add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
		
    // Add our fruit
    if ((value || '').trim() && this.tags.length < this.tagCap) {
      this.tags.push({name: value.trim()});
    }

    // Reset the input value
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
	
	ngOnInit() {
  }
}
